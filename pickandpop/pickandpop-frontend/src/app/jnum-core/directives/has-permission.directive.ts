import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Directive({
    selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit {

    @Input() permission: string;

    constructor(private element: ElementRef, private authorizationService: AuthorizationService) { }

    ngOnInit() {
        if (!this.authorizationService.hasPermission(this.permission)) {
            this.element.nativeElement.style = 'display:none';
        }
    }

}
