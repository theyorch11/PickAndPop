import { Injectable,OnInit } from '@angular/core';
import { GeneratedGrupoPermisoService } from '../../../generated/grupopermiso/service/generated-grupopermiso.service';

@Injectable({
	providedIn: 'root',
})
export class GrupoPermisoService extends GeneratedGrupoPermisoService implements OnInit{
    ngOnInit() {          
    } 
}
