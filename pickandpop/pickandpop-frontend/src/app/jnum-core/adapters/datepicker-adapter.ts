import {Component, Injectable} from '@angular/core';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter,NgbDateParserFormatter,NgbDateNativeUTCAdapter} from '@app/ng-bootstrap';

@Injectable()
export class CustomDateAdapter extends NgbDateNativeUTCAdapter{
	
  fromModel(object: Date): NgbDateStruct {
	if(object){
	let date = new Date(object);
	    return date ? {
	      year: date.getFullYear(),
	      month: date.getMonth() + 1,
	      day: date.getDate()
	    } : null;
	}
	return null;
  }

}

@Injectable()
export class CustomDateParserFormatter {
  parse(value: string): NgbDateStruct
  {
    if (!value)
      return null
     let parts=value.split('/');
     return {year:+parts[0],month:+parts[1],day:+parts[2]} as NgbDateStruct
  }
  format(date: NgbDateStruct): string
  {
	if(date){
		let day = date.day<10?'0'+date.day:date.day;
		let month = date.month<10?'0'+date.month:date.month;
	    return day + '/' + month + '/'+ date.year;
	}
	return null;
  }
}