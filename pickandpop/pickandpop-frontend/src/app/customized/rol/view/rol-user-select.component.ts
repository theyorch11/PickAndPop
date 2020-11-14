import { Component, OnInit } from '@angular/core';
import { GeneratedRolUserSelectComponent } from '@generated/rol/view/generated-rol-user-select.component';

@Component( {
    selector: 'app-rol-user-select',
    templateUrl: '../../../generated/rol/view/generated-rol-user-select.component.html'
} )
export class RolUserSelectComponent extends GeneratedRolUserSelectComponent implements OnInit{
   
    ngOnInit() {        
    	super.ngOnInit();   
    }     
}
