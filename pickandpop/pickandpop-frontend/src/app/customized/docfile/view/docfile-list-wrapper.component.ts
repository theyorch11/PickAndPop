import { Component, OnInit } from '@angular/core';
import { GeneratedDocfileListWrapperComponent } from "@generated/docfile/view/generated-docfile-list-wrapper.component";

@Component( {
    selector: 'app-docfile-list-wrapper',
    templateUrl: '../../../generated/docfile/view/generated-docfile-list-wrapper.component.html'
} )
export class DocfileListWrapperComponent extends GeneratedDocfileListWrapperComponent implements OnInit {

    ngOnInit() {
    	super.ngOnInit();
    }

}
