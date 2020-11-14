import { Component, OnInit } from '@angular/core';
import { GeneratedPermisoSearchComponent } from '@generated/permiso/view/generated-permiso-search.component';

@Component({
  selector: 'app-permiso-search',
  templateUrl: '../../../generated/permiso/view/generated-permiso-search.component.html'
})
export class PermisoSearchComponent extends GeneratedPermisoSearchComponent implements OnInit{
    ngOnInit() {    
    	super.ngOnInit();       
    } 
}
