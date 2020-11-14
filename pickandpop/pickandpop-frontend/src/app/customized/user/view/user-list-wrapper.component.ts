import { Component, OnInit } from '@angular/core';
import { GeneratedUserListWrapperComponent } from "@generated/user/view/generated-user-list-wrapper.component";

@Component( {
    selector: 'app-user-list-wrapper',
    templateUrl: '../../../generated/user/view/generated-user-list-wrapper.component.html'
} )
export class UserListWrapperComponent extends GeneratedUserListWrapperComponent implements OnInit {

    ngOnInit() {
    	super.ngOnInit();
    }

}
