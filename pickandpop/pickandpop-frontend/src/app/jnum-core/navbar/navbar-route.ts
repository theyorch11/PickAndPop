import { Route } from '@angular/router';
import { NavbarComponent } from './navbar.component';
export interface NavbarRoute extends Route {
    name: string;
    icon: string;
    mainNav?: boolean;
    children?: NavbarRoute[];
}

