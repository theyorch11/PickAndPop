import { Component, OnInit } from '@angular/core';
import { GeneratedUserNewComponent } from '@generated/user/view/generated-user-new.component';

@Component({
  selector: 'app-user-new',
  templateUrl: '../../../generated/user/view/generated-user-new.component.html'
})
export class UserNewComponent extends GeneratedUserNewComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}
