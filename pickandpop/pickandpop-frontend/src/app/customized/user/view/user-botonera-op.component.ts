import { Component, OnInit } from '@angular/core';
import {GeneratedUserBotoneraOpComponent} from '@generated/user/view/generated-user-botonera-op.component';

@Component({
  selector: 'app-user-botonera-op',
  templateUrl: '../../../generated/user/view/generated-user-botonera-op.component.html'
})
export class UserBotoneraOpComponent extends GeneratedUserBotoneraOpComponent implements OnInit{   
    ngOnInit() {     
    	super.ngOnInit();         
    }     
}
