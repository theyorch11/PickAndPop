import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ToasterService } from './toaster.service';
import { TypeMessage } from '../enum/type-message.enum';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ExceptionHandlerService {

    constructor( public toasterService: ToasterService, private router: Router,private translate: TranslateService ) { }

    public handleError<T>( operation = 'operation', result?: T ) {
        return ( error: any ): Observable<T> => {
            let errorMessage;
            let goToHome = false;
            if ( error ) {
                errorMessage = error.error.message;
                switch ( error.status ) {
                    case 401:
                        goToHome = true;
                        break;                        
                    case 403:
                        goToHome = true;
                        break;
                    case 404:
                        errorMessage = this.translate.instant('toaster.notfounderror');
                        break;                         
                }
                if(!errorMessage){
                    errorMessage=this.translate.instant('toaster.genericerror');
                }
                this.toasterService.showToaster( TypeMessage.ErrorMessage, errorMessage );
                if ( goToHome ) {
                    this.router.navigateByUrl( '/login' );
                }
            }
            // Let the app keep running by returning an empty result.
            return of( result as T );
        };
    }

}
