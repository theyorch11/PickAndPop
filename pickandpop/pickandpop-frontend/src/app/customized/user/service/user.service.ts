import { Injectable,OnInit } from '@angular/core';
import { GeneratedUserService } from '../../../generated/user/service/generated-user.service';

@Injectable({
	providedIn: 'root',
})
export class UserService extends GeneratedUserService implements OnInit{
    ngOnInit() {          
    } 
}
