import { Component, OnInit } from '@angular/core';
import { GeneratedRolGrupoPermisoSelectComponent } from '@generated/rol/view/generated-rol-grupopermiso-select.component';

@Component( {
    selector: 'app-rol-grupopermiso-select',
    templateUrl: '../../../generated/rol/view/generated-rol-grupopermiso-select.component.html'
} )
export class RolGrupoPermisoSelectComponent extends GeneratedRolGrupoPermisoSelectComponent implements OnInit{
   
    ngOnInit() {        
    	super.ngOnInit();   
    }     
}
