import { Component, OnInit } from '@angular/core';
import { GeneratedGrupoPermisoRolSelectComponent } from '@generated/grupopermiso/view/generated-grupopermiso-rol-select.component';

@Component( {
    selector: 'app-grupopermiso-rol-select',
    templateUrl: '../../../generated/grupopermiso/view/generated-grupopermiso-rol-select.component.html'
} )
export class GrupoPermisoRolSelectComponent extends GeneratedGrupoPermisoRolSelectComponent implements OnInit{
   
    ngOnInit() {        
    	super.ngOnInit();   
    }     
}
