import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NavItem } from './nav-item';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'; 
import { TranslateService } from '@ngx-translate/core';
import { DialogPasswordComponent } from '../password/dialog-password.component';

@Component({
  selector: 'app-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls:['./navbar-vertical.component.css']
})
export class NavbarVerticalComponent implements OnInit {  
    @Output() sidenavToggleEmit: EventEmitter<any> = new EventEmitter<any>();
    navItems: NavItem[];
    password: string;
    newpassword: string;
    confirmpassword: string;
    expandHeight = '42px';
    collapseHeight = '42px';

    constructor( public translate: TranslateService, public modalService:NgbModal, ) {
        const language = sessionStorage.getItem( 'language' ) ? sessionStorage.getItem( 'language' ) : translate.getDefaultLang();
        translate.use( language ).subscribe( res => this.showItems() );
    }

    ngOnInit() {
    }

    sidenavToggle() {
        this.sidenavToggleEmit.emit();
    }

    showItems(): void {
        this.navItems = [
	    {
	      id: 'menu.seguridad',
	      displayName: this.translate.instant('menu.seguridad.title'),
	      iconName: 'fa fa-shield-alt',
	      module: 'seguridad',
	      children: [
        {
          id: 'menu.seguridad.user',
          displayName: this.translate.instant('menu.seguridad.user'),
          iconName: 'fas fa-user-alt',
          module: 'seguridad',
          route: '/user/userlist'
        },
        {
          id: 'menu.seguridad.rol',
          displayName: this.translate.instant('menu.seguridad.rol'),
          iconName: 'fas fa-users',
          module: 'seguridad',
          route: '/rol/rollist'
        },
        {
          id: 'menu.seguridad.grupopermiso',
          displayName: this.translate.instant('menu.seguridad.grupopermiso'),
          iconName: 'fas fa-layer-group',
          module: 'seguridad',
          route: '/grupopermiso/grupopermisolist'
        },
	      ]
	     },
        ];
    }

    public setLanguage(language: string) {
        this.translate.use(language).subscribe(
            res => {
                sessionStorage.setItem('language', language);
                this.showItems();
            }
        );
    }


    changePassword(): void {
        const dialogRef = this.modalService.open(DialogPasswordComponent);
        let data = { password: this.password, newpassword: this.newpassword, passwordconfirm: this.confirmpassword }
        dialogRef.componentInstance.data = data;
    }

}
