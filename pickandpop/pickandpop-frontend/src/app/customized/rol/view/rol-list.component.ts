import { Component, OnInit } from '@angular/core';
import { GeneratedRolListComponent } from '@generated/rol/view/generated-rol-list.component';

@Component({
  selector: 'app-rol-list',
  styleUrls:['./rol-list.component.css'],
  templateUrl: '../../../generated/rol/view/generated-rol-list.component.html'
})
export class RolListComponent extends GeneratedRolListComponent implements OnInit{
    ngOnInit() {   
    	super.ngOnInit();       
    }
}
