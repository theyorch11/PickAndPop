import { Component, OnInit } from '@angular/core';
import { GeneratedDocfileBotoneraComponent } from '@generated/docfile/view/generated-docfile-botonera.component';

@Component({
  selector: 'app-docfile-botonera',
  templateUrl: '../../../generated/docfile/view/generated-docfile-botonera.component.html'
})
export class DocfileBotoneraComponent extends GeneratedDocfileBotoneraComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();      
    } 
}