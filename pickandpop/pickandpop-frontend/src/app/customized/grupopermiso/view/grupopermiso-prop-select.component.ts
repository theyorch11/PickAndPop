import { Component, OnInit } from '@angular/core';
import { GeneratedGrupoPermisoPropSelectComponent } from '@generated/grupopermiso/view/generated-grupopermiso-prop-select.component';


@Component( {
    selector: 'app-grupopermiso-prop-select',
    templateUrl: '../../../generated/grupopermiso/view/generated-grupopermiso-prop-select.component.html'
} )
export class GrupoPermisoPropSelectComponent extends GeneratedGrupoPermisoPropSelectComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}