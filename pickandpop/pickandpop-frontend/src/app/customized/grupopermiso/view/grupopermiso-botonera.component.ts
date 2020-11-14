import { Component, OnInit } from '@angular/core';
import { GeneratedGrupoPermisoBotoneraComponent } from '@generated/grupopermiso/view/generated-grupopermiso-botonera.component';

@Component({
  selector: 'app-grupopermiso-botonera',
  templateUrl: '../../../generated/grupopermiso/view/generated-grupopermiso-botonera.component.html'
})
export class GrupoPermisoBotoneraComponent extends GeneratedGrupoPermisoBotoneraComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}