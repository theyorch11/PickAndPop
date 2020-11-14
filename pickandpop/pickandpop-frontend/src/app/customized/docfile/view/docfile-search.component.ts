import { Component, OnInit } from '@angular/core';
import { GeneratedDocfileSearchComponent } from '@generated/docfile/view/generated-docfile-search.component';

@Component({
  selector: 'app-docfile-search',
  templateUrl: '../../../generated/docfile/view/generated-docfile-search.component.html'
})
export class DocfileSearchComponent extends GeneratedDocfileSearchComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();       
    } 
}
