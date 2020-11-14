import { Component, OnInit } from '@angular/core';
import { GeneratedPermisoNewComponent } from '@generated/permiso/view/generated-permiso-new.component';

@Component({
  selector: 'app-permiso-new',
  templateUrl: '../../../generated/permiso/view/generated-permiso-new.component.html'
})
export class PermisoNewComponent extends GeneratedPermisoNewComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}
