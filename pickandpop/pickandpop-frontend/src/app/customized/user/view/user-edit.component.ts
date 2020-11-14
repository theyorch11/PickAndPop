import { Component, OnInit } from '@angular/core';
import { GeneratedUserEditComponent } from '@generated/user/view/generated-user-edit.component';

@Component( {
    selector: 'app-user-edit',
    templateUrl: '../../../generated/user/view/generated-user-edit.component.html'
} )
export class UserEditComponent extends GeneratedUserEditComponent implements OnInit{
    ngOnInit() {   
    	super.ngOnInit();       
    } 
}
