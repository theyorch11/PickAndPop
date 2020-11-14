import { Component, OnInit } from '@angular/core';
import { GeneratedRolComponent } from '@generated/rol/view/generated-rol.component';

@Component({
  selector: 'app-rol',
  templateUrl: '../../../generated/rol/view/generated-rol.component.html'
})
export class RolComponent extends GeneratedRolComponent implements OnInit{
    ngOnInit() { 
    	super.ngOnInit();         
    } 
}
