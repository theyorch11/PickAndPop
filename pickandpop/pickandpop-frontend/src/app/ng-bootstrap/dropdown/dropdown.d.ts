import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, AfterContentInit, OnDestroy, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { Placement, PlacementArray } from '../util/positioning';
import { NgbDropdownConfig } from './dropdown-config';
import * as ɵngcc0 from '@angular/core';
export declare class NgbNavbar {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbNavbar>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbNavbar, ".navbar", never, {}, {}, never>;
}
/**
 * A directive you should put on a dropdown item to enable keyboard navigation.
 * Arrow keys will move focus between items marked with this directive.
 *
 * @since 4.1.0
 */
export declare class NgbDropdownItem {
    elementRef: ElementRef<HTMLElement>;
    private _disabled;
    disabled: boolean;
    constructor(elementRef: ElementRef<HTMLElement>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDropdownItem>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDropdownItem, "[ngbDropdownItem]", never, {
    "disabled": "disabled";
}, {}, never>;
}
/**
 * A directive that wraps dropdown menu content and dropdown items.
 */
export declare class NgbDropdownMenu {
    dropdown: any;
    placement: Placement;
    isOpen: boolean;
    menuItems: QueryList<NgbDropdownItem>;
    constructor(dropdown: any);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDropdownMenu>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDropdownMenu, "[ngbDropdownMenu]", never, {}, {}, ["menuItems"]>;
}
/**
 * A directive to mark an element to which dropdown menu will be anchored.
 *
 * This is a simple version of the `NgbDropdownToggle` directive.
 * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
 * for events other than click.
 *
 * @since 1.1.0
 */
export declare class NgbDropdownAnchor {
    dropdown: any;
    private _elementRef;
    anchorEl: any;
    constructor(dropdown: any, _elementRef: ElementRef<HTMLElement>);
    getNativeElement(): HTMLElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDropdownAnchor>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDropdownAnchor, "[ngbDropdownAnchor]", never, {}, {}, never>;
}
/**
 * A directive to mark an element that will toggle dropdown via the `click` event.
 *
 * You can also use `NgbDropdownAnchor` as an alternative.
 */
export declare class NgbDropdownToggle extends NgbDropdownAnchor {
    constructor(dropdown: any, elementRef: ElementRef<HTMLElement>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDropdownToggle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDropdownToggle, "[ngbDropdownToggle]", never, {}, {}, never>;
}
/**
 * A directive that provides contextual overlays for displaying lists of links and more.
 */
export declare class NgbDropdown implements AfterContentInit, OnDestroy {
    private _changeDetector;
    private _document;
    private _ngZone;
    private _elementRef;
    private _renderer;
    private _closed$;
    private _zoneSubscription;
    private _bodyContainer;
    private _menu;
    private _menuElement;
    private _anchor;
    /**
     * Indicates whether the dropdown should be closed when clicking one of dropdown items or pressing ESC.
     *
     * * `true` - the dropdown will close on both outside and inside (menu) clicks.
     * * `false` - the dropdown can only be closed manually via `close()` or `toggle()` methods.
     * * `"inside"` - the dropdown will close on inside menu clicks, but not outside clicks.
     * * `"outside"` - the dropdown will close only on the outside clicks and not on menu clicks.
     */
    autoClose: boolean | 'outside' | 'inside';
    /**
     * Defines whether or not the dropdown menu is opened initially.
     */
    _open: boolean;
    /**
     * The preferred placement of the dropdown.
     *
     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
     * `"right-bottom"`
     *
     * Accepts an array of strings or a string with space separated possible values.
     *
     * The default order of preference is `"bottom-left bottom-right top-left top-right"`
     *
     * Please see the [positioning overview](#/positioning) for more details.
     */
    placement: PlacementArray;
    /**
    * A selector specifying the element the dropdown should be appended to.
    * Currently only supports "body".
    *
    * @since 4.1.0
    */
    container: null | 'body';
    /**
     * Enable or disable the dynamic positioning. The default value is dynamic unless the dropdown is used
     * inside a Bootstrap navbar. If you need custom placement for a dropdown in a navbar, set it to
     * dynamic explicitly. See the [positioning of dropdown](#/positioning#dropdown)
     * and the [navbar demo](/#/components/dropdown/examples#navbar) for more details.
     *
     * @since 4.2.0
     */
    display: 'dynamic' | 'static';
    /**
     * An event fired when the dropdown is opened or closed.
     *
     * The event payload is a `boolean`:
     * * `true` - the dropdown was opened
     * * `false` - the dropdown was closed
     */
    openChange: EventEmitter<boolean>;
    constructor(_changeDetector: ChangeDetectorRef, config: NgbDropdownConfig, _document: any, _ngZone: NgZone, _elementRef: ElementRef<HTMLElement>, _renderer: Renderer2, ngbNavbar: NgbNavbar);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Checks if the dropdown menu is open.
     */
    isOpen(): boolean;
    /**
     * Opens the dropdown menu.
     */
    open(): void;
    private _setCloseHandlers;
    /**
     * Closes the dropdown menu.
     */
    close(): void;
    /**
     * Toggles the dropdown menu.
     */
    toggle(): void;
    ngOnDestroy(): void;
    onKeyDown(event: KeyboardEvent): void;
    private _isDropup;
    private _isEventFromToggle;
    private _getMenuElements;
    private _positionMenu;
    private _getFirstPlacement;
    private _resetContainer;
    private _applyContainer;
    private _applyPlacementClasses;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDropdown>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDropdown, "[ngbDropdown]", ["ngbDropdown"], {
    "_open": "open";
    "placement": "placement";
    "container": "container";
    "autoClose": "autoClose";
    "display": "display";
}, {
    "openChange": "openChange";
}, ["_menu", "_menuElement", "_anchor"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZC50cyIsInNvdXJjZXMiOlsiZHJvcGRvd24uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnQsIFBsYWNlbWVudEFycmF5IH0gZnJvbSAnLi4vdXRpbC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBOZ2JEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vZHJvcGRvd24tY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYk5hdmJhciB7XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHlvdSBzaG91bGQgcHV0IG9uIGEgZHJvcGRvd24gaXRlbSB0byBlbmFibGUga2V5Ym9hcmQgbmF2aWdhdGlvbi5cbiAqIEFycm93IGtleXMgd2lsbCBtb3ZlIGZvY3VzIGJldHdlZW4gaXRlbXMgbWFya2VkIHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRyb3Bkb3duSXRlbSB7XG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ7XG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdyYXBzIGRyb3Bkb3duIG1lbnUgY29udGVudCBhbmQgZHJvcGRvd24gaXRlbXMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRyb3Bkb3duTWVudSB7XG4gICAgZHJvcGRvd246IGFueTtcbiAgICBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbiAgICBpc09wZW46IGJvb2xlYW47XG4gICAgbWVudUl0ZW1zOiBRdWVyeUxpc3Q8TmdiRHJvcGRvd25JdGVtPjtcbiAgICBjb25zdHJ1Y3Rvcihkcm9wZG93bjogYW55KTtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gbWFyayBhbiBlbGVtZW50IHRvIHdoaWNoIGRyb3Bkb3duIG1lbnUgd2lsbCBiZSBhbmNob3JlZC5cbiAqXG4gKiBUaGlzIGlzIGEgc2ltcGxlIHZlcnNpb24gb2YgdGhlIGBOZ2JEcm9wZG93blRvZ2dsZWAgZGlyZWN0aXZlLlxuICogSXQgcGxheXMgdGhlIHNhbWUgcm9sZSwgYnV0IGRvZXNuJ3QgbGlzdGVuIHRvIGNsaWNrIGV2ZW50cyB0byB0b2dnbGUgZHJvcGRvd24gbWVudSB0aHVzIGVuYWJsaW5nIHN1cHBvcnRcbiAqIGZvciBldmVudHMgb3RoZXIgdGhhbiBjbGljay5cbiAqXG4gKiBAc2luY2UgMS4xLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiRHJvcGRvd25BbmNob3Ige1xuICAgIGRyb3Bkb3duOiBhbnk7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBhbmNob3JFbDogYW55O1xuICAgIGNvbnN0cnVjdG9yKGRyb3Bkb3duOiBhbnksIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik7XG4gICAgZ2V0TmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudDtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gbWFyayBhbiBlbGVtZW50IHRoYXQgd2lsbCB0b2dnbGUgZHJvcGRvd24gdmlhIHRoZSBgY2xpY2tgIGV2ZW50LlxuICpcbiAqIFlvdSBjYW4gYWxzbyB1c2UgYE5nYkRyb3Bkb3duQW5jaG9yYCBhcyBhbiBhbHRlcm5hdGl2ZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiRHJvcGRvd25Ub2dnbGUgZXh0ZW5kcyBOZ2JEcm9wZG93bkFuY2hvciB7XG4gICAgY29uc3RydWN0b3IoZHJvcGRvd246IGFueSwgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHByb3ZpZGVzIGNvbnRleHR1YWwgb3ZlcmxheXMgZm9yIGRpc3BsYXlpbmcgbGlzdHMgb2YgbGlua3MgYW5kIG1vcmUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRyb3Bkb3duIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9yZW5kZXJlcjtcbiAgICBwcml2YXRlIF9jbG9zZWQkO1xuICAgIHByaXZhdGUgX3pvbmVTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfYm9keUNvbnRhaW5lcjtcbiAgICBwcml2YXRlIF9tZW51O1xuICAgIHByaXZhdGUgX21lbnVFbGVtZW50O1xuICAgIHByaXZhdGUgX2FuY2hvcjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZHJvcGRvd24gc2hvdWxkIGJlIGNsb3NlZCB3aGVuIGNsaWNraW5nIG9uZSBvZiBkcm9wZG93biBpdGVtcyBvciBwcmVzc2luZyBFU0MuXG4gICAgICpcbiAgICAgKiAqIGB0cnVlYCAtIHRoZSBkcm9wZG93biB3aWxsIGNsb3NlIG9uIGJvdGggb3V0c2lkZSBhbmQgaW5zaWRlIChtZW51KSBjbGlja3MuXG4gICAgICogKiBgZmFsc2VgIC0gdGhlIGRyb3Bkb3duIGNhbiBvbmx5IGJlIGNsb3NlZCBtYW51YWxseSB2aWEgYGNsb3NlKClgIG9yIGB0b2dnbGUoKWAgbWV0aG9kcy5cbiAgICAgKiAqIGBcImluc2lkZVwiYCAtIHRoZSBkcm9wZG93biB3aWxsIGNsb3NlIG9uIGluc2lkZSBtZW51IGNsaWNrcywgYnV0IG5vdCBvdXRzaWRlIGNsaWNrcy5cbiAgICAgKiAqIGBcIm91dHNpZGVcImAgLSB0aGUgZHJvcGRvd24gd2lsbCBjbG9zZSBvbmx5IG9uIHRoZSBvdXRzaWRlIGNsaWNrcyBhbmQgbm90IG9uIG1lbnUgY2xpY2tzLlxuICAgICAqL1xuICAgIGF1dG9DbG9zZTogYm9vbGVhbiB8ICdvdXRzaWRlJyB8ICdpbnNpZGUnO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgd2hldGhlciBvciBub3QgdGhlIGRyb3Bkb3duIG1lbnUgaXMgb3BlbmVkIGluaXRpYWxseS5cbiAgICAgKi9cbiAgICBfb3BlbjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZmVycmVkIHBsYWNlbWVudCBvZiB0aGUgZHJvcGRvd24uXG4gICAgICpcbiAgICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBcInRvcFwiYCwgYFwidG9wLWxlZnRcImAsIGBcInRvcC1yaWdodFwiYCwgYFwiYm90dG9tXCJgLCBgXCJib3R0b20tbGVmdFwiYCxcbiAgICAgKiBgXCJib3R0b20tcmlnaHRcImAsIGBcImxlZnRcImAsIGBcImxlZnQtdG9wXCJgLCBgXCJsZWZ0LWJvdHRvbVwiYCwgYFwicmlnaHRcImAsIGBcInJpZ2h0LXRvcFwiYCxcbiAgICAgKiBgXCJyaWdodC1ib3R0b21cImBcbiAgICAgKlxuICAgICAqIEFjY2VwdHMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBhIHN0cmluZyB3aXRoIHNwYWNlIHNlcGFyYXRlZCBwb3NzaWJsZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBvcmRlciBvZiBwcmVmZXJlbmNlIGlzIGBcImJvdHRvbS1sZWZ0IGJvdHRvbS1yaWdodCB0b3AtbGVmdCB0b3AtcmlnaHRcImBcbiAgICAgKlxuICAgICAqIFBsZWFzZSBzZWUgdGhlIFtwb3NpdGlvbmluZyBvdmVydmlld10oIy9wb3NpdGlvbmluZykgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5O1xuICAgIC8qKlxuICAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBkcm9wZG93biBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICAqXG4gICAgKiBAc2luY2UgNC4xLjBcbiAgICAqL1xuICAgIGNvbnRhaW5lcjogbnVsbCB8ICdib2R5JztcbiAgICAvKipcbiAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgZHluYW1pYyBwb3NpdGlvbmluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZHluYW1pYyB1bmxlc3MgdGhlIGRyb3Bkb3duIGlzIHVzZWRcbiAgICAgKiBpbnNpZGUgYSBCb290c3RyYXAgbmF2YmFyLiBJZiB5b3UgbmVlZCBjdXN0b20gcGxhY2VtZW50IGZvciBhIGRyb3Bkb3duIGluIGEgbmF2YmFyLCBzZXQgaXQgdG9cbiAgICAgKiBkeW5hbWljIGV4cGxpY2l0bHkuIFNlZSB0aGUgW3Bvc2l0aW9uaW5nIG9mIGRyb3Bkb3duXSgjL3Bvc2l0aW9uaW5nI2Ryb3Bkb3duKVxuICAgICAqIGFuZCB0aGUgW25hdmJhciBkZW1vXSgvIy9jb21wb25lbnRzL2Ryb3Bkb3duL2V4YW1wbGVzI25hdmJhcikgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgKlxuICAgICAqIEBzaW5jZSA0LjIuMFxuICAgICAqL1xuICAgIGRpc3BsYXk6ICdkeW5hbWljJyB8ICdzdGF0aWMnO1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW5lZCBvciBjbG9zZWQuXG4gICAgICpcbiAgICAgKiBUaGUgZXZlbnQgcGF5bG9hZCBpcyBhIGBib29sZWFuYDpcbiAgICAgKiAqIGB0cnVlYCAtIHRoZSBkcm9wZG93biB3YXMgb3BlbmVkXG4gICAgICogKiBgZmFsc2VgIC0gdGhlIGRyb3Bkb3duIHdhcyBjbG9zZWRcbiAgICAgKi9cbiAgICBvcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgY29uc3RydWN0b3IoX2NoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiwgY29uZmlnOiBOZ2JEcm9wZG93bkNvbmZpZywgX2RvY3VtZW50OiBhbnksIF9uZ1pvbmU6IE5nWm9uZSwgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdiTmF2YmFyOiBOZ2JOYXZiYXIpO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgZHJvcGRvd24gbWVudSBpcyBvcGVuLlxuICAgICAqL1xuICAgIGlzT3BlbigpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSBkcm9wZG93biBtZW51LlxuICAgICAqL1xuICAgIG9wZW4oKTogdm9pZDtcbiAgICBwcml2YXRlIF9zZXRDbG9zZUhhbmRsZXJzO1xuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgZHJvcGRvd24gbWVudS5cbiAgICAgKi9cbiAgICBjbG9zZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGRyb3Bkb3duIG1lbnUuXG4gICAgICovXG4gICAgdG9nZ2xlKCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIHByaXZhdGUgX2lzRHJvcHVwO1xuICAgIHByaXZhdGUgX2lzRXZlbnRGcm9tVG9nZ2xlO1xuICAgIHByaXZhdGUgX2dldE1lbnVFbGVtZW50cztcbiAgICBwcml2YXRlIF9wb3NpdGlvbk1lbnU7XG4gICAgcHJpdmF0ZSBfZ2V0Rmlyc3RQbGFjZW1lbnQ7XG4gICAgcHJpdmF0ZSBfcmVzZXRDb250YWluZXI7XG4gICAgcHJpdmF0ZSBfYXBwbHlDb250YWluZXI7XG4gICAgcHJpdmF0ZSBfYXBwbHlQbGFjZW1lbnRDbGFzc2VzO1xufVxuIl19