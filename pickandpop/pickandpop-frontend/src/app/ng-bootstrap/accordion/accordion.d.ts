import { AfterContentChecked, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { NgbAccordionConfig } from './accordion-config';
/**
 * The context for the [NgbPanelHeader](#/components/accordion/api#NgbPanelHeader) template
 *
 * @since 4.1.0
 */
import * as ɵngcc0 from '@angular/core';
export interface NgbPanelHeaderContext {
    /**
     * `True` if current panel is opened
     */
    opened: boolean;
}
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * @since 4.1.0
 */
export declare class NgbPanelHeader {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPanelHeader>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPanelHeader, "ng-template[ngbPanelHeader]", never, {}, {}, never>;
}
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */
export declare class NgbPanelTitle {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPanelTitle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPanelTitle, "ng-template[ngbPanelTitle]", never, {}, {}, never>;
}
/**
 * A directive that wraps the accordion panel content.
 */
export declare class NgbPanelContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPanelContent>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPanelContent, "ng-template[ngbPanelContent]", never, {}, {}, never>;
}
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */
export declare class NgbPanel implements AfterContentChecked {
    /**
     *  If `true`, the panel is disabled an can't be toggled.
     */
    disabled: boolean;
    /**
     *  An optional id for the panel that must be unique on the page.
     *
     *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
     */
    id: string;
    isOpen: boolean;
    /**
     *  The panel title.
     *
     *  You can alternatively use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to set panel title.
     */
    title: string;
    /**
     * Type of the current panel.
     *
     * Bootstrap provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
     * `'secondary'`, `'light'` and `'dark'`.
     */
    type: string;
    /**
     * An optional class applied to the accordion card element that wraps both panel title and content.
     *
     * @since 5.3.0
     */
    cardClass: string;
    titleTpl: NgbPanelTitle | null;
    headerTpl: NgbPanelHeader | null;
    contentTpl: NgbPanelContent | null;
    titleTpls: QueryList<NgbPanelTitle>;
    headerTpls: QueryList<NgbPanelHeader>;
    contentTpls: QueryList<NgbPanelContent>;
    ngAfterContentChecked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPanel>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPanel, "ngb-panel", never, {
    "disabled": "disabled";
    "id": "id";
    "title": "title";
    "type": "type";
    "cardClass": "cardClass";
}, {}, ["titleTpls", "headerTpls", "contentTpls"]>;
}
/**
 * An event emitted right before toggling an accordion panel.
 */
export interface NgbPanelChangeEvent {
    /**
     * The id of the accordion panel that is being toggled.
     */
    panelId: string;
    /**
     * The next state of the panel.
     *
     * `true` if it will be opened, `false` if closed.
     */
    nextState: boolean;
    /**
     * Calling this function will prevent panel toggling.
     */
    preventDefault: () => void;
}
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */
export declare class NgbAccordion implements AfterContentChecked {
    panels: QueryList<NgbPanel>;
    /**
     * An array or comma separated strings of panel ids that should be opened **initially**.
     *
     * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
     * the `(panelChange)` event.
     */
    activeIds: string | readonly string[];
    /**
     *  If `true`, only one panel could be opened at a time.
     *
     *  Opening a new panel will close others.
     */
    closeOtherPanels: boolean;
    /**
     * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
     */
    destroyOnHide: boolean;
    /**
     * Type of panels.
     *
     * Bootstrap provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
     * `'secondary'`, `'light'` and `'dark'`.
     */
    type: string;
    /**
     * Event emitted right before the panel toggle happens.
     *
     * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
     */
    panelChange: EventEmitter<NgbPanelChangeEvent>;
    constructor(config: NgbAccordionConfig);
    /**
     * Checks if a panel with a given id is expanded.
     */
    isExpanded(panelId: string): boolean;
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     */
    expand(panelId: string): void;
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     */
    expandAll(): void;
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     */
    collapse(panelId: string): void;
    /**
     * Collapses all opened panels.
     */
    collapseAll(): void;
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     */
    toggle(panelId: string): void;
    ngAfterContentChecked(): void;
    private _changeOpenState;
    private _closeOthers;
    private _findPanelById;
    private _updateActiveIds;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbAccordion>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbAccordion, "ngb-accordion", ["ngbAccordion"], {
    "activeIds": "activeIds";
    "destroyOnHide": "destroyOnHide";
    "type": "type";
    "closeOtherPanels": "closeOthers";
}, {
    "panelChange": "panelChange";
}, ["panels"]>;
}
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * @since 4.1.0
 */
export declare class NgbPanelToggle {
    accordion: NgbAccordion;
    panel: NgbPanel;
    ngbPanelToggle: NgbPanel;
    constructor(accordion: NgbAccordion, panel: NgbPanel);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPanelToggle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPanelToggle, "button[ngbPanelToggle]", never, {
    "ngbPanelToggle": "ngbPanelToggle";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmQudHMiLCJzb3VyY2VzIjpbImFjY29yZGlvbi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjY29yZGlvbkNvbmZpZyB9IGZyb20gJy4vYWNjb3JkaW9uLWNvbmZpZyc7XG4vKipcbiAqIFRoZSBjb250ZXh0IGZvciB0aGUgW05nYlBhbmVsSGVhZGVyXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbEhlYWRlcikgdGVtcGxhdGVcbiAqXG4gKiBAc2luY2UgNC4xLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JQYW5lbEhlYWRlckNvbnRleHQge1xuICAgIC8qKlxuICAgICAqIGBUcnVlYCBpZiBjdXJyZW50IHBhbmVsIGlzIG9wZW5lZFxuICAgICAqL1xuICAgIG9wZW5lZDogYm9vbGVhbjtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCB3cmFwcyBhbiBhY2NvcmRpb24gcGFuZWwgaGVhZGVyIHdpdGggYW55IEhUTUwgbWFya3VwIGFuZCBhIHRvZ2dsaW5nIGJ1dHRvblxuICogbWFya2VkIHdpdGggW2BOZ2JQYW5lbFRvZ2dsZWBdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsVG9nZ2xlKS5cbiAqIFNlZSB0aGUgW2hlYWRlciBjdXN0b21pemF0aW9uIGRlbW9dKCMvY29tcG9uZW50cy9hY2NvcmRpb24vZXhhbXBsZXMjaGVhZGVyKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBjYW4gYWxzbyB1c2UgW2BOZ2JQYW5lbFRpdGxlYF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxUaXRsZSkgdG8gY3VzdG9taXplIG9ubHkgdGhlIHBhbmVsIHRpdGxlLlxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JQYW5lbEhlYWRlciB7XG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdyYXBzIG9ubHkgdGhlIHBhbmVsIHRpdGxlIHdpdGggSFRNTCBtYXJrdXAgaW5zaWRlLlxuICpcbiAqIFlvdSBjYW4gYWxzbyB1c2UgW2BOZ2JQYW5lbEhlYWRlcmBdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsSGVhZGVyKSB0byBjdXN0b21pemUgdGhlIGZ1bGwgcGFuZWwgaGVhZGVyLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JQYW5lbFRpdGxlIHtcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pik7XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgd3JhcHMgdGhlIGFjY29yZGlvbiBwYW5lbCBjb250ZW50LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JQYW5lbENvbnRlbnQge1xuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KTtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCB3cmFwcyBhbiBpbmRpdmlkdWFsIGFjY29yZGlvbiBwYW5lbCB3aXRoIHRpdGxlIGFuZCBjb2xsYXBzaWJsZSBjb250ZW50LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JQYW5lbCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICAgIC8qKlxuICAgICAqICBJZiBgdHJ1ZWAsIHRoZSBwYW5lbCBpcyBkaXNhYmxlZCBhbiBjYW4ndCBiZSB0b2dnbGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqICBBbiBvcHRpb25hbCBpZCBmb3IgdGhlIHBhbmVsIHRoYXQgbXVzdCBiZSB1bmlxdWUgb24gdGhlIHBhZ2UuXG4gICAgICpcbiAgICAgKiAgSWYgbm90IHByb3ZpZGVkLCBpdCB3aWxsIGJlIGF1dG8tZ2VuZXJhdGVkIGluIHRoZSBgbmdiLXBhbmVsLXh4eGAgZm9ybWF0LlxuICAgICAqL1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaXNPcGVuOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqICBUaGUgcGFuZWwgdGl0bGUuXG4gICAgICpcbiAgICAgKiAgWW91IGNhbiBhbHRlcm5hdGl2ZWx5IHVzZSBbYE5nYlBhbmVsVGl0bGVgXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbFRpdGxlKSB0byBzZXQgcGFuZWwgdGl0bGUuXG4gICAgICovXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUeXBlIG9mIHRoZSBjdXJyZW50IHBhbmVsLlxuICAgICAqXG4gICAgICogQm9vdHN0cmFwIHByb3ZpZGVzIHN0eWxlcyBmb3IgdGhlIGZvbGxvd2luZyB0eXBlczogYCdzdWNjZXNzJ2AsIGAnaW5mbydgLCBgJ3dhcm5pbmcnYCwgYCdkYW5nZXInYCwgYCdwcmltYXJ5J2AsXG4gICAgICogYCdzZWNvbmRhcnknYCwgYCdsaWdodCdgIGFuZCBgJ2RhcmsnYC5cbiAgICAgKi9cbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQW4gb3B0aW9uYWwgY2xhc3MgYXBwbGllZCB0byB0aGUgYWNjb3JkaW9uIGNhcmQgZWxlbWVudCB0aGF0IHdyYXBzIGJvdGggcGFuZWwgdGl0bGUgYW5kIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAc2luY2UgNS4zLjBcbiAgICAgKi9cbiAgICBjYXJkQ2xhc3M6IHN0cmluZztcbiAgICB0aXRsZVRwbDogTmdiUGFuZWxUaXRsZSB8IG51bGw7XG4gICAgaGVhZGVyVHBsOiBOZ2JQYW5lbEhlYWRlciB8IG51bGw7XG4gICAgY29udGVudFRwbDogTmdiUGFuZWxDb250ZW50IHwgbnVsbDtcbiAgICB0aXRsZVRwbHM6IFF1ZXJ5TGlzdDxOZ2JQYW5lbFRpdGxlPjtcbiAgICBoZWFkZXJUcGxzOiBRdWVyeUxpc3Q8TmdiUGFuZWxIZWFkZXI+O1xuICAgIGNvbnRlbnRUcGxzOiBRdWVyeUxpc3Q8TmdiUGFuZWxDb250ZW50PjtcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZDtcbn1cbi8qKlxuICogQW4gZXZlbnQgZW1pdHRlZCByaWdodCBiZWZvcmUgdG9nZ2xpbmcgYW4gYWNjb3JkaW9uIHBhbmVsLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYlBhbmVsQ2hhbmdlRXZlbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgYWNjb3JkaW9uIHBhbmVsIHRoYXQgaXMgYmVpbmcgdG9nZ2xlZC5cbiAgICAgKi9cbiAgICBwYW5lbElkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIG5leHQgc3RhdGUgb2YgdGhlIHBhbmVsLlxuICAgICAqXG4gICAgICogYHRydWVgIGlmIGl0IHdpbGwgYmUgb3BlbmVkLCBgZmFsc2VgIGlmIGNsb3NlZC5cbiAgICAgKi9cbiAgICBuZXh0U3RhdGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIHdpbGwgcHJldmVudCBwYW5lbCB0b2dnbGluZy5cbiAgICAgKi9cbiAgICBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDtcbn1cbi8qKlxuICogQWNjb3JkaW9uIGlzIGEgY29sbGVjdGlvbiBvZiBjb2xsYXBzaWJsZSBwYW5lbHMgKGJvb3RzdHJhcCBjYXJkcykuXG4gKlxuICogSXQgY2FuIGVuc3VyZSBvbmx5IG9uZSBwYW5lbCBpcyBvcGVuZWQgYXQgYSB0aW1lIGFuZCBhbGxvd3MgdG8gY3VzdG9taXplIHBhbmVsXG4gKiBoZWFkZXJzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JBY2NvcmRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgICBwYW5lbHM6IFF1ZXJ5TGlzdDxOZ2JQYW5lbD47XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb3IgY29tbWEgc2VwYXJhdGVkIHN0cmluZ3Mgb2YgcGFuZWwgaWRzIHRoYXQgc2hvdWxkIGJlIG9wZW5lZCAqKmluaXRpYWxseSoqLlxuICAgICAqXG4gICAgICogRm9yIHN1YnNlcXVlbnQgY2hhbmdlcyB1c2UgbWV0aG9kcyBsaWtlIGBleHBhbmQoKWAsIGBjb2xsYXBzZSgpYCwgZXRjLiBhbmRcbiAgICAgKiB0aGUgYChwYW5lbENoYW5nZSlgIGV2ZW50LlxuICAgICAqL1xuICAgIGFjdGl2ZUlkczogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogIElmIGB0cnVlYCwgb25seSBvbmUgcGFuZWwgY291bGQgYmUgb3BlbmVkIGF0IGEgdGltZS5cbiAgICAgKlxuICAgICAqICBPcGVuaW5nIGEgbmV3IHBhbmVsIHdpbGwgY2xvc2Ugb3RoZXJzLlxuICAgICAqL1xuICAgIGNsb3NlT3RoZXJQYW5lbHM6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBwYW5lbCBjb250ZW50IHdpbGwgYmUgZGV0YWNoZWQgZnJvbSBET00gYW5kIG5vdCBzaW1wbHkgaGlkZGVuIHdoZW4gdGhlIHBhbmVsIGlzIGNvbGxhcHNlZC5cbiAgICAgKi9cbiAgICBkZXN0cm95T25IaWRlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFR5cGUgb2YgcGFuZWxzLlxuICAgICAqXG4gICAgICogQm9vdHN0cmFwIHByb3ZpZGVzIHN0eWxlcyBmb3IgdGhlIGZvbGxvd2luZyB0eXBlczogYCdzdWNjZXNzJ2AsIGAnaW5mbydgLCBgJ3dhcm5pbmcnYCwgYCdkYW5nZXInYCwgYCdwcmltYXJ5J2AsXG4gICAgICogYCdzZWNvbmRhcnknYCwgYCdsaWdodCdgIGFuZCBgJ2RhcmsnYC5cbiAgICAgKi9cbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRXZlbnQgZW1pdHRlZCByaWdodCBiZWZvcmUgdGhlIHBhbmVsIHRvZ2dsZSBoYXBwZW5zLlxuICAgICAqXG4gICAgICogU2VlIFtOZ2JQYW5lbENoYW5nZUV2ZW50XSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbENoYW5nZUV2ZW50KSBmb3IgcGF5bG9hZCBkZXRhaWxzLlxuICAgICAqL1xuICAgIHBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdiUGFuZWxDaGFuZ2VFdmVudD47XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBOZ2JBY2NvcmRpb25Db25maWcpO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhIHBhbmVsIHdpdGggYSBnaXZlbiBpZCBpcyBleHBhbmRlZC5cbiAgICAgKi9cbiAgICBpc0V4cGFuZGVkKHBhbmVsSWQ6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRXhwYW5kcyBhIHBhbmVsIHdpdGggYSBnaXZlbiBpZC5cbiAgICAgKlxuICAgICAqIEhhcyBubyBlZmZlY3QgaWYgdGhlIHBhbmVsIGlzIGFscmVhZHkgZXhwYW5kZWQgb3IgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZXhwYW5kKHBhbmVsSWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRXhwYW5kcyBhbGwgcGFuZWxzLCBpZiBgW2Nsb3NlT3RoZXJzXWAgaXMgYGZhbHNlYC5cbiAgICAgKlxuICAgICAqIElmIGBbY2xvc2VPdGhlcnNdYCBpcyBgdHJ1ZWAsIGl0IHdpbGwgZXhwYW5kIHRoZSBmaXJzdCBwYW5lbCwgdW5sZXNzIHRoZXJlIGlzIGFscmVhZHkgYSBwYW5lbCBvcGVuZWQuXG4gICAgICovXG4gICAgZXhwYW5kQWxsKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ29sbGFwc2VzIGEgcGFuZWwgd2l0aCB0aGUgZ2l2ZW4gaWQuXG4gICAgICpcbiAgICAgKiBIYXMgbm8gZWZmZWN0IGlmIHRoZSBwYW5lbCBpcyBhbHJlYWR5IGNvbGxhcHNlZCBvciBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBjb2xsYXBzZShwYW5lbElkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENvbGxhcHNlcyBhbGwgb3BlbmVkIHBhbmVscy5cbiAgICAgKi9cbiAgICBjb2xsYXBzZUFsbCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgYSBwYW5lbCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICAgKlxuICAgICAqIEhhcyBubyBlZmZlY3QgaWYgdGhlIHBhbmVsIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIHRvZ2dsZShwYW5lbElkOiBzdHJpbmcpOiB2b2lkO1xuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xuICAgIHByaXZhdGUgX2NoYW5nZU9wZW5TdGF0ZTtcbiAgICBwcml2YXRlIF9jbG9zZU90aGVycztcbiAgICBwcml2YXRlIF9maW5kUGFuZWxCeUlkO1xuICAgIHByaXZhdGUgX3VwZGF0ZUFjdGl2ZUlkcztcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gcHV0IG9uIGEgYnV0dG9uIHRoYXQgdG9nZ2xlcyBwYW5lbCBvcGVuaW5nIGFuZCBjbG9zaW5nLlxuICpcbiAqIFRvIGJlIHVzZWQgaW5zaWRlIHRoZSBbYE5nYlBhbmVsSGVhZGVyYF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxIZWFkZXIpXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlBhbmVsVG9nZ2xlIHtcbiAgICBhY2NvcmRpb246IE5nYkFjY29yZGlvbjtcbiAgICBwYW5lbDogTmdiUGFuZWw7XG4gICAgbmdiUGFuZWxUb2dnbGU6IE5nYlBhbmVsO1xuICAgIGNvbnN0cnVjdG9yKGFjY29yZGlvbjogTmdiQWNjb3JkaW9uLCBwYW5lbDogTmdiUGFuZWwpO1xufVxuIl19