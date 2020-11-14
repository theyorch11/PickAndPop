import { Component,OnInit } from '@angular/core';
import { GeneratedGrupoPermisoPermisoSelectSearchComponent } from '@generated/grupopermiso/view/generated-grupopermiso-permiso-select-search.component';

@Component( {
    selector: 'app-grupopermiso-permiso-select-search',
    templateUrl: '../../../generated/grupopermiso/view/generated-grupopermiso-permiso-select-search.component.html'
} )
export class GrupoPermisoPermisoSelectSearchComponent extends GeneratedGrupoPermisoPermisoSelectSearchComponent implements OnInit{
    
    ngOnInit() {   
    	super.ngOnInit();        
    } 
}
