import { Component, OnInit } from '@angular/core';
import { GeneratedDocfilePropSelectComponent } from '@generated/docfile/view/generated-docfile-prop-select.component';


@Component( {
    selector: 'app-docfile-prop-select',
    templateUrl: '../../../generated/docfile/view/generated-docfile-prop-select.component.html'
} )
export class DocfilePropSelectComponent extends GeneratedDocfilePropSelectComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}