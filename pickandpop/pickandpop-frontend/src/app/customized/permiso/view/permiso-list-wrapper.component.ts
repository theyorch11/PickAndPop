import { Component, OnInit } from '@angular/core';
import { GeneratedPermisoListWrapperComponent } from "@generated/permiso/view/generated-permiso-list-wrapper.component";

@Component( {
    selector: 'app-permiso-list-wrapper',
    templateUrl: '../../../generated/permiso/view/generated-permiso-list-wrapper.component.html'
} )
export class PermisoListWrapperComponent extends GeneratedPermisoListWrapperComponent implements OnInit {

    ngOnInit() {
    	super.ngOnInit();
    }

}
