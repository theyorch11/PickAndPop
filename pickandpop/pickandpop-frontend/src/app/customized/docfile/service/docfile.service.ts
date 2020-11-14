import { Injectable,OnInit } from '@angular/core';
import { GeneratedDocfileService } from '../../../generated/docfile/service/generated-docfile.service';

@Injectable({
	providedIn: 'root',
})
export class DocfileService extends GeneratedDocfileService implements OnInit{
    ngOnInit() {          
    } 
}
