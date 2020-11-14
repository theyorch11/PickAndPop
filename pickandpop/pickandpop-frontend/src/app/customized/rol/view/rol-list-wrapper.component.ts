import { Component, OnInit } from '@angular/core';
import { GeneratedRolListWrapperComponent } from "@generated/rol/view/generated-rol-list-wrapper.component";

@Component( {
    selector: 'app-rol-list-wrapper',
    templateUrl: '../../../generated/rol/view/generated-rol-list-wrapper.component.html'
} )
export class RolListWrapperComponent extends GeneratedRolListWrapperComponent implements OnInit {

    ngOnInit() {
    	super.ngOnInit();
    }

}
