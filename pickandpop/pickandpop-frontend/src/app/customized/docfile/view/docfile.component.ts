import { Component, OnInit } from '@angular/core';
import { GeneratedDocfileComponent } from '@generated/docfile/view/generated-docfile.component';

@Component({
  selector: 'app-docfile',
  templateUrl: '../../../generated/docfile/view/generated-docfile.component.html'
})
export class DocfileComponent extends GeneratedDocfileComponent implements OnInit{
    ngOnInit() { 
    	super.ngOnInit();         
    } 
}
