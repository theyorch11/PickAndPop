import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ToasterService} from '../../services/toaster.service';
import {TypeMessage} from '../../enum/type-message.enum';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,public toasterService: ToasterService,) {}

  canActivate() {
    if (sessionStorage.getItem('currentUser')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
