import { Component, OnInit } from '@angular/core';
import { GeneratedGrupoPermisoListWrapperComponent } from "@generated/grupopermiso/view/generated-grupopermiso-list-wrapper.component";

@Component( {
    selector: 'app-grupopermiso-list-wrapper',
    templateUrl: '../../../generated/grupopermiso/view/generated-grupopermiso-list-wrapper.component.html'
} )
export class GrupoPermisoListWrapperComponent extends GeneratedGrupoPermisoListWrapperComponent implements OnInit {

    ngOnInit() {
    	super.ngOnInit();
    }

}
