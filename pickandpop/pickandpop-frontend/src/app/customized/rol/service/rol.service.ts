import { Injectable,OnInit } from '@angular/core';
import { GeneratedRolService } from '../../../generated/rol/service/generated-rol.service';

@Injectable({
	providedIn: 'root',
})
export class RolService extends GeneratedRolService implements OnInit{
    ngOnInit() {          
    } 
}
