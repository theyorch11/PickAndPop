import { Component, OnInit } from '@angular/core';
import { GeneratedPermisoComponent } from '@generated/permiso/view/generated-permiso.component';

@Component({
  selector: 'app-permiso',
  templateUrl: '../../../generated/permiso/view/generated-permiso.component.html'
})
export class PermisoComponent extends GeneratedPermisoComponent implements OnInit{
    ngOnInit() { 
    	super.ngOnInit();         
    } 
}
