import { Component, OnInit } from '@angular/core';
import { GeneratedDocfileListComponent } from '@generated/docfile/view/generated-docfile-list.component';

@Component({
  selector: 'app-docfile-list',
  styleUrls:['./docfile-list.component.css'],
  templateUrl: '../../../generated/docfile/view/generated-docfile-list.component.html'
})
export class DocfileListComponent extends GeneratedDocfileListComponent implements OnInit{
    ngOnInit() {   
    	super.ngOnInit();       
    }
}
