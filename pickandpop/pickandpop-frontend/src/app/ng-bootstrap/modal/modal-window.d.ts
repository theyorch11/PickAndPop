import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NgbModalWindow implements OnInit, AfterViewInit, OnDestroy {
    private _document;
    private _elRef;
    private _zone;
    private _closed$;
    private _elWithFocus;
    private _dialogEl;
    id: string;
    ariaLabelledBy: string;
    backdrop: boolean | string;
    centered: string;
    keyboard: boolean;
    scrollable: string;
    size: string;
    windowClass: string;
    dismissEvent: EventEmitter<any>;
    constructor(_document: any, _elRef: ElementRef<HTMLElement>, _zone: NgZone);
    dismiss(reason: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbModalWindow>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbModalWindow, "ngb-modal-window", never, {
    "backdrop": "backdrop";
    "keyboard": "keyboard";
    "id": "id";
    "ariaLabelledBy": "ariaLabelledBy";
    "centered": "centered";
    "scrollable": "scrollable";
    "size": "size";
    "windowClass": "windowClass";
}, {
    "dismissEvent": "dismiss";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtd2luZG93LmQudHMiLCJzb3VyY2VzIjpbIm1vZGFsLXdpbmRvdy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JNb2RhbFdpbmRvdyBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBwcml2YXRlIF9lbFJlZjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIHByaXZhdGUgX2Nsb3NlZCQ7XG4gICAgcHJpdmF0ZSBfZWxXaXRoRm9jdXM7XG4gICAgcHJpdmF0ZSBfZGlhbG9nRWw7XG4gICAgaWQ6IHN0cmluZztcbiAgICBhcmlhTGFiZWxsZWRCeTogc3RyaW5nO1xuICAgIGJhY2tkcm9wOiBib29sZWFuIHwgc3RyaW5nO1xuICAgIGNlbnRlcmVkOiBzdHJpbmc7XG4gICAga2V5Ym9hcmQ6IGJvb2xlYW47XG4gICAgc2Nyb2xsYWJsZTogc3RyaW5nO1xuICAgIHNpemU6IHN0cmluZztcbiAgICB3aW5kb3dDbGFzczogc3RyaW5nO1xuICAgIGRpc21pc3NFdmVudDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgY29uc3RydWN0b3IoX2RvY3VtZW50OiBhbnksIF9lbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF96b25lOiBOZ1pvbmUpO1xuICAgIGRpc21pc3MocmVhc29uOiBhbnkpOiB2b2lkO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==