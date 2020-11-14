import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, QueryList, TemplateRef } from '@angular/core';
import { NgbNavConfig } from './nav-config';
/**
 * Context passed to the nav content template.
 *
 * See [this demo](#/components/nav/examples#keep-content) as the example.
 *
 * @since 5.2.0
 */
import * as ɵngcc0 from '@angular/core';
export interface NgbNavContentContext {
    /**
     * If `true`, current nav content is visible and active
     */
    $implicit: boolean;
}
/**
 * This directive must be used to wrap content to be displayed in the nav.
 *
 * @since 5.2.0
 */
export declare class NgbNavContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbNavContent>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbNavContent, "ng-template[ngbNavContent]", never, {}, {}, never>;
}
/**
 * The directive used to group nav link and related nav content. As well as set nav identifier and some options.
 *
 * @since 5.2.0
 */
export declare class NgbNavItem implements AfterContentChecked, OnInit {
    elementRef: ElementRef<any>;
    private _nav;
    /**
     * If `true`, non-active current nav item content will be removed from DOM
     * Otherwise it will just be hidden
     */
    destroyOnHide: any;
    /**
     * If `true`, the current nav item is disabled and can't be toggled by user.
     *
     * Nevertheless disabled nav can be selected programmatically via the `.select()` method and the `[activeId]` binding.
     */
    disabled: boolean;
    /**
     * The id used for the DOM elements.
     * Must be unique inside the document in case you have multiple `ngbNav`s on the page.
     *
     * Autogenerated as `ngb-nav-XXX` if not provided.
     */
    domId: string;
    /**
     * The id used as a model for active nav.
     * It can be anything, but must be unique inside one `ngbNav`.
     *
     * The only limitation is that it is not possible to have the `''` (empty string) as id,
     * because ` ngbNavItem `, `ngbNavItem=''` and `[ngbNavItem]="''"` are indistinguishable
     */
    _id: any;
    contentTpl: NgbNavContent | null;
    contentTpls: QueryList<NgbNavContent>;
    constructor(nav: any, elementRef: ElementRef<any>);
    ngAfterContentChecked(): void;
    ngOnInit(): void;
    readonly active: boolean;
    readonly id: any;
    readonly panelDomId: string;
    isPanelInDom(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbNavItem>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbNavItem, "[ngbNavItem]", ["ngbNavItem"], {
    "disabled": "disabled";
    "domId": "domId";
    "destroyOnHide": "destroyOnHide";
    "_id": "ngbNavItem";
}, {}, ["contentTpls"]>;
}
/**
 * A nav directive that helps with implementing tabbed navigation components.
 *
 * @since 5.2.0
 */
export declare class NgbNav implements AfterContentInit {
    role: string;
    private _cd;
    /**
     * The id of the nav that should be active
     *
     * You could also use the `.select()` method and the `(navChange)` event
     */
    activeId: any;
    /**
     * The event emitted after the active nav changes
     * The payload of the event is the newly active nav id
     *
     * If you want to prevent nav change, you should use `(navChange)` event
     */
    activeIdChange: EventEmitter<any>;
    /**
     * If `true`, non-active nav content will be removed from DOM
     * Otherwise it will just be hidden
     */
    destroyOnHide: any;
    /**
     * The orientation of navs.
     *
     * Using `vertical` will also add the `aria-orientation` attribute
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Role attribute generating strategy:
     * - `false` - no role attributes will be generated
     * - `'tablist'` - 'tablist', 'tab' and 'tabpanel' will be generated (default)
     */
    roles: 'tablist' | false;
    items: QueryList<NgbNavItem>;
    constructor(role: string, config: NgbNavConfig, _cd: ChangeDetectorRef);
    /**
     * The nav change event emitted right before the nav change happens on user click.
     *
     * This event won't be emitted if nav is changed programmatically via `[activeId]` or `.select()`.
     *
     * See [`NgbNavChangeEvent`](#/components/nav/api#NgbNavChangeEvent) for payload details.
     */
    navChange: EventEmitter<NgbNavChangeEvent>;
    click(item: NgbNavItem): void;
    /**
     * Selects the nav with the given id and shows its associated pane.
     * Any other nav that was previously selected becomes unselected and its associated pane is hidden.
     */
    select(id: any): void;
    ngAfterContentInit(): void;
    private _updateActiveId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbNav>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbNav, "[ngbNav]", ["ngbNav"], {
    "destroyOnHide": "destroyOnHide";
    "orientation": "orientation";
    "roles": "roles";
    "activeId": "activeId";
}, {
    "activeIdChange": "activeIdChange";
    "navChange": "navChange";
}, ["items"]>;
}
/**
 * A directive to put on the nav link.
 *
 * @since 5.2.0
 */
export declare class NgbNavLink {
    role: string;
    navItem: NgbNavItem;
    nav: NgbNav;
    constructor(role: string, navItem: NgbNavItem, nav: NgbNav);
    hasNavItemClass(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbNavLink>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbNavLink, "a[ngbNavLink]", never, {}, {}, never>;
}
/**
 * The payload of the change event emitted right before the nav change happens on user click.
 *
 * This event won't be emitted if nav is changed programmatically via `[activeId]` or `.select()`.
 *
 * @since 5.2.0
 */
export interface NgbNavChangeEvent {
    /**
     * Id of the currently active nav.
     */
    activeId: any;
    /**
     * Id of the newly selected nav.
     */
    nextId: any;
    /**
     * Function that will prevent nav change if called.
     */
    preventDefault: () => void;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmQudHMiLCJzb3VyY2VzIjpbIm5hdi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBOzs7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JOYXZDb25maWcgfSBmcm9tICcuL25hdi1jb25maWcnO1xuLyoqXG4gKiBDb250ZXh0IHBhc3NlZCB0byB0aGUgbmF2IGNvbnRlbnQgdGVtcGxhdGUuXG4gKlxuICogU2VlIFt0aGlzIGRlbW9dKCMvY29tcG9uZW50cy9uYXYvZXhhbXBsZXMja2VlcC1jb250ZW50KSBhcyB0aGUgZXhhbXBsZS5cbiAqXG4gKiBAc2luY2UgNS4yLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JOYXZDb250ZW50Q29udGV4dCB7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBjdXJyZW50IG5hdiBjb250ZW50IGlzIHZpc2libGUgYW5kIGFjdGl2ZVxuICAgICAqL1xuICAgICRpbXBsaWNpdDogYm9vbGVhbjtcbn1cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgbXVzdCBiZSB1c2VkIHRvIHdyYXAgY29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIG5hdi5cbiAqXG4gKiBAc2luY2UgNS4yLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiTmF2Q29udGVudCB7XG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pO1xufVxuLyoqXG4gKiBUaGUgZGlyZWN0aXZlIHVzZWQgdG8gZ3JvdXAgbmF2IGxpbmsgYW5kIHJlbGF0ZWQgbmF2IGNvbnRlbnQuIEFzIHdlbGwgYXMgc2V0IG5hdiBpZGVudGlmaWVyIGFuZCBzb21lIG9wdGlvbnMuXG4gKlxuICogQHNpbmNlIDUuMi4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYk5hdkl0ZW0gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkluaXQge1xuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8YW55PjtcbiAgICBwcml2YXRlIF9uYXY7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBub24tYWN0aXZlIGN1cnJlbnQgbmF2IGl0ZW0gY29udGVudCB3aWxsIGJlIHJlbW92ZWQgZnJvbSBET01cbiAgICAgKiBPdGhlcndpc2UgaXQgd2lsbCBqdXN0IGJlIGhpZGRlblxuICAgICAqL1xuICAgIGRlc3Ryb3lPbkhpZGU6IGFueTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBjdXJyZW50IG5hdiBpdGVtIGlzIGRpc2FibGVkIGFuZCBjYW4ndCBiZSB0b2dnbGVkIGJ5IHVzZXIuXG4gICAgICpcbiAgICAgKiBOZXZlcnRoZWxlc3MgZGlzYWJsZWQgbmF2IGNhbiBiZSBzZWxlY3RlZCBwcm9ncmFtbWF0aWNhbGx5IHZpYSB0aGUgYC5zZWxlY3QoKWAgbWV0aG9kIGFuZCB0aGUgYFthY3RpdmVJZF1gIGJpbmRpbmcuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGlkIHVzZWQgZm9yIHRoZSBET00gZWxlbWVudHMuXG4gICAgICogTXVzdCBiZSB1bmlxdWUgaW5zaWRlIHRoZSBkb2N1bWVudCBpbiBjYXNlIHlvdSBoYXZlIG11bHRpcGxlIGBuZ2JOYXZgcyBvbiB0aGUgcGFnZS5cbiAgICAgKlxuICAgICAqIEF1dG9nZW5lcmF0ZWQgYXMgYG5nYi1uYXYtWFhYYCBpZiBub3QgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZG9tSWQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgaWQgdXNlZCBhcyBhIG1vZGVsIGZvciBhY3RpdmUgbmF2LlxuICAgICAqIEl0IGNhbiBiZSBhbnl0aGluZywgYnV0IG11c3QgYmUgdW5pcXVlIGluc2lkZSBvbmUgYG5nYk5hdmAuXG4gICAgICpcbiAgICAgKiBUaGUgb25seSBsaW1pdGF0aW9uIGlzIHRoYXQgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGhhdmUgdGhlIGAnJ2AgKGVtcHR5IHN0cmluZykgYXMgaWQsXG4gICAgICogYmVjYXVzZSBgIG5nYk5hdkl0ZW0gYCwgYG5nYk5hdkl0ZW09JydgIGFuZCBgW25nYk5hdkl0ZW1dPVwiJydcImAgYXJlIGluZGlzdGluZ3Vpc2hhYmxlXG4gICAgICovXG4gICAgX2lkOiBhbnk7XG4gICAgY29udGVudFRwbDogTmdiTmF2Q29udGVudCB8IG51bGw7XG4gICAgY29udGVudFRwbHM6IFF1ZXJ5TGlzdDxOZ2JOYXZDb250ZW50PjtcbiAgICBjb25zdHJ1Y3RvcihuYXY6IGFueSwgZWxlbWVudFJlZjogRWxlbWVudFJlZjxhbnk+KTtcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZDtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHJlYWRvbmx5IGFjdGl2ZTogYm9vbGVhbjtcbiAgICByZWFkb25seSBpZDogYW55O1xuICAgIHJlYWRvbmx5IHBhbmVsRG9tSWQ6IHN0cmluZztcbiAgICBpc1BhbmVsSW5Eb20oKTogYm9vbGVhbjtcbn1cbi8qKlxuICogQSBuYXYgZGlyZWN0aXZlIHRoYXQgaGVscHMgd2l0aCBpbXBsZW1lbnRpbmcgdGFiYmVkIG5hdmlnYXRpb24gY29tcG9uZW50cy5cbiAqXG4gKiBAc2luY2UgNS4yLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiTmF2IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcm9sZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2NkO1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbmF2IHRoYXQgc2hvdWxkIGJlIGFjdGl2ZVxuICAgICAqXG4gICAgICogWW91IGNvdWxkIGFsc28gdXNlIHRoZSBgLnNlbGVjdCgpYCBtZXRob2QgYW5kIHRoZSBgKG5hdkNoYW5nZSlgIGV2ZW50XG4gICAgICovXG4gICAgYWN0aXZlSWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBUaGUgZXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgYWN0aXZlIG5hdiBjaGFuZ2VzXG4gICAgICogVGhlIHBheWxvYWQgb2YgdGhlIGV2ZW50IGlzIHRoZSBuZXdseSBhY3RpdmUgbmF2IGlkXG4gICAgICpcbiAgICAgKiBJZiB5b3Ugd2FudCB0byBwcmV2ZW50IG5hdiBjaGFuZ2UsIHlvdSBzaG91bGQgdXNlIGAobmF2Q2hhbmdlKWAgZXZlbnRcbiAgICAgKi9cbiAgICBhY3RpdmVJZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBub24tYWN0aXZlIG5hdiBjb250ZW50IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIERPTVxuICAgICAqIE90aGVyd2lzZSBpdCB3aWxsIGp1c3QgYmUgaGlkZGVuXG4gICAgICovXG4gICAgZGVzdHJveU9uSGlkZTogYW55O1xuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBvZiBuYXZzLlxuICAgICAqXG4gICAgICogVXNpbmcgYHZlcnRpY2FsYCB3aWxsIGFsc28gYWRkIHRoZSBgYXJpYS1vcmllbnRhdGlvbmAgYXR0cmlidXRlXG4gICAgICovXG4gICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG4gICAgLyoqXG4gICAgICogUm9sZSBhdHRyaWJ1dGUgZ2VuZXJhdGluZyBzdHJhdGVneTpcbiAgICAgKiAtIGBmYWxzZWAgLSBubyByb2xlIGF0dHJpYnV0ZXMgd2lsbCBiZSBnZW5lcmF0ZWRcbiAgICAgKiAtIGAndGFibGlzdCdgIC0gJ3RhYmxpc3QnLCAndGFiJyBhbmQgJ3RhYnBhbmVsJyB3aWxsIGJlIGdlbmVyYXRlZCAoZGVmYXVsdClcbiAgICAgKi9cbiAgICByb2xlczogJ3RhYmxpc3QnIHwgZmFsc2U7XG4gICAgaXRlbXM6IFF1ZXJ5TGlzdDxOZ2JOYXZJdGVtPjtcbiAgICBjb25zdHJ1Y3Rvcihyb2xlOiBzdHJpbmcsIGNvbmZpZzogTmdiTmF2Q29uZmlnLCBfY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICAvKipcbiAgICAgKiBUaGUgbmF2IGNoYW5nZSBldmVudCBlbWl0dGVkIHJpZ2h0IGJlZm9yZSB0aGUgbmF2IGNoYW5nZSBoYXBwZW5zIG9uIHVzZXIgY2xpY2suXG4gICAgICpcbiAgICAgKiBUaGlzIGV2ZW50IHdvbid0IGJlIGVtaXR0ZWQgaWYgbmF2IGlzIGNoYW5nZWQgcHJvZ3JhbW1hdGljYWxseSB2aWEgYFthY3RpdmVJZF1gIG9yIGAuc2VsZWN0KClgLlxuICAgICAqXG4gICAgICogU2VlIFtgTmdiTmF2Q2hhbmdlRXZlbnRgXSgjL2NvbXBvbmVudHMvbmF2L2FwaSNOZ2JOYXZDaGFuZ2VFdmVudCkgZm9yIHBheWxvYWQgZGV0YWlscy5cbiAgICAgKi9cbiAgICBuYXZDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ2JOYXZDaGFuZ2VFdmVudD47XG4gICAgY2xpY2soaXRlbTogTmdiTmF2SXRlbSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgbmF2IHdpdGggdGhlIGdpdmVuIGlkIGFuZCBzaG93cyBpdHMgYXNzb2NpYXRlZCBwYW5lLlxuICAgICAqIEFueSBvdGhlciBuYXYgdGhhdCB3YXMgcHJldmlvdXNseSBzZWxlY3RlZCBiZWNvbWVzIHVuc2VsZWN0ZWQgYW5kIGl0cyBhc3NvY2lhdGVkIHBhbmUgaXMgaGlkZGVuLlxuICAgICAqL1xuICAgIHNlbGVjdChpZDogYW55KTogdm9pZDtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIF91cGRhdGVBY3RpdmVJZDtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gcHV0IG9uIHRoZSBuYXYgbGluay5cbiAqXG4gKiBAc2luY2UgNS4yLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiTmF2TGluayB7XG4gICAgcm9sZTogc3RyaW5nO1xuICAgIG5hdkl0ZW06IE5nYk5hdkl0ZW07XG4gICAgbmF2OiBOZ2JOYXY7XG4gICAgY29uc3RydWN0b3Iocm9sZTogc3RyaW5nLCBuYXZJdGVtOiBOZ2JOYXZJdGVtLCBuYXY6IE5nYk5hdik7XG4gICAgaGFzTmF2SXRlbUNsYXNzKCk6IGJvb2xlYW47XG59XG4vKipcbiAqIFRoZSBwYXlsb2FkIG9mIHRoZSBjaGFuZ2UgZXZlbnQgZW1pdHRlZCByaWdodCBiZWZvcmUgdGhlIG5hdiBjaGFuZ2UgaGFwcGVucyBvbiB1c2VyIGNsaWNrLlxuICpcbiAqIFRoaXMgZXZlbnQgd29uJ3QgYmUgZW1pdHRlZCBpZiBuYXYgaXMgY2hhbmdlZCBwcm9ncmFtbWF0aWNhbGx5IHZpYSBgW2FjdGl2ZUlkXWAgb3IgYC5zZWxlY3QoKWAuXG4gKlxuICogQHNpbmNlIDUuMi4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiTmF2Q2hhbmdlRXZlbnQge1xuICAgIC8qKlxuICAgICAqIElkIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIG5hdi5cbiAgICAgKi9cbiAgICBhY3RpdmVJZDogYW55O1xuICAgIC8qKlxuICAgICAqIElkIG9mIHRoZSBuZXdseSBzZWxlY3RlZCBuYXYuXG4gICAgICovXG4gICAgbmV4dElkOiBhbnk7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIHByZXZlbnQgbmF2IGNoYW5nZSBpZiBjYWxsZWQuXG4gICAgICovXG4gICAgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7XG59XG4iXX0=