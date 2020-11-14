import {TypeMessage} from '../enum/type-message.enum';
import { Injectable, TemplateRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class ToasterService {

	constructor(private translate: TranslateService){}

  showToaster(typeMessage: TypeMessage, msg: string) {
	if(typeMessage===TypeMessage.InfoMessage){
		   this.show(msg, { header:this.translate.instant('toaster.headerinfo'),classname: 'bg-success text-light', delay: 10000 });
	}else{
		   this.show(msg, { header: this.translate.instant('toaster.headererror'),classname: 'bg-danger text-light', delay: 10000 });
	}
  }

toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
 
}


