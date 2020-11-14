import { Component, OnInit } from '@angular/core';
import { GeneratedDocfileNewComponent } from '@generated/docfile/view/generated-docfile-new.component';

@Component({
  selector: 'app-docfile-new',
  templateUrl: '../../../generated/docfile/view/generated-docfile-new.component.html'
})
export class DocfileNewComponent extends GeneratedDocfileNewComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}
