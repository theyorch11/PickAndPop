import { Component, OnInit } from '@angular/core';
import { GeneratedUserRolSelectComponent } from '@generated/user/view/generated-user-rol-select.component';

@Component( {
    selector: 'app-user-rol-select',
    templateUrl: '../../../generated/user/view/generated-user-rol-select.component.html'
} )
export class UserRolSelectComponent extends GeneratedUserRolSelectComponent implements OnInit{
   
    ngOnInit() {        
    	super.ngOnInit();   
    }     
}
