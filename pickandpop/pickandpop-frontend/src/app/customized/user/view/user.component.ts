import { Component, OnInit } from '@angular/core';
import { GeneratedUserComponent } from '@generated/user/view/generated-user.component';

@Component({
  selector: 'app-user',
  templateUrl: '../../../generated/user/view/generated-user.component.html'
})
export class UserComponent extends GeneratedUserComponent implements OnInit{
    ngOnInit() { 
    	super.ngOnInit();         
    } 
}
