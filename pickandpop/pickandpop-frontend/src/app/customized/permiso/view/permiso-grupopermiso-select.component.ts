import { Component, OnInit } from '@angular/core';
import { GeneratedPermisoGrupoPermisoSelectComponent } from '@generated/permiso/view/generated-permiso-grupopermiso-select.component';

@Component( {
    selector: 'app-permiso-grupopermiso-select',
    templateUrl: '../../../generated/permiso/view/generated-permiso-grupopermiso-select.component.html'
} )
export class PermisoGrupoPermisoSelectComponent extends GeneratedPermisoGrupoPermisoSelectComponent implements OnInit{
   
    ngOnInit() {        
    	super.ngOnInit();   
    }     
}
