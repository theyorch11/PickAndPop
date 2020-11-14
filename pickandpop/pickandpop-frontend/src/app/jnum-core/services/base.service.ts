import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ToasterService } from './toaster.service';
import { ExceptionHandlerService } from './exception-handler.service';
import { TypeMessage } from '../enum/type-message.enum';
import { Token } from '../model/token';
import { PaginationPage, PaginationPropertySort } from '../util/pagination';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { GenericFilter } from '../filter/generic-filter';
import { environment } from '../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Docfile } from "../../customized/docfile/model/docfile";


@Injectable()
export class BaseService<T>{


    protected token: Token;
    protected pageIndex = 0;
    protected pageSize = 10;
    protected url: string;

    emptyPage: {
        number: 0,
        size: 0,
    };

    constructor( protected http: HttpClient, public toasterService: ToasterService, public translate: TranslateService, private router: Router, protected exceptionHandler: ExceptionHandlerService ) { }

    getHttpHeaders(): HttpHeaders {
        const currentUser = JSON.parse( sessionStorage.getItem( 'currentUser' ) );
        this.token = currentUser && currentUser.token;
        if ( this.token ) {
            return new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer ' + this.token.jwtToken
                } );
        }
        return new HttpHeaders( { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } );
    }

    getAllEntities( event?: PageEvent ): Observable<PaginationPage<T>> {
        return this.http.get<PaginationPage<T>>( this.buildUrl( this.url, event ), { headers: this.getHttpHeaders() } )
            .pipe(
            catchError( this.exceptionHandler.handleError( '', this.emptyPage ) )
            );
    }
    
    getEntity( id: string ): Observable<T> {
        const getEntityUrl = this.url + '/' + id;
        return this.http.get<T>( getEntityUrl,{ headers: this.getHttpHeaders() } ).pipe(
            tap(
                _ => console.log( `fetched entity id=${id}` )
            ),
            catchError( this.exceptionHandler.handleError<T>( `getEntity id=${id}` ) )
        );
    }

    addEntity( entity: T ): Observable<T> {
        return this.http.post<T>( this.url, entity, { headers: this.getHttpHeaders() } ).pipe(
            tap(
                entitynew => this.toasterService.showToaster( TypeMessage.InfoMessage, this.translate.instant('toaster.addok') )
            ),
            catchError( this.exceptionHandler.handleError<T>( 'addEntity' ) )
        );
    }

    updateEntity( entity: T ): Observable<T> {
        return this.http.put( this.url, entity, { headers: this.getHttpHeaders() } ).pipe(
            tap(
                _ => this.toasterService.showToaster( TypeMessage.InfoMessage, this.translate.instant('toaster.editok')  )
            ),
            catchError( this.exceptionHandler.handleError<any>( 'updateEntity' ) )
        );
    }

    deleteEntity( id: String ): Observable<T> {
        const deleteUrl = this.url + '/' + id;
        return this.http.delete<T>( deleteUrl, { headers: this.getHttpHeaders() } ).pipe(
            tap(
                _ => this.toasterService.showToaster( TypeMessage.InfoMessage, this.translate.instant('toaster.deleteok')  )
            ),
            catchError( this.exceptionHandler.handleError<T>( 'deleteEntity' ) )
        );
    }

    searchEntitiesByFilter( filter: GenericFilter, pageSize: number, event?: PageEvent,sort?:Sort ): Observable<PaginationPage<T>> {
        if ( event == null ) {
            event = new PageEvent();
            event.pageIndex = environment.firstPageIndex;
            event.pageSize = pageSize;
        }
        return this.http.post<PaginationPage<T>>( this.buildUrl( this.url + '/filter', event, sort ), filter, { headers: this.getHttpHeaders() } ).pipe(
            catchError( this.exceptionHandler.handleError( '', this.emptyPage ) )
        );
    }
    

    protected buildUrl( urlBase: string, event?: PageEvent,sort?:Sort ): string {        
        if ( event  && sort && sort.active) {
            this.pageIndex = event.pageIndex;
            this.pageSize = event.pageSize;
            return urlBase + '?page=' + this.pageIndex + '&size=' + this.pageSize + '&sort=' + sort.active + ',' + sort.direction;
        }else if(event){
            this.pageIndex = event.pageIndex;
            this.pageSize = event.pageSize;
            return urlBase + '?page=' + this.pageIndex + '&size=' + this.pageSize;            
        }else if(sort && sort.active){
            return urlBase + '?sort=' + sort.active + ',' + sort.direction;            
        }
        return urlBase;
    }
    
    generarPdf( filter: GenericFilter ): Observable<Docfile> {
        return this.http.post<Docfile>( this.url + "/pdf/filter", filter, { headers: this.getHttpHeaders() } ).pipe(
            catchError( this.exceptionHandler.handleError<Docfile>( 'docFile' ) )
        );

    }

    generarExcel( filter: GenericFilter ): Observable<Docfile> {
        return this.http.post<Docfile>( this.url + "/excel/filter", filter, { headers: this.getHttpHeaders() } ).pipe(
            catchError( this.exceptionHandler.handleError<Docfile>( '' ) )
        );
    }
    
    
    canDoAdd(): Observable < any > {       
        return this.http.get( this.url + "/candoadd",{ headers: this.getHttpHeaders() } ).pipe(
            tap(
            ),        
            catchError( this.exceptionHandler.handleError<any>( 'candoadd' ) )
        );
    }  	

    canDoEdit(): Observable < any > {
        return this.http.get( this.url + "/candoedit", { headers: this.getHttpHeaders() } ).pipe(
            tap(
            ),        
            catchError( this.exceptionHandler.handleError<any>( 'candoedit' ) )
        );
    }  	

    canDoDelete(): Observable < any > {
        return this.http.get( this.url + "/candodelete",{ headers: this.getHttpHeaders() } ).pipe(
            tap(
            ),        
            catchError( this.exceptionHandler.handleError<any>( 'candodelete' ) )
        );
    }  	

}
