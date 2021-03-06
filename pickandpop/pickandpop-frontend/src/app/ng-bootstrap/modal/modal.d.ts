import { Injector, ComponentFactoryResolver } from '@angular/core';
import { NgbModalOptions, NgbModalConfig } from './modal-config';
import { NgbModalRef } from './modal-ref';
import { NgbModalStack } from './modal-stack';
/**
 * A service for opening modal windows.
 *
 * Creating a modal is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbModal {
    private _moduleCFR;
    private _injector;
    private _modalStack;
    private _config;
    constructor(_moduleCFR: ComponentFactoryResolver, _injector: Injector, _modalStack: NgbModalStack, _config: NgbModalConfig);
    /**
     * Opens a new modal window with the specified content and supplied options.
     *
     * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
     * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
     * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
     *
     * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
     */
    open(content: any, options?: NgbModalOptions): NgbModalRef;
    /**
     * Dismisses all currently displayed modal windows with the supplied reason.
     *
     * @since 3.1.0
     */
    dismissAll(reason?: any): void;
    /**
     * Indicates if there are currently any open modal windows in the application.
     *
     * @since 3.3.0
     */
    hasOpenModals(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbModal>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbModal>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuZC50cyIsInNvdXJjZXMiOlsibW9kYWwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWxPcHRpb25zLCBOZ2JNb2RhbENvbmZpZyB9IGZyb20gJy4vbW9kYWwtY29uZmlnJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgTmdiTW9kYWxTdGFjayB9IGZyb20gJy4vbW9kYWwtc3RhY2snO1xuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG9wZW5pbmcgbW9kYWwgd2luZG93cy5cbiAqXG4gKiBDcmVhdGluZyBhIG1vZGFsIGlzIHN0cmFpZ2h0Zm9yd2FyZDogY3JlYXRlIGEgY29tcG9uZW50IG9yIGEgdGVtcGxhdGUgYW5kIHBhc3MgaXQgYXMgYW4gYXJndW1lbnQgdG9cbiAqIHRoZSBgLm9wZW4oKWAgbWV0aG9kLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JNb2RhbCB7XG4gICAgcHJpdmF0ZSBfbW9kdWxlQ0ZSO1xuICAgIHByaXZhdGUgX2luamVjdG9yO1xuICAgIHByaXZhdGUgX21vZGFsU3RhY2s7XG4gICAgcHJpdmF0ZSBfY29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKF9tb2R1bGVDRlI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgX2luamVjdG9yOiBJbmplY3RvciwgX21vZGFsU3RhY2s6IE5nYk1vZGFsU3RhY2ssIF9jb25maWc6IE5nYk1vZGFsQ29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBPcGVucyBhIG5ldyBtb2RhbCB3aW5kb3cgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbnRlbnQgYW5kIHN1cHBsaWVkIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBDb250ZW50IGNhbiBiZSBwcm92aWRlZCBhcyBhIGBUZW1wbGF0ZVJlZmAgb3IgYSBjb21wb25lbnQgdHlwZS4gSWYgeW91IHBhc3MgYSBjb21wb25lbnQgdHlwZSBhcyBjb250ZW50LFxuICAgICAqIHRoZW4gaW5zdGFuY2VzIG9mIHRob3NlIGNvbXBvbmVudHMgY2FuIGJlIGluamVjdGVkIHdpdGggYW4gaW5zdGFuY2Ugb2YgdGhlIGBOZ2JBY3RpdmVNb2RhbGAgY2xhc3MuIFlvdSBjYW4gdGhlblxuICAgICAqIHVzZSBgTmdiQWN0aXZlTW9kYWxgIG1ldGhvZHMgdG8gY2xvc2UgLyBkaXNtaXNzIG1vZGFscyBmcm9tIFwiaW5zaWRlXCIgb2YgeW91ciBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBBbHNvIHNlZSB0aGUgW2BOZ2JNb2RhbE9wdGlvbnNgXSgjL2NvbXBvbmVudHMvbW9kYWwvYXBpI05nYk1vZGFsT3B0aW9ucykgZm9yIHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBvcHRpb25zLlxuICAgICAqL1xuICAgIG9wZW4oY29udGVudDogYW55LCBvcHRpb25zPzogTmdiTW9kYWxPcHRpb25zKTogTmdiTW9kYWxSZWY7XG4gICAgLyoqXG4gICAgICogRGlzbWlzc2VzIGFsbCBjdXJyZW50bHkgZGlzcGxheWVkIG1vZGFsIHdpbmRvd3Mgd2l0aCB0aGUgc3VwcGxpZWQgcmVhc29uLlxuICAgICAqXG4gICAgICogQHNpbmNlIDMuMS4wXG4gICAgICovXG4gICAgZGlzbWlzc0FsbChyZWFzb24/OiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiB0aGVyZSBhcmUgY3VycmVudGx5IGFueSBvcGVuIG1vZGFsIHdpbmRvd3MgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHNpbmNlIDMuMy4wXG4gICAgICovXG4gICAgaGFzT3Blbk1vZGFscygpOiBib29sZWFuO1xufVxuIl19