import { Component, OnInit } from '@angular/core';
import { GeneratedPermisoEditComponent } from '@generated/permiso/view/generated-permiso-edit.component';

@Component( {
    selector: 'app-permiso-edit',
    templateUrl: '../../../generated/permiso/view/generated-permiso-edit.component.html'
} )
export class PermisoEditComponent extends GeneratedPermisoEditComponent implements OnInit{
    ngOnInit() {   
    	super.ngOnInit();       
    } 
}
