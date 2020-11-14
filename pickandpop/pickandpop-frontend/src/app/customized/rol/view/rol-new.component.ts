import { Component, OnInit } from '@angular/core';
import { GeneratedRolNewComponent } from '@generated/rol/view/generated-rol-new.component';

@Component({
  selector: 'app-rol-new',
  templateUrl: '../../../generated/rol/view/generated-rol-new.component.html'
})
export class RolNewComponent extends GeneratedRolNewComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}
