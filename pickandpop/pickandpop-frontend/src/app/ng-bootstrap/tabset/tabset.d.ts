import { AfterContentChecked, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { NgbTabsetConfig } from './tabset-config';
/**
 * A directive to wrap tab titles that need to contain HTML markup or other directives.
 *
 * Alternatively you could use the `NgbTab.title` input for string titles.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbTabTitle {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTabTitle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbTabTitle, "ng-template[ngbTabTitle]", never, {}, {}, never>;
}
/**
 * A directive to wrap content to be displayed in a tab.
 */
export declare class NgbTabContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTabContent>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbTabContent, "ng-template[ngbTabContent]", never, {}, {}, never>;
}
/**
 * A directive representing an individual tab.
 */
export declare class NgbTab implements AfterContentChecked {
    /**
     * The tab identifier.
     *
     * Must be unique for the entire document for proper accessibility support.
     */
    id: string;
    /**
     * The tab title.
     *
     * Use the [`NgbTabTitle`](#/components/tabset/api#NgbTabTitle) directive for non-string titles.
     */
    title: string;
    /**
     * If `true`, the current tab is disabled and can't be toggled.
     */
    disabled: boolean;
    titleTpl: NgbTabTitle | null;
    contentTpl: NgbTabContent | null;
    titleTpls: QueryList<NgbTabTitle>;
    contentTpls: QueryList<NgbTabContent>;
    ngAfterContentChecked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTab>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbTab, "ngb-tab", never, {
    "id": "id";
    "disabled": "disabled";
    "title": "title";
}, {}, ["titleTpls", "contentTpls"]>;
}
/**
 * The payload of the change event fired right before the tab change.
 */
export interface NgbTabChangeEvent {
    /**
     * The id of the currently active tab.
     */
    activeId: string;
    /**
     * The id of the newly selected tab.
     */
    nextId: string;
    /**
     * Calling this function will prevent tab switching.
     */
    preventDefault: () => void;
}
/**
 * A component that makes it easy to create tabbed interface.
 */
export declare class NgbTabset implements AfterContentChecked {
    justifyClass: string;
    tabs: QueryList<NgbTab>;
    /**
     * The identifier of the tab that should be opened **initially**.
     *
     * For subsequent tab switches use the `.select()` method and the `(tabChange)` event.
     */
    activeId: string;
    /**
     * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
     */
    destroyOnHide: boolean;
    /**
     * The horizontal alignment of the tabs with flexbox utilities.
     */
    justify: 'start' | 'center' | 'end' | 'fill' | 'justified';
    /**
     * The orientation of the tabset.
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Type of navigation to be used for tabs.
     *
     * Currently Bootstrap supports only `"tabs"` and `"pills"`.
     *
     * Since `3.0.0` can also be an arbitrary string (ex. for custom themes).
     */
    type: 'tabs' | 'pills' | string;
    /**
     * A tab change event emitted right before the tab change happens.
     *
     * See [`NgbTabChangeEvent`](#/components/tabset/api#NgbTabChangeEvent) for payload details.
     */
    tabChange: EventEmitter<NgbTabChangeEvent>;
    constructor(config: NgbTabsetConfig);
    /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     */
    select(tabId: string): void;
    ngAfterContentChecked(): void;
    private _getTabById;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTabset>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbTabset, "ngb-tabset", ["ngbTabset"], {
    "destroyOnHide": "destroyOnHide";
    "type": "type";
    "justify": "justify";
    "orientation": "orientation";
    "activeId": "activeId";
}, {
    "tabChange": "tabChange";
}, ["tabs"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmQudHMiLCJzb3VyY2VzIjpbInRhYnNldC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7OztBQUdBOzs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYlRhYnNldENvbmZpZyB9IGZyb20gJy4vdGFic2V0LWNvbmZpZyc7XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHdyYXAgdGFiIHRpdGxlcyB0aGF0IG5lZWQgdG8gY29udGFpbiBIVE1MIG1hcmt1cCBvciBvdGhlciBkaXJlY3RpdmVzLlxuICpcbiAqIEFsdGVybmF0aXZlbHkgeW91IGNvdWxkIHVzZSB0aGUgYE5nYlRhYi50aXRsZWAgaW5wdXQgZm9yIHN0cmluZyB0aXRsZXMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRhYlRpdGxlIHtcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pik7XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHdyYXAgY29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gYSB0YWIuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRhYkNvbnRlbnQge1xuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KTtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgcmVwcmVzZW50aW5nIGFuIGluZGl2aWR1YWwgdGFiLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JUYWIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGFiIGlkZW50aWZpZXIuXG4gICAgICpcbiAgICAgKiBNdXN0IGJlIHVuaXF1ZSBmb3IgdGhlIGVudGlyZSBkb2N1bWVudCBmb3IgcHJvcGVyIGFjY2Vzc2liaWxpdHkgc3VwcG9ydC5cbiAgICAgKi9cbiAgICBpZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0YWIgdGl0bGUuXG4gICAgICpcbiAgICAgKiBVc2UgdGhlIFtgTmdiVGFiVGl0bGVgXSgjL2NvbXBvbmVudHMvdGFic2V0L2FwaSNOZ2JUYWJUaXRsZSkgZGlyZWN0aXZlIGZvciBub24tc3RyaW5nIHRpdGxlcy5cbiAgICAgKi9cbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGN1cnJlbnQgdGFiIGlzIGRpc2FibGVkIGFuZCBjYW4ndCBiZSB0b2dnbGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHRpdGxlVHBsOiBOZ2JUYWJUaXRsZSB8IG51bGw7XG4gICAgY29udGVudFRwbDogTmdiVGFiQ29udGVudCB8IG51bGw7XG4gICAgdGl0bGVUcGxzOiBRdWVyeUxpc3Q8TmdiVGFiVGl0bGU+O1xuICAgIGNvbnRlbnRUcGxzOiBRdWVyeUxpc3Q8TmdiVGFiQ29udGVudD47XG4gICAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQ7XG59XG4vKipcbiAqIFRoZSBwYXlsb2FkIG9mIHRoZSBjaGFuZ2UgZXZlbnQgZmlyZWQgcmlnaHQgYmVmb3JlIHRoZSB0YWIgY2hhbmdlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYlRhYkNoYW5nZUV2ZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLlxuICAgICAqL1xuICAgIGFjdGl2ZUlkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIHRoZSBuZXdseSBzZWxlY3RlZCB0YWIuXG4gICAgICovXG4gICAgbmV4dElkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIHdpbGwgcHJldmVudCB0YWIgc3dpdGNoaW5nLlxuICAgICAqL1xuICAgIHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkO1xufVxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IG1ha2VzIGl0IGVhc3kgdG8gY3JlYXRlIHRhYmJlZCBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRhYnNldCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICAgIGp1c3RpZnlDbGFzczogc3RyaW5nO1xuICAgIHRhYnM6IFF1ZXJ5TGlzdDxOZ2JUYWI+O1xuICAgIC8qKlxuICAgICAqIFRoZSBpZGVudGlmaWVyIG9mIHRoZSB0YWIgdGhhdCBzaG91bGQgYmUgb3BlbmVkICoqaW5pdGlhbGx5KiouXG4gICAgICpcbiAgICAgKiBGb3Igc3Vic2VxdWVudCB0YWIgc3dpdGNoZXMgdXNlIHRoZSBgLnNlbGVjdCgpYCBtZXRob2QgYW5kIHRoZSBgKHRhYkNoYW5nZSlgIGV2ZW50LlxuICAgICAqL1xuICAgIGFjdGl2ZUlkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBub24tdmlzaWJsZSB0YWJzIGNvbnRlbnQgd2lsbCBiZSByZW1vdmVkIGZyb20gRE9NLiBPdGhlcndpc2UgaXQgd2lsbCBqdXN0IGJlIGhpZGRlbi5cbiAgICAgKi9cbiAgICBkZXN0cm95T25IaWRlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiB0aGUgdGFicyB3aXRoIGZsZXhib3ggdXRpbGl0aWVzLlxuICAgICAqL1xuICAgIGp1c3RpZnk6ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ2ZpbGwnIHwgJ2p1c3RpZmllZCc7XG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIG9mIHRoZSB0YWJzZXQuXG4gICAgICovXG4gICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG4gICAgLyoqXG4gICAgICogVHlwZSBvZiBuYXZpZ2F0aW9uIHRvIGJlIHVzZWQgZm9yIHRhYnMuXG4gICAgICpcbiAgICAgKiBDdXJyZW50bHkgQm9vdHN0cmFwIHN1cHBvcnRzIG9ubHkgYFwidGFic1wiYCBhbmQgYFwicGlsbHNcImAuXG4gICAgICpcbiAgICAgKiBTaW5jZSBgMy4wLjBgIGNhbiBhbHNvIGJlIGFuIGFyYml0cmFyeSBzdHJpbmcgKGV4LiBmb3IgY3VzdG9tIHRoZW1lcykuXG4gICAgICovXG4gICAgdHlwZTogJ3RhYnMnIHwgJ3BpbGxzJyB8IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBIHRhYiBjaGFuZ2UgZXZlbnQgZW1pdHRlZCByaWdodCBiZWZvcmUgdGhlIHRhYiBjaGFuZ2UgaGFwcGVucy5cbiAgICAgKlxuICAgICAqIFNlZSBbYE5nYlRhYkNoYW5nZUV2ZW50YF0oIy9jb21wb25lbnRzL3RhYnNldC9hcGkjTmdiVGFiQ2hhbmdlRXZlbnQpIGZvciBwYXlsb2FkIGRldGFpbHMuXG4gICAgICovXG4gICAgdGFiQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdiVGFiQ2hhbmdlRXZlbnQ+O1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogTmdiVGFic2V0Q29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIHRoZSB0YWIgd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIHNob3dzIGl0cyBhc3NvY2lhdGVkIGNvbnRlbnQgcGFuZWwuXG4gICAgICpcbiAgICAgKiBBbnkgb3RoZXIgdGFiIHRoYXQgd2FzIHByZXZpb3VzbHkgc2VsZWN0ZWQgYmVjb21lcyB1bnNlbGVjdGVkIGFuZCBpdHMgYXNzb2NpYXRlZCBwYW5lIGlzIHJlbW92ZWQgZnJvbSBET00gb3JcbiAgICAgKiBoaWRkZW4gZGVwZW5kaW5nIG9uIHRoZSBgZGVzdHJveU9uSGlkZWAgdmFsdWUuXG4gICAgICovXG4gICAgc2VsZWN0KHRhYklkOiBzdHJpbmcpOiB2b2lkO1xuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xuICAgIHByaXZhdGUgX2dldFRhYkJ5SWQ7XG59XG4iXX0=