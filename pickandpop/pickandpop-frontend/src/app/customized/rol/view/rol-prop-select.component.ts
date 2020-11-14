import { Component, OnInit } from '@angular/core';
import { GeneratedRolPropSelectComponent } from '@generated/rol/view/generated-rol-prop-select.component';


@Component( {
    selector: 'app-rol-prop-select',
    templateUrl: '../../../generated/rol/view/generated-rol-prop-select.component.html'
} )
export class RolPropSelectComponent extends GeneratedRolPropSelectComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}