import { Component, OnInit } from '@angular/core';
import { GeneratedDocfileEditComponent } from '@generated/docfile/view/generated-docfile-edit.component';

@Component( {
    selector: 'app-docfile-edit',
    templateUrl: '../../../generated/docfile/view/generated-docfile-edit.component.html'
} )
export class DocfileEditComponent extends GeneratedDocfileEditComponent implements OnInit{
    ngOnInit() {   
    	super.ngOnInit();       
    } 
}
