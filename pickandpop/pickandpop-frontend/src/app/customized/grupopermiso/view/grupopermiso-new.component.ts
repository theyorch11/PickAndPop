import { Component, OnInit } from '@angular/core';
import { GeneratedGrupoPermisoNewComponent } from '@generated/grupopermiso/view/generated-grupopermiso-new.component';

@Component({
  selector: 'app-grupopermiso-new',
  templateUrl: '../../../generated/grupopermiso/view/generated-grupopermiso-new.component.html'
})
export class GrupoPermisoNewComponent extends GeneratedGrupoPermisoNewComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}
