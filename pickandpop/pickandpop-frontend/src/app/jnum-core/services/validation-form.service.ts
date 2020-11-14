import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToasterService } from './toaster.service';
import { TypeMessage } from '../enum/type-message.enum';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ValidationFormService {

  constructor(public toasterService: ToasterService, public translate: TranslateService) { }

  validateAllFormFieldsForEntity(formGroup: FormGroup,nombreentidad:String) {
    let fields = "";
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        if (control.status == "INVALID") {
          fields =fields +"\t"+this.translate.instant(nombreentidad+"."+field)+"\n";
        }
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
    this.toasterService.showToaster(TypeMessage.ErrorMessage, this.translate.instant('global.formko')+"\n"+ fields);
  }
  
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }  

}
