import { Component, OnInit } from '@angular/core';
import { GeneratedUserSearchComponent } from '@generated/user/view/generated-user-search.component';

@Component({
  selector: 'app-user-search',
  templateUrl: '../../../generated/user/view/generated-user-search.component.html'
})
export class UserSearchComponent extends GeneratedUserSearchComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();       
    } 
}
