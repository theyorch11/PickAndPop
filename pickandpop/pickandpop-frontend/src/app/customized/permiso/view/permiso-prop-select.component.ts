import { Component, OnInit } from '@angular/core';
import { GeneratedPermisoPropSelectComponent } from '@generated/permiso/view/generated-permiso-prop-select.component';


@Component( {
    selector: 'app-permiso-prop-select',
    templateUrl: '../../../generated/permiso/view/generated-permiso-prop-select.component.html'
} )
export class PermisoPropSelectComponent extends GeneratedPermisoPropSelectComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}