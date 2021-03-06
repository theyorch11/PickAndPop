import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { toString } from '../util/util';
/**
 * The context for the typeahead result template in case you want to override the default one.
 */
import * as ɵngcc0 from '@angular/core';
export interface ResultTemplateContext {
    /**
     * Your typeahead result item.
     */
    result: any;
    /**
     * Search term from the `<input>` used to get current result.
     */
    term: string;
}
export declare class NgbTypeaheadWindow implements OnInit {
    activeIdx: number;
    /**
     *  The id for the typeahead window. The id should be unique and the same
     *  as the associated typeahead's id.
     */
    id: string;
    /**
     * Flag indicating if the first row should be active initially
     */
    focusFirst: boolean;
    /**
     * Typeahead match results to be displayed
     */
    results: any;
    /**
     * Search term used to get current results
     */
    term: string;
    /**
     * A function used to format a given result before display. This function should return a formatted string without any
     * HTML markup
     */
    formatter: typeof toString;
    /**
     * A template to override a matching result default display
     */
    resultTemplate: TemplateRef<ResultTemplateContext>;
    /**
     * Event raised when user selects a particular result row
     */
    selectEvent: EventEmitter<any>;
    activeChangeEvent: EventEmitter<any>;
    hasActive(): boolean;
    getActive(): any;
    markActive(activeIdx: number): void;
    next(): void;
    prev(): void;
    resetActive(): void;
    select(item: any): void;
    ngOnInit(): void;
    private _activeChanged;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTypeaheadWindow>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbTypeaheadWindow, "ngb-typeahead-window", ["ngbTypeaheadWindow"], {
    "focusFirst": "focusFirst";
    "formatter": "formatter";
    "id": "id";
    "results": "results";
    "term": "term";
    "resultTemplate": "resultTemplate";
}, {
    "selectEvent": "select";
    "activeChangeEvent": "activeChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLXdpbmRvdy5kLnRzIiwic291cmNlcyI6WyJ0eXBlYWhlYWQtd2luZG93LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b1N0cmluZyB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG4vKipcbiAqIFRoZSBjb250ZXh0IGZvciB0aGUgdHlwZWFoZWFkIHJlc3VsdCB0ZW1wbGF0ZSBpbiBjYXNlIHlvdSB3YW50IHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9uZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXN1bHRUZW1wbGF0ZUNvbnRleHQge1xuICAgIC8qKlxuICAgICAqIFlvdXIgdHlwZWFoZWFkIHJlc3VsdCBpdGVtLlxuICAgICAqL1xuICAgIHJlc3VsdDogYW55O1xuICAgIC8qKlxuICAgICAqIFNlYXJjaCB0ZXJtIGZyb20gdGhlIGA8aW5wdXQ+YCB1c2VkIHRvIGdldCBjdXJyZW50IHJlc3VsdC5cbiAgICAgKi9cbiAgICB0ZXJtOiBzdHJpbmc7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JUeXBlYWhlYWRXaW5kb3cgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFjdGl2ZUlkeDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqICBUaGUgaWQgZm9yIHRoZSB0eXBlYWhlYWQgd2luZG93LiBUaGUgaWQgc2hvdWxkIGJlIHVuaXF1ZSBhbmQgdGhlIHNhbWVcbiAgICAgKiAgYXMgdGhlIGFzc29jaWF0ZWQgdHlwZWFoZWFkJ3MgaWQuXG4gICAgICovXG4gICAgaWQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgaWYgdGhlIGZpcnN0IHJvdyBzaG91bGQgYmUgYWN0aXZlIGluaXRpYWxseVxuICAgICAqL1xuICAgIGZvY3VzRmlyc3Q6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVHlwZWFoZWFkIG1hdGNoIHJlc3VsdHMgdG8gYmUgZGlzcGxheWVkXG4gICAgICovXG4gICAgcmVzdWx0czogYW55O1xuICAgIC8qKlxuICAgICAqIFNlYXJjaCB0ZXJtIHVzZWQgdG8gZ2V0IGN1cnJlbnQgcmVzdWx0c1xuICAgICAqL1xuICAgIHRlcm06IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHVzZWQgdG8gZm9ybWF0IGEgZ2l2ZW4gcmVzdWx0IGJlZm9yZSBkaXNwbGF5LiBUaGlzIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBmb3JtYXR0ZWQgc3RyaW5nIHdpdGhvdXQgYW55XG4gICAgICogSFRNTCBtYXJrdXBcbiAgICAgKi9cbiAgICBmb3JtYXR0ZXI6IHR5cGVvZiB0b1N0cmluZztcbiAgICAvKipcbiAgICAgKiBBIHRlbXBsYXRlIHRvIG92ZXJyaWRlIGEgbWF0Y2hpbmcgcmVzdWx0IGRlZmF1bHQgZGlzcGxheVxuICAgICAqL1xuICAgIHJlc3VsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxSZXN1bHRUZW1wbGF0ZUNvbnRleHQ+O1xuICAgIC8qKlxuICAgICAqIEV2ZW50IHJhaXNlZCB3aGVuIHVzZXIgc2VsZWN0cyBhIHBhcnRpY3VsYXIgcmVzdWx0IHJvd1xuICAgICAqL1xuICAgIHNlbGVjdEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBhY3RpdmVDaGFuZ2VFdmVudDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgaGFzQWN0aXZlKCk6IGJvb2xlYW47XG4gICAgZ2V0QWN0aXZlKCk6IGFueTtcbiAgICBtYXJrQWN0aXZlKGFjdGl2ZUlkeDogbnVtYmVyKTogdm9pZDtcbiAgICBuZXh0KCk6IHZvaWQ7XG4gICAgcHJldigpOiB2b2lkO1xuICAgIHJlc2V0QWN0aXZlKCk6IHZvaWQ7XG4gICAgc2VsZWN0KGl0ZW06IGFueSk6IHZvaWQ7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIF9hY3RpdmVDaGFuZ2VkO1xufVxuIl19