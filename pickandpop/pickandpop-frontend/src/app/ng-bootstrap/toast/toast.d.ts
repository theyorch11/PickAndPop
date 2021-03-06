import { AfterContentInit, EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NgbToastConfig } from './toast-config';
/**
 * This directive allows the usage of HTML markup or other directives
 * inside of the toast's header.
 *
 * @since 5.0.0
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbToastHeader {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbToastHeader>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbToastHeader, "[ngbToastHeader]", never, {}, {}, never>;
}
/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 *
 * @since 5.0.0
 */
export declare class NgbToast implements AfterContentInit, OnChanges {
    ariaLive: string;
    private _timeoutID;
    /**
     * Delay after which the toast will hide (ms).
     * default: `500` (ms) (inherited from NgbToastConfig)
     */
    delay: number;
    /**
     * Auto hide the toast after a delay in ms.
     * default: `true` (inherited from NgbToastConfig)
     */
    autohide: boolean;
    /**
     * Text to be used as toast's header.
     * Ignored if a ContentChild template is specified at the same time.
     */
    header: string;
    /**
     * A template like `<ng-template ngbToastHeader></ng-template>` can be
     * used in the projected content to allow markup usage.
     */
    contentHeaderTpl: TemplateRef<any> | null;
    /**
     * An event fired immediately when toast's `hide()` method has been called.
     * It can only occur in 2 different scenarios:
     * - `autohide` timeout fires
     * - user clicks on a closing cross (&times)
     *
     * Additionally this output is purely informative. The toast won't disappear. It's up to the user to take care of
     * that.
     */
    hideOutput: EventEmitter<void>;
    constructor(ariaLive: string, config: NgbToastConfig);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    hide(): void;
    private _init;
    private _clearTimeout;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbToast>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbToast, "ngb-toast", ["ngbToast"], {
    "delay": "delay";
    "autohide": "autohide";
    "header": "header";
}, {
    "hideOutput": "hide";
}, ["contentHeaderTpl"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZC50cyIsInNvdXJjZXMiOlsidG9hc3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYlRvYXN0Q29uZmlnIH0gZnJvbSAnLi90b2FzdC1jb25maWcnO1xuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBhbGxvd3MgdGhlIHVzYWdlIG9mIEhUTUwgbWFya3VwIG9yIG90aGVyIGRpcmVjdGl2ZXNcbiAqIGluc2lkZSBvZiB0aGUgdG9hc3QncyBoZWFkZXIuXG4gKlxuICogQHNpbmNlIDUuMC4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRvYXN0SGVhZGVyIHtcbn1cbi8qKlxuICogVG9hc3RzIHByb3ZpZGUgZmVlZGJhY2sgbWVzc2FnZXMgYXMgbm90aWZpY2F0aW9ucyB0byB0aGUgdXNlci5cbiAqIEdvYWwgaXMgdG8gbWltaWMgdGhlIHB1c2ggbm90aWZpY2F0aW9ucyBhdmFpbGFibGUgYm90aCBvbiBtb2JpbGUgYW5kIGRlc2t0b3Agb3BlcmF0aW5nIHN5c3RlbXMuXG4gKlxuICogQHNpbmNlIDUuMC4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRvYXN0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgICBhcmlhTGl2ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3RpbWVvdXRJRDtcbiAgICAvKipcbiAgICAgKiBEZWxheSBhZnRlciB3aGljaCB0aGUgdG9hc3Qgd2lsbCBoaWRlIChtcykuXG4gICAgICogZGVmYXVsdDogYDUwMGAgKG1zKSAoaW5oZXJpdGVkIGZyb20gTmdiVG9hc3RDb25maWcpXG4gICAgICovXG4gICAgZGVsYXk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBBdXRvIGhpZGUgdGhlIHRvYXN0IGFmdGVyIGEgZGVsYXkgaW4gbXMuXG4gICAgICogZGVmYXVsdDogYHRydWVgIChpbmhlcml0ZWQgZnJvbSBOZ2JUb2FzdENvbmZpZylcbiAgICAgKi9cbiAgICBhdXRvaGlkZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGJlIHVzZWQgYXMgdG9hc3QncyBoZWFkZXIuXG4gICAgICogSWdub3JlZCBpZiBhIENvbnRlbnRDaGlsZCB0ZW1wbGF0ZSBpcyBzcGVjaWZpZWQgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgKi9cbiAgICBoZWFkZXI6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBIHRlbXBsYXRlIGxpa2UgYDxuZy10ZW1wbGF0ZSBuZ2JUb2FzdEhlYWRlcj48L25nLXRlbXBsYXRlPmAgY2FuIGJlXG4gICAgICogdXNlZCBpbiB0aGUgcHJvamVjdGVkIGNvbnRlbnQgdG8gYWxsb3cgbWFya3VwIHVzYWdlLlxuICAgICAqL1xuICAgIGNvbnRlbnRIZWFkZXJUcGw6IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGZpcmVkIGltbWVkaWF0ZWx5IHdoZW4gdG9hc3QncyBgaGlkZSgpYCBtZXRob2QgaGFzIGJlZW4gY2FsbGVkLlxuICAgICAqIEl0IGNhbiBvbmx5IG9jY3VyIGluIDIgZGlmZmVyZW50IHNjZW5hcmlvczpcbiAgICAgKiAtIGBhdXRvaGlkZWAgdGltZW91dCBmaXJlc1xuICAgICAqIC0gdXNlciBjbGlja3Mgb24gYSBjbG9zaW5nIGNyb3NzICgmdGltZXMpXG4gICAgICpcbiAgICAgKiBBZGRpdGlvbmFsbHkgdGhpcyBvdXRwdXQgaXMgcHVyZWx5IGluZm9ybWF0aXZlLiBUaGUgdG9hc3Qgd29uJ3QgZGlzYXBwZWFyLiBJdCdzIHVwIHRvIHRoZSB1c2VyIHRvIHRha2UgY2FyZSBvZlxuICAgICAqIHRoYXQuXG4gICAgICovXG4gICAgaGlkZU91dHB1dDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIGNvbnN0cnVjdG9yKGFyaWFMaXZlOiBzdHJpbmcsIGNvbmZpZzogTmdiVG9hc3RDb25maWcpO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIGhpZGUoKTogdm9pZDtcbiAgICBwcml2YXRlIF9pbml0O1xuICAgIHByaXZhdGUgX2NsZWFyVGltZW91dDtcbn1cbiJdfQ==