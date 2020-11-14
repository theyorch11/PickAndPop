import { Injectable,OnInit } from '@angular/core';
import { GeneratedPermisoService } from '../../../generated/permiso/service/generated-permiso.service';

@Injectable({
	providedIn: 'root',
})
export class PermisoService extends GeneratedPermisoService implements OnInit{
    ngOnInit() {          
    } 
}
