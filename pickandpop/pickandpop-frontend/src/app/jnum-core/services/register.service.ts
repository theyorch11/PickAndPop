import {User} from '../model/user';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import { environment } from '../../../environments/environment'
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

const registerUrl = environment.serviceUrl +'/jwt/sign-up';


@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {}

  register(userToRegister: User): Observable<User> {
    return this.http.post<User>(registerUrl, userToRegister, httpOptions);
  }
}
