import { Component, OnInit } from '@angular/core';
import { GeneratedUserListComponent } from '@generated/user/view/generated-user-list.component';

@Component({
  selector: 'app-user-list',
  styleUrls:['./user-list.component.css'],
  templateUrl: '../../../generated/user/view/generated-user-list.component.html'
})
export class UserListComponent extends GeneratedUserListComponent implements OnInit{
    ngOnInit() {   
    	super.ngOnInit();       
    }
}
