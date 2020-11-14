import { Component, OnInit } from '@angular/core';
import { GeneratedRolEditComponent } from '@generated/rol/view/generated-rol-edit.component';

@Component( {
    selector: 'app-rol-edit',
    templateUrl: '../../../generated/rol/view/generated-rol-edit.component.html'
} )
export class RolEditComponent extends GeneratedRolEditComponent implements OnInit{
    ngOnInit() {   
    	super.ngOnInit();       
    } 
}
