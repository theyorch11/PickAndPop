import { Component, OnInit } from '@angular/core';
import { GeneratedRolSearchComponent } from '@generated/rol/view/generated-rol-search.component';

@Component({
  selector: 'app-rol-search',
  templateUrl: '../../../generated/rol/view/generated-rol-search.component.html'
})
export class RolSearchComponent extends GeneratedRolSearchComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();       
    } 
}
