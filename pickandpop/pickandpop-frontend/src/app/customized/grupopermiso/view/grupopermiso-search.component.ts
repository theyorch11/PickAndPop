import { Component, OnInit } from '@angular/core';
import { GeneratedGrupoPermisoSearchComponent } from '@generated/grupopermiso/view/generated-grupopermiso-search.component';

@Component({
  selector: 'app-grupopermiso-search',
  templateUrl: '../../../generated/grupopermiso/view/generated-grupopermiso-search.component.html'
})
export class GrupoPermisoSearchComponent extends GeneratedGrupoPermisoSearchComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();       
    } 
}
