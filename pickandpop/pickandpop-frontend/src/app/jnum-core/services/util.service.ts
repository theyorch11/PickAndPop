import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GenericBean } from '../model/generic-bean';
import { environment } from '../../../environments/environment';
import { Docfile } from '../../customized/docfile/model/docfile';
import { DocfileService } from '../../customized/docfile/service/docfile.service';


@Injectable()
export class UtilService {

    res: string;
    pop=false;

    constructor() { }

    isPop():boolean{
        return this.pop;
    }

    setPop(pop:boolean){
        this.pop=pop;
    }

    compareFn<T extends GenericBean>( c1: T, c2: T ): boolean {
        let isSame=false;
		if(c1 && c2){
	        if ( !( c1.id && c2.id ) ) {
	            isSame = c1 && c2 ? JSON.stringify( c1 ) === JSON.stringify( c2 ) : c1 === c2;
	        } else {
	            isSame = c1 && c2 ? JSON.stringify( c1.id ) === JSON.stringify( c2.id ) : c1 === c2;
	        }
		}
        return isSame;
    }

    sort<T extends GenericBean>( a: T[], field: string ): void {
        a.sort(( c1, c2 ): number => {
            return ( c1[field] > c2[field] ) ? 1 : -1;
        } );
    }

    getEmptyPageEvent(): PageEvent {
        const pageEvent = new PageEvent();
        pageEvent.pageIndex = 0;
        pageEvent.pageSize = 0;
        return pageEvent;
    }

    getDefaultPageEvent(): PageEvent {
        const pageEvent = new PageEvent();
        pageEvent.pageIndex = 0;
        pageEvent.pageSize = environment.pageSize;
        return pageEvent;
    }

    getDefaultDetallePageEvent(): PageEvent {
        const pageEvent = new PageEvent();
        pageEvent.pageIndex = 0;
        pageEvent.pageSize = environment.detallePageSize;
        return pageEvent;
    }

    getFileFromBase64String( data: Docfile ) {
        var blob = this.base64toBlob( data.fichero, data.filetype );

        if ( window.navigator && window.navigator.msSaveOrOpenBlob ) {
            window.navigator.msSaveOrOpenBlob( blob, data.filename );
        } else {
            var a = document.createElement( 'a' );
            a.href = URL.createObjectURL( blob );
            a.download = data.filename;
            document.body.appendChild( a );
            a.click();
            document.body.removeChild( a );
        }
    }

    base64toBlob( base64Data, contentType ) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob( base64Data );
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil( bytesLength / sliceSize );
        var byteArrays = new Array( slicesCount );

        for ( var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex ) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min( begin + sliceSize, bytesLength );

            var bytes = new Array( end - begin );
            for ( var offset = begin, i = 0; offset < end; ++i, ++offset ) {
                bytes[i] = byteCharacters[offset].charCodeAt( 0 );
            }
            byteArrays[sliceIndex] = new Uint8Array( bytes );
        }
        return new Blob( byteArrays, { type: contentType } );
    }
    
    getMilliSeconds( date: any ): number {
        let dateNew = new Date( date );
        return dateNew.getTime();
    }   

    compararFechas(fecha1: Date, fecha2: Date):number{
        if (fecha1 > fecha2){
            return 1;
        }else if (fecha1 < fecha2){
            return -1;
        }else{
            return 0;
        }
    }

    obtenerDiferenciaMeses(date1: Date, date2:Date):number{
      let monthDate1: number = date1.getMonth();
      let yearDate1: number = date1.getFullYear();
      let monthDate2: number = date2.getMonth();
      let yearDate2: number = date2.getFullYear();

      let diffA = yearDate2 - yearDate1;
      
      let diffM = 12 * Math.abs(diffA) + monthDate2 - monthDate1;
      return Math.abs(diffM);
    }
}
