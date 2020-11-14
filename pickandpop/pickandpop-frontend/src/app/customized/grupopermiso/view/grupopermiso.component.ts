import { Component, OnInit } from '@angular/core';
import { GeneratedGrupoPermisoComponent } from '@generated/grupopermiso/view/generated-grupopermiso.component';

@Component({
  selector: 'app-grupopermiso',
  templateUrl: '../../../generated/grupopermiso/view/generated-grupopermiso.component.html'
})
export class GrupoPermisoComponent extends GeneratedGrupoPermisoComponent implements OnInit{
    ngOnInit() { 
    	super.ngOnInit();         
    } 
}
