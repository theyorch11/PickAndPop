import { Component, OnInit } from '@angular/core';
import { GeneratedGrupoPermisoEditComponent } from '@generated/grupopermiso/view/generated-grupopermiso-edit.component';

@Component( {
    selector: 'app-grupopermiso-edit',
    templateUrl: '../../../generated/grupopermiso/view/generated-grupopermiso-edit.component.html'
} )
export class GrupoPermisoEditComponent extends GeneratedGrupoPermisoEditComponent implements OnInit{
    ngOnInit() {   
    	super.ngOnInit();       
    } 
}
