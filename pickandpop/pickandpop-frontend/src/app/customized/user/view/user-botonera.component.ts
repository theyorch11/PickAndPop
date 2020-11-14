import { Component, OnInit } from '@angular/core';
import { GeneratedUserBotoneraComponent } from '@generated/user/view/generated-user-botonera.component';

@Component({
  selector: 'app-user-botonera',
  templateUrl: '../../../generated/user/view/generated-user-botonera.component.html'
})
export class UserBotoneraComponent extends GeneratedUserBotoneraComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}