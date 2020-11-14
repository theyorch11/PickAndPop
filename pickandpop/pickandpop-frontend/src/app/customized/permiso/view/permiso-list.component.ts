import { Component, OnInit } from '@angular/core';
import { GeneratedPermisoListComponent } from '@generated/permiso/view/generated-permiso-list.component';

@Component({
  selector: 'app-permiso-list',
  styleUrls:['./permiso-list.component.css'],
  templateUrl: '../../../generated/permiso/view/generated-permiso-list.component.html'
})
export class PermisoListComponent extends GeneratedPermisoListComponent implements OnInit{
    ngOnInit() {   
    	super.ngOnInit();       
    }
}
