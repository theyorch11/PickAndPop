import { Component,TemplateRef } from '@angular/core';
import {ToasterService} from '@jnum-core/services/toaster.service'

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastComponent {

constructor(public toastService: ToasterService) {}
	isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}
