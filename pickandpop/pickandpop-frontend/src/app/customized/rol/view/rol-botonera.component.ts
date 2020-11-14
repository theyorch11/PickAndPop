import { Component, OnInit } from '@angular/core';
import { GeneratedRolBotoneraComponent } from '@generated/rol/view/generated-rol-botonera.component';

@Component({
  selector: 'app-rol-botonera',
  templateUrl: '../../../generated/rol/view/generated-rol-botonera.component.html'
})
export class RolBotoneraComponent extends GeneratedRolBotoneraComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}