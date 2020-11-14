import { Component, OnInit } from '@angular/core';
import { GeneratedGrupoPermisoListComponent } from '@generated/grupopermiso/view/generated-grupopermiso-list.component';

@Component({
  selector: 'app-grupopermiso-list',
  styleUrls:['./grupopermiso-list.component.css'],
  templateUrl: '../../../generated/grupopermiso/view/generated-grupopermiso-list.component.html'
})
export class GrupoPermisoListComponent extends GeneratedGrupoPermisoListComponent implements OnInit{
    ngOnInit() {   
    	super.ngOnInit();       
    }
}
