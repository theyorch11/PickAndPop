import { Token } from '../model/token';
import { BaseService } from './base.service';
import { ExceptionHandlerService } from './exception-handler.service';
import { ToasterService } from './toaster.service';
import { NavigationService } from './navigation.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject,Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from "@customized/user/model/user";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

const loginUrl = environment.serviceUrl + '/jwt/authenticate';


@Injectable()
export class AuthenticationService {

    isLoggedIn = false;
	private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(
        private http: HttpClient,
        private exceptionHandler: ExceptionHandlerService,
        private navigationService: NavigationService) { 
		this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
	}


    public token: Token;


        login( user: User ): Observable<any> {
            return this.http.post<any>(
                loginUrl, user,
                { headers: new HttpHeaders( { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } ) } ).pipe(
                tap(
                    ( token: Token ) => {
                        this.token = token;
                        this.isLoggedIn = true;
                        user.key = null;                                                         
                        sessionStorage.setItem( 'currentUser', JSON.stringify( { user, token: token } ) );
						this.currentUserSubject.next(user);
                    }
                ),
                catchError(
                    this.exceptionHandler.handleError<boolean>( 'login', false )
                )
                );
        }

    isLogged(): boolean {
        return this.isLoggedIn;
    }

    logout(): void {
        this.token = null;
        this.isLoggedIn = false;
        this.navigationService.clearHistory();
        sessionStorage.removeItem('currentUser');
		this.currentUserSubject.next(null);
    }

}



