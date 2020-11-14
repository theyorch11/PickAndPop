import { Component, OnInit } from '@angular/core';
import { GeneratedUserPropSelectComponent } from '@generated/user/view/generated-user-prop-select.component';


@Component( {
    selector: 'app-user-prop-select',
    templateUrl: '../../../generated/user/view/generated-user-prop-select.component.html'
} )
export class UserPropSelectComponent extends GeneratedUserPropSelectComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}