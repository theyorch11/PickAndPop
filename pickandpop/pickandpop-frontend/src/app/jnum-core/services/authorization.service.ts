import { Injectable } from '@angular/core';
import { Token } from '../model/token';
import { ExceptionHandlerService } from './exception-handler.service';
import { NavigationService } from './navigation.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

const roleUrl = environment.serviceUrl + '/jwt/hasRole';

@Injectable()
export class AuthorizationService {

    protected token: Token;

    protected permissions

    constructor(protected http: HttpClient, protected exceptionHandler: ExceptionHandlerService) { }

    getHttpHeaders(): HttpHeaders {
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        if (this.token) {
            return new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer ' + this.token.jwtToken
                });
        }
        return new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    }

    hasRemotePermission(permission: string): Observable<boolean> {
        return this.http.post<any>(roleUrl, permission, { headers: this.getHttpHeaders() }).pipe(
            catchError(
                this.exceptionHandler.handleError<boolean>('hasPermission', false)
            )
        );
    }

    hasPermission(permission: string): boolean {
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let authorities = currentUser.token.authorities;
            if (authorities.includes('all_https') || authorities.includes('all_http')) {
                return true;
            }
            if (permission.startsWith("all_mod")) {
                let entrole = permission.substring("all_mod".length + 1);
                return (
					authorities.includes(permission)|| 
					authorities.includes("all_ent_"+entrole)||
					authorities.includes("add_ent_"+entrole)||
					authorities.includes("edit_ent_"+entrole)||
					authorities.includes("delete_ent_"+entrole)||
					authorities.includes("view_ent_"+entrole));
            }
            if (permission.startsWith("all_ent")) {
                let entrole = permission.substring("all_ent".length + 1);
				let splitRole = permission.split("_");
				let module = splitRole[2];
				let allMod = "all_mod_" + module;
                return (
					authorities.includes(permission)|| 
					authorities.includes(allMod)||
					authorities.includes("add_ent_"+entrole)||
					authorities.includes("edit_ent_"+entrole)||
					authorities.includes("delete_ent_"+entrole)||
					authorities.includes("view_ent_"+entrole));
            }

            if (permission.startsWith("add_") || permission.startsWith("edit_") || permission.startsWith("add_") || permission.startsWith("delete_") || permission.startsWith("view_")) {
                let splitRole = permission.split("_");
                let module = splitRole[2];
                let entidad = splitRole[3];
                let allMod = "all_mod_" + module;
                let allEnt = "all_ent_" + module + "_" + entidad;
                return (authorities.includes(permission) || authorities.includes(allMod) || authorities.includes(allEnt));
            }
            if (permission.startsWith("op_") && !(permission === "op_change_password" || permission === "op_change_language")) {
                let splitRole = permission.split("_");
                let module = splitRole[1];
                let entidad = splitRole[2];
                let allMod = "all_mod_" + module;
                let allEnt = "all_ent_" + module + "_" + entidad;
                return (authorities.includes(permission) || authorities.includes(allMod) || authorities.includes(allEnt));
            }
            return authorities.includes(permission);

        }
        return false;
    }

}
