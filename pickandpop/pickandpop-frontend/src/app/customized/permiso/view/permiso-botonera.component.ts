import { Component, OnInit } from '@angular/core';
import { GeneratedPermisoBotoneraComponent } from '@generated/permiso/view/generated-permiso-botonera.component';

@Component({
  selector: 'app-permiso-botonera',
  templateUrl: '../../../generated/permiso/view/generated-permiso-botonera.component.html'
})
export class PermisoBotoneraComponent extends GeneratedPermisoBotoneraComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}