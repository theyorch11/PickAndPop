/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, forwardRef, Inject, Injector, Input, NgZone, Output, Renderer2, TemplateRef, ViewContainerRef, ApplicationRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Live } from '../util/accessibility/live';
import { ngbAutoClose } from '../util/autoclose';
import { Key } from '../util/key';
import { PopupService } from '../util/popup';
import { positionElements } from '../util/positioning';
import { isDefined, toString } from '../util/util';
import { NgbTypeaheadConfig } from './typeahead-config';
import { NgbTypeaheadWindow } from './typeahead-window';
/** @type {?} */
const NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NgbTypeahead)),
    multi: true
};
/**
 * An event emitted right before an item is selected from the result list.
 * @record
 */
export function NgbTypeaheadSelectItemEvent() { }
if (false) {
    /**
     * The item from the result list about to be selected.
     * @type {?}
     */
    NgbTypeaheadSelectItemEvent.prototype.item;
    /**
     * Calling this function will prevent item selection from happening.
     * @type {?}
     */
    NgbTypeaheadSelectItemEvent.prototype.preventDefault;
}
/** @type {?} */
let nextWindowId = 0;
/**
 * A directive providing a simple way of creating powerful typeaheads from any text input.
 */
export class NgbTypeahead {
    /**
     * @param {?} _elementRef
     * @param {?} viewContainerRef
     * @param {?} _renderer
     * @param {?} injector
     * @param {?} componentFactoryResolver
     * @param {?} config
     * @param {?} ngZone
     * @param {?} _live
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _changeDetector
     * @param {?} applicationRef
     */
    constructor(_elementRef, viewContainerRef, _renderer, injector, componentFactoryResolver, config, ngZone, _live, _document, _ngZone, _changeDetector, applicationRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._live = _live;
        this._document = _document;
        this._ngZone = _ngZone;
        this._changeDetector = _changeDetector;
        this._closed$ = new Subject();
        /**
         * The value for the `autocomplete` attribute for the `<input>` element.
         *
         * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
         *
         * \@since 2.1.0
         */
        this.autocomplete = 'off';
        /**
         * The preferred placement of the typeahead.
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
        this.placement = 'bottom-left';
        /**
         * An event emitted right before an item is selected from the result list.
         *
         * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
         */
        this.selectItem = new EventEmitter();
        this.popupId = `ngb-typeahead-${nextWindowId++}`;
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.container = config.container;
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this.placement = config.placement;
        this._valueChanges = fromEvent(_elementRef.nativeElement, 'input')
            .pipe(map((/**
         * @param {?} $event
         * @return {?}
         */
        $event => ((/** @type {?} */ ($event.target))).value)));
        this._resubscribeTypeahead = new BehaviorSubject(null);
        this._popupService = new PopupService(NgbTypeaheadWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, applicationRef);
        this._zoneSubscription = ngZone.onStable.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.isPopupOpen()) {
                positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body');
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const inputValues$ = this._valueChanges.pipe(tap((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this._inputValueBackup = this.showHint ? value : null;
            this._onChange(this.editable ? value : undefined);
        })));
        /** @type {?} */
        const results$ = inputValues$.pipe(this.ngbTypeahead);
        /** @type {?} */
        const userInput$ = this._resubscribeTypeahead.pipe(switchMap((/**
         * @return {?}
         */
        () => results$)));
        this._subscription = this._subscribeToUserInput(userInput$);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._closePopup();
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this._onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this._onTouched = fn; }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._writeInputValue(this._formatItemForInput(value));
        if (this.showHint) {
            this._inputValueBackup = value;
        }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * Dismisses typeahead popup window
     * @return {?}
     */
    dismissPopup() {
        if (this.isPopupOpen()) {
            this._resubscribeTypeahead.next(null);
            this._closePopup();
            if (this.showHint && this._inputValueBackup !== null) {
                this._writeInputValue(this._inputValueBackup);
            }
            this._changeDetector.markForCheck();
        }
    }
    /**
     * Returns true if the typeahead popup window is displayed
     * @return {?}
     */
    isPopupOpen() { return this._windowRef != null; }
    /**
     * @return {?}
     */
    handleBlur() {
        this._resubscribeTypeahead.next(null);
        this._onTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeyDown(event) {
        if (!this.isPopupOpen()) {
            return;
        }
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.ArrowDown:
                event.preventDefault();
                this._windowRef.instance.next();
                this._showHint();
                break;
            case Key.ArrowUp:
                event.preventDefault();
                this._windowRef.instance.prev();
                this._showHint();
                break;
            case Key.Enter:
            case Key.Tab:
                /** @type {?} */
                const result = this._windowRef.instance.getActive();
                if (isDefined(result)) {
                    event.preventDefault();
                    event.stopPropagation();
                    this._selectResult(result);
                }
                this._closePopup();
                break;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _openPopup() {
        if (!this.isPopupOpen()) {
            this._inputValueBackup = this._elementRef.nativeElement.value;
            this._windowRef = this._popupService.open();
            this._windowRef.instance.id = this.popupId;
            this._windowRef.instance.selectEvent.subscribe((/**
             * @param {?} result
             * @return {?}
             */
            (result) => this._selectResultClosePopup(result)));
            this._windowRef.instance.activeChangeEvent.subscribe((/**
             * @param {?} activeId
             * @return {?}
             */
            (activeId) => this.activeDescendant = activeId));
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            this._changeDetector.markForCheck();
            ngbAutoClose(this._ngZone, this._document, 'outside', (/**
             * @return {?}
             */
            () => this.dismissPopup()), this._closed$, [this._elementRef.nativeElement, this._windowRef.location.nativeElement]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _closePopup() {
        this._closed$.next();
        this._popupService.close();
        this._windowRef = null;
        this.activeDescendant = undefined;
    }
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    _selectResult(result) {
        /** @type {?} */
        let defaultPrevented = false;
        this.selectItem.emit({ item: result, preventDefault: (/**
             * @return {?}
             */
            () => { defaultPrevented = true; }) });
        this._resubscribeTypeahead.next(null);
        if (!defaultPrevented) {
            this.writeValue(result);
            this._onChange(result);
        }
    }
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    _selectResultClosePopup(result) {
        this._selectResult(result);
        this._closePopup();
    }
    /**
     * @private
     * @return {?}
     */
    _showHint() {
        if (this.showHint && this._windowRef.instance.hasActive() && this._inputValueBackup != null) {
            /** @type {?} */
            const userInputLowerCase = this._inputValueBackup.toLowerCase();
            /** @type {?} */
            const formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
                this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));
                this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
            }
            else {
                this._writeInputValue(formattedVal);
            }
        }
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _formatItemForInput(item) {
        return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _writeInputValue(value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', toString(value));
    }
    /**
     * @private
     * @param {?} userInput$
     * @return {?}
     */
    _subscribeToUserInput(userInput$) {
        return userInput$.subscribe((/**
         * @param {?} results
         * @return {?}
         */
        (results) => {
            if (!results || results.length === 0) {
                this._closePopup();
            }
            else {
                this._openPopup();
                this._windowRef.instance.focusFirst = this.focusFirst;
                this._windowRef.instance.results = results;
                this._windowRef.instance.term = this._elementRef.nativeElement.value;
                if (this.resultFormatter) {
                    this._windowRef.instance.formatter = this.resultFormatter;
                }
                if (this.resultTemplate) {
                    this._windowRef.instance.resultTemplate = this.resultTemplate;
                }
                this._windowRef.instance.resetActive();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                this._windowRef.changeDetectorRef.detectChanges();
                this._showHint();
            }
            // live announcer
            /** @type {?} */
            const count = results ? results.length : 0;
            this._live.say(count === 0 ? 'No results available' : `${count} result${count === 1 ? '' : 's'} available`);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribeFromUserInput() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    }
}
NgbTypeahead.decorators = [
    { type: Directive, args: [{
                selector: 'input[ngbTypeahead]',
                exportAs: 'ngbTypeahead',
                host: {
                    '(blur)': 'handleBlur()',
                    '[class.open]': 'isPopupOpen()',
                    '(keydown)': 'handleKeyDown($event)',
                    '[autocomplete]': 'autocomplete',
                    'autocapitalize': 'off',
                    'autocorrect': 'off',
                    'role': 'combobox',
                    'aria-multiline': 'false',
                    '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
                    '[attr.aria-activedescendant]': 'activeDescendant',
                    '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
                    '[attr.aria-expanded]': 'isPopupOpen()'
                },
                providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
NgbTypeahead.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: NgbTypeaheadConfig },
    { type: NgZone },
    { type: Live },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: ApplicationRef }
];
NgbTypeahead.propDecorators = {
    autocomplete: [{ type: Input }],
    container: [{ type: Input }],
    editable: [{ type: Input }],
    focusFirst: [{ type: Input }],
    inputFormatter: [{ type: Input }],
    ngbTypeahead: [{ type: Input }],
    resultFormatter: [{ type: Input }],
    resultTemplate: [{ type: Input }],
    showHint: [{ type: Input }],
    placement: [{ type: Input }],
    selectItem: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._popupService;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._closed$;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._inputValueBackup;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._valueChanges;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._resubscribeTypeahead;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._windowRef;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._zoneSubscription;
    /**
     * The value for the `autocomplete` attribute for the `<input>` element.
     *
     * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
     *
     * \@since 2.1.0
     * @type {?}
     */
    NgbTypeahead.prototype.autocomplete;
    /**
     * A selector specifying the element the typeahead popup will be appended to.
     *
     * Currently only supports `"body"`.
     * @type {?}
     */
    NgbTypeahead.prototype.container;
    /**
     * If `true`, model values will not be restricted only to items selected from the popup.
     * @type {?}
     */
    NgbTypeahead.prototype.editable;
    /**
     * If `true`, the first item in the result list will always stay focused while typing.
     * @type {?}
     */
    NgbTypeahead.prototype.focusFirst;
    /**
     * The function that converts an item from the result list to a `string` to display in the `<input>` field.
     *
     * It is called when the user selects something in the popup or the model value changes, so the input needs to
     * be updated.
     * @type {?}
     */
    NgbTypeahead.prototype.inputFormatter;
    /**
     * The function that converts a stream of text values from the `<input>` element to the stream of the array of items
     * to display in the typeahead popup.
     *
     * If the resulting observable emits a non-empty array - the popup will be shown. If it emits an empty array - the
     * popup will be closed.
     *
     * See the [basic example](#/components/typeahead/examples#basic) for more details.
     *
     * Note that the `this` argument is `undefined` so you need to explicitly bind it to a desired "this" target.
     * @type {?}
     */
    NgbTypeahead.prototype.ngbTypeahead;
    /**
     * The function that converts an item from the result list to a `string` to display in the popup.
     *
     * Must be provided, if your `ngbTypeahead` returns something other than `Observable<string[]>`.
     *
     * Alternatively for more complex markup in the popup you should use `resultTemplate`.
     * @type {?}
     */
    NgbTypeahead.prototype.resultFormatter;
    /**
     * The template to override the way resulting items are displayed in the popup.
     *
     * See the [ResultTemplateContext](#/components/typeahead/api#ResultTemplateContext) for the template context.
     *
     * Also see the [template for results demo](#/components/typeahead/examples#template) for more details.
     * @type {?}
     */
    NgbTypeahead.prototype.resultTemplate;
    /**
     * If `true`, will show the hint in the `<input>` when an item in the result list matches.
     * @type {?}
     */
    NgbTypeahead.prototype.showHint;
    /**
     * The preferred placement of the typeahead.
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
     * @type {?}
     */
    NgbTypeahead.prototype.placement;
    /**
     * An event emitted right before an item is selected from the result list.
     *
     * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
     * @type {?}
     */
    NgbTypeahead.prototype.selectItem;
    /** @type {?} */
    NgbTypeahead.prototype.activeDescendant;
    /** @type {?} */
    NgbTypeahead.prototype.popupId;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._live;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._document;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    NgbTypeahead.prototype._changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvIiwic291cmNlcyI6WyJ0eXBlYWhlYWQvdHlwZWFoZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixjQUFjLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDbkYsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRWpELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxrQkFBa0IsRUFBd0IsTUFBTSxvQkFBb0Is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LG1DQUFpRDs7Ozs7SUFDakQsaUNBQTRCOzs7OztJQUNnQiw2QkFBbUI7Ozs7O0lBQUUsaUNBQXdDOzs7OztJQUN6RywrQkFBdUI7Ozs7O0lBQUUsdUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQXBwbGljYXRpb25SZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3dpdGNoTWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtMaXZlfSBmcm9tICcuLi91dGlsL2FjY2Vzc2liaWxpdHkvbGl2ZSc7XG5pbXBvcnQge25nYkF1dG9DbG9zZX0gZnJvbSAnLi4vdXRpbC9hdXRvY2xvc2UnO1xuaW1wb3J0IHtLZXl9IGZyb20gJy4uL3V0aWwva2V5JztcbmltcG9ydCB7UG9wdXBTZXJ2aWNlfSBmcm9tICcuLi91dGlsL3BvcHVwJztcbmltcG9ydCB7UGxhY2VtZW50QXJyYXksIHBvc2l0aW9uRWxlbWVudHN9IGZyb20gJy4uL3V0aWwvcG9zaXRpb25pbmcnO1xuaW1wb3J0IHtpc0RlZmluZWQsIHRvU3RyaW5nfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG5pbXBvcnQge05nYlR5cGVhaGVhZENvbmZpZ30gZnJvbSAnLi90eXBlYWhlYWQtY29uZmlnJztcbmltcG9ydCB7TmdiVHlwZWFoZWFkV2luZG93LCBSZXN1bHRUZW1wbGF0ZUNvbnRleHR9IGZyb20gJy4vdHlwZWFoZWFkLXdpbmRvdyc7XG5cblxuY29uc3QgTkdCX1RZUEVBSEVBRF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nYlR5cGVhaGVhZCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKipcbiAqIEFuIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIGFuIGl0ZW0gaXMgc2VsZWN0ZWQgZnJvbSB0aGUgcmVzdWx0IGxpc3QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiVHlwZWFoZWFkU2VsZWN0SXRlbUV2ZW50IHtcbiAgLyoqXG4gICAqIFRoZSBpdGVtIGZyb20gdGhlIHJlc3VsdCBsaXN0IGFib3V0IHRvIGJlIHNlbGVjdGVkLlxuICAgKi9cbiAgaXRlbTogYW55O1xuXG4gIC8qKlxuICAgKiBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBwcmV2ZW50IGl0ZW0gc2VsZWN0aW9uIGZyb20gaGFwcGVuaW5nLlxuICAgKi9cbiAgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7XG59XG5cbmxldCBuZXh0V2luZG93SWQgPSAwO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHByb3ZpZGluZyBhIHNpbXBsZSB3YXkgb2YgY3JlYXRpbmcgcG93ZXJmdWwgdHlwZWFoZWFkcyBmcm9tIGFueSB0ZXh0IGlucHV0LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtuZ2JUeXBlYWhlYWRdJyxcbiAgZXhwb3J0QXM6ICduZ2JUeXBlYWhlYWQnLFxuICBob3N0OiB7XG4gICAgJyhibHVyKSc6ICdoYW5kbGVCbHVyKCknLFxuICAgICdbY2xhc3Mub3Blbl0nOiAnaXNQb3B1cE9wZW4oKScsXG4gICAgJyhrZXlkb3duKSc6ICdoYW5kbGVLZXlEb3duKCRldmVudCknLFxuICAgICdbYXV0b2NvbXBsZXRlXSc6ICdhdXRvY29tcGxldGUnLFxuICAgICdhdXRvY2FwaXRhbGl6ZSc6ICdvZmYnLFxuICAgICdhdXRvY29ycmVjdCc6ICdvZmYnLFxuICAgICdyb2xlJzogJ2NvbWJvYm94JyxcbiAgICAnYXJpYS1tdWx0aWxpbmUnOiAnZmFsc2UnLFxuICAgICdbYXR0ci5hcmlhLWF1dG9jb21wbGV0ZV0nOiAnc2hvd0hpbnQgPyBcImJvdGhcIiA6IFwibGlzdFwiJyxcbiAgICAnW2F0dHIuYXJpYS1hY3RpdmVkZXNjZW5kYW50XSc6ICdhY3RpdmVEZXNjZW5kYW50JyxcbiAgICAnW2F0dHIuYXJpYS1vd25zXSc6ICdpc1BvcHVwT3BlbigpID8gcG9wdXBJZCA6IG51bGwnLFxuICAgICdbYXR0ci5hcmlhLWV4cGFuZGVkXSc6ICdpc1BvcHVwT3BlbigpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtOR0JfVFlQRUFIRUFEX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2JUeXBlYWhlYWQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3BvcHVwU2VydmljZTogUG9wdXBTZXJ2aWNlPE5nYlR5cGVhaGVhZFdpbmRvdz47XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jbG9zZWQkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfaW5wdXRWYWx1ZUJhY2t1cDogc3RyaW5nO1xuICBwcml2YXRlIF92YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcHJpdmF0ZSBfcmVzdWJzY3JpYmVUeXBlYWhlYWQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xuICBwcml2YXRlIF93aW5kb3dSZWY6IENvbXBvbmVudFJlZjxOZ2JUeXBlYWhlYWRXaW5kb3c+O1xuICBwcml2YXRlIF96b25lU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBmb3IgdGhlIGBhdXRvY29tcGxldGVgIGF0dHJpYnV0ZSBmb3IgdGhlIGA8aW5wdXQ+YCBlbGVtZW50LlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byBgXCJvZmZcImAgdG8gZGlzYWJsZSB0aGUgbmF0aXZlIGJyb3dzZXIgYXV0b2NvbXBsZXRlLCBidXQgeW91IGNhbiBvdmVycmlkZSBpdCBpZiBuZWNlc3NhcnkuXG4gICAqXG4gICAqIEBzaW5jZSAyLjEuMFxuICAgKi9cbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlID0gJ29mZic7XG5cbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdHlwZWFoZWFkIHBvcHVwIHdpbGwgYmUgYXBwZW5kZWQgdG8uXG4gICAqXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGBcImJvZHlcImAuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBtb2RlbCB2YWx1ZXMgd2lsbCBub3QgYmUgcmVzdHJpY3RlZCBvbmx5IHRvIGl0ZW1zIHNlbGVjdGVkIGZyb20gdGhlIHBvcHVwLlxuICAgKi9cbiAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIHJlc3VsdCBsaXN0IHdpbGwgYWx3YXlzIHN0YXkgZm9jdXNlZCB3aGlsZSB0eXBpbmcuXG4gICAqL1xuICBASW5wdXQoKSBmb2N1c0ZpcnN0OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhbiBpdGVtIGZyb20gdGhlIHJlc3VsdCBsaXN0IHRvIGEgYHN0cmluZ2AgdG8gZGlzcGxheSBpbiB0aGUgYDxpbnB1dD5gIGZpZWxkLlxuICAgKlxuICAgKiBJdCBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIHNvbWV0aGluZyBpbiB0aGUgcG9wdXAgb3IgdGhlIG1vZGVsIHZhbHVlIGNoYW5nZXMsIHNvIHRoZSBpbnB1dCBuZWVkcyB0b1xuICAgKiBiZSB1cGRhdGVkLlxuICAgKi9cbiAgQElucHV0KCkgaW5wdXRGb3JtYXR0ZXI6IChpdGVtOiBhbnkpID0+IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBzdHJlYW0gb2YgdGV4dCB2YWx1ZXMgZnJvbSB0aGUgYDxpbnB1dD5gIGVsZW1lbnQgdG8gdGhlIHN0cmVhbSBvZiB0aGUgYXJyYXkgb2YgaXRlbXNcbiAgICogdG8gZGlzcGxheSBpbiB0aGUgdHlwZWFoZWFkIHBvcHVwLlxuICAgKlxuICAgKiBJZiB0aGUgcmVzdWx0aW5nIG9ic2VydmFibGUgZW1pdHMgYSBub24tZW1wdHkgYXJyYXkgLSB0aGUgcG9wdXAgd2lsbCBiZSBzaG93bi4gSWYgaXQgZW1pdHMgYW4gZW1wdHkgYXJyYXkgLSB0aGVcbiAgICogcG9wdXAgd2lsbCBiZSBjbG9zZWQuXG4gICAqXG4gICAqIFNlZSB0aGUgW2Jhc2ljIGV4YW1wbGVdKCMvY29tcG9uZW50cy90eXBlYWhlYWQvZXhhbXBsZXMjYmFzaWMpIGZvciBtb3JlIGRldGFpbHMuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGUgYHRoaXNgIGFyZ3VtZW50IGlzIGB1bmRlZmluZWRgIHNvIHlvdSBuZWVkIHRvIGV4cGxpY2l0bHkgYmluZCBpdCB0byBhIGRlc2lyZWQgXCJ0aGlzXCIgdGFyZ2V0LlxuICAgKi9cbiAgQElucHV0KCkgbmdiVHlwZWFoZWFkOiAodGV4dDogT2JzZXJ2YWJsZTxzdHJpbmc+KSA9PiBPYnNlcnZhYmxlPHJlYWRvbmx5IGFueVtdPjtcblxuICAvKipcbiAgICogVGhlIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgYW4gaXRlbSBmcm9tIHRoZSByZXN1bHQgbGlzdCB0byBhIGBzdHJpbmdgIHRvIGRpc3BsYXkgaW4gdGhlIHBvcHVwLlxuICAgKlxuICAgKiBNdXN0IGJlIHByb3ZpZGVkLCBpZiB5b3VyIGBuZ2JUeXBlYWhlYWRgIHJldHVybnMgc29tZXRoaW5nIG90aGVyIHRoYW4gYE9ic2VydmFibGU8c3RyaW5nW10+YC5cbiAgICpcbiAgICogQWx0ZXJuYXRpdmVseSBmb3IgbW9yZSBjb21wbGV4IG1hcmt1cCBpbiB0aGUgcG9wdXAgeW91IHNob3VsZCB1c2UgYHJlc3VsdFRlbXBsYXRlYC5cbiAgICovXG4gIEBJbnB1dCgpIHJlc3VsdEZvcm1hdHRlcjogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gb3ZlcnJpZGUgdGhlIHdheSByZXN1bHRpbmcgaXRlbXMgYXJlIGRpc3BsYXllZCBpbiB0aGUgcG9wdXAuXG4gICAqXG4gICAqIFNlZSB0aGUgW1Jlc3VsdFRlbXBsYXRlQ29udGV4dF0oIy9jb21wb25lbnRzL3R5cGVhaGVhZC9hcGkjUmVzdWx0VGVtcGxhdGVDb250ZXh0KSBmb3IgdGhlIHRlbXBsYXRlIGNvbnRleHQuXG4gICAqXG4gICAqIEFsc28gc2VlIHRoZSBbdGVtcGxhdGUgZm9yIHJlc3VsdHMgZGVtb10oIy9jb21wb25lbnRzL3R5cGVhaGVhZC9leGFtcGxlcyN0ZW1wbGF0ZSkgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIEBJbnB1dCgpIHJlc3VsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxSZXN1bHRUZW1wbGF0ZUNvbnRleHQ+O1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHdpbGwgc2hvdyB0aGUgaGludCBpbiB0aGUgYDxpbnB1dD5gIHdoZW4gYW4gaXRlbSBpbiB0aGUgcmVzdWx0IGxpc3QgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgpIHNob3dIaW50OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgcHJlZmVycmVkIHBsYWNlbWVudCBvZiB0aGUgdHlwZWFoZWFkLlxuICAgKlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBcInRvcFwiYCwgYFwidG9wLWxlZnRcImAsIGBcInRvcC1yaWdodFwiYCwgYFwiYm90dG9tXCJgLCBgXCJib3R0b20tbGVmdFwiYCxcbiAgICogYFwiYm90dG9tLXJpZ2h0XCJgLCBgXCJsZWZ0XCJgLCBgXCJsZWZ0LXRvcFwiYCwgYFwibGVmdC1ib3R0b21cImAsIGBcInJpZ2h0XCJgLCBgXCJyaWdodC10b3BcImAsXG4gICAqIGBcInJpZ2h0LWJvdHRvbVwiYFxuICAgKlxuICAgKiBBY2NlcHRzIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmcgd2l0aCBzcGFjZSBzZXBhcmF0ZWQgcG9zc2libGUgdmFsdWVzLlxuICAgKlxuICAgKiBUaGUgZGVmYXVsdCBvcmRlciBvZiBwcmVmZXJlbmNlIGlzIGBcImJvdHRvbS1sZWZ0IGJvdHRvbS1yaWdodCB0b3AtbGVmdCB0b3AtcmlnaHRcImBcbiAgICpcbiAgICogUGxlYXNlIHNlZSB0aGUgW3Bvc2l0aW9uaW5nIG92ZXJ2aWV3XSgjL3Bvc2l0aW9uaW5nKSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheSA9ICdib3R0b20tbGVmdCc7XG5cbiAgLyoqXG4gICAqIEFuIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIGFuIGl0ZW0gaXMgc2VsZWN0ZWQgZnJvbSB0aGUgcmVzdWx0IGxpc3QuXG4gICAqXG4gICAqIEV2ZW50IHBheWxvYWQgaXMgb2YgdHlwZSBbYE5nYlR5cGVhaGVhZFNlbGVjdEl0ZW1FdmVudGBdKCMvY29tcG9uZW50cy90eXBlYWhlYWQvYXBpI05nYlR5cGVhaGVhZFNlbGVjdEl0ZW1FdmVudCkuXG4gICAqL1xuICBAT3V0cHV0KCkgc2VsZWN0SXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8TmdiVHlwZWFoZWFkU2VsZWN0SXRlbUV2ZW50PigpO1xuXG4gIGFjdGl2ZURlc2NlbmRhbnQ6IHN0cmluZztcbiAgcG9wdXBJZCA9IGBuZ2ItdHlwZWFoZWFkLSR7bmV4dFdpbmRvd0lkKyt9YDtcblxuICBwcml2YXRlIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBpbmplY3RvcjogSW5qZWN0b3IsIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgY29uZmlnOiBOZ2JUeXBlYWhlYWRDb25maWcsIG5nWm9uZTogTmdab25lLCBwcml2YXRlIF9saXZlOiBMaXZlLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiwgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyO1xuICAgIHRoaXMuZWRpdGFibGUgPSBjb25maWcuZWRpdGFibGU7XG4gICAgdGhpcy5mb2N1c0ZpcnN0ID0gY29uZmlnLmZvY3VzRmlyc3Q7XG4gICAgdGhpcy5zaG93SGludCA9IGNvbmZpZy5zaG93SGludDtcbiAgICB0aGlzLnBsYWNlbWVudCA9IGNvbmZpZy5wbGFjZW1lbnQ7XG5cbiAgICB0aGlzLl92YWx1ZUNoYW5nZXMgPSBmcm9tRXZlbnQ8RXZlbnQ+KF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waXBlKG1hcCgkZXZlbnQgPT4gKCRldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpKTtcblxuICAgIHRoaXMuX3Jlc3Vic2NyaWJlVHlwZWFoZWFkID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICAgIHRoaXMuX3BvcHVwU2VydmljZSA9IG5ldyBQb3B1cFNlcnZpY2U8TmdiVHlwZWFoZWFkV2luZG93PihcbiAgICAgICAgTmdiVHlwZWFoZWFkV2luZG93LCBpbmplY3Rvciwgdmlld0NvbnRhaW5lclJlZiwgX3JlbmRlcmVyLCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGFwcGxpY2F0aW9uUmVmKTtcblxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSBuZ1pvbmUub25TdGFibGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzUG9wdXBPcGVuKCkpIHtcbiAgICAgICAgcG9zaXRpb25FbGVtZW50cyhcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fd2luZG93UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQsIHRoaXMucGxhY2VtZW50LFxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPT09ICdib2R5Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlcyQgPSB0aGlzLl92YWx1ZUNoYW5nZXMucGlwZSh0YXAodmFsdWUgPT4ge1xuICAgICAgdGhpcy5faW5wdXRWYWx1ZUJhY2t1cCA9IHRoaXMuc2hvd0hpbnQgPyB2YWx1ZSA6IG51bGw7XG4gICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLmVkaXRhYmxlID8gdmFsdWUgOiB1bmRlZmluZWQpO1xuICAgIH0pKTtcbiAgICBjb25zdCByZXN1bHRzJCA9IGlucHV0VmFsdWVzJC5waXBlKHRoaXMubmdiVHlwZWFoZWFkKTtcbiAgICBjb25zdCB1c2VySW5wdXQkID0gdGhpcy5fcmVzdWJzY3JpYmVUeXBlYWhlYWQucGlwZShzd2l0Y2hNYXAoKCkgPT4gcmVzdWx0cyQpKTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9zdWJzY3JpYmVUb1VzZXJJbnB1dCh1c2VySW5wdXQkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Nsb3NlUG9wdXAoKTtcbiAgICB0aGlzLl91bnN1YnNjcmliZUZyb21Vc2VySW5wdXQoKTtcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7IHRoaXMuX29uVG91Y2hlZCA9IGZuOyB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3dyaXRlSW5wdXRWYWx1ZSh0aGlzLl9mb3JtYXRJdGVtRm9ySW5wdXQodmFsdWUpKTtcbiAgICBpZiAodGhpcy5zaG93SGludCkge1xuICAgICAgdGhpcy5faW5wdXRWYWx1ZUJhY2t1cCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzbWlzc2VzIHR5cGVhaGVhZCBwb3B1cCB3aW5kb3dcbiAgICovXG4gIGRpc21pc3NQb3B1cCgpIHtcbiAgICBpZiAodGhpcy5pc1BvcHVwT3BlbigpKSB7XG4gICAgICB0aGlzLl9yZXN1YnNjcmliZVR5cGVhaGVhZC5uZXh0KG51bGwpO1xuICAgICAgdGhpcy5fY2xvc2VQb3B1cCgpO1xuICAgICAgaWYgKHRoaXMuc2hvd0hpbnQgJiYgdGhpcy5faW5wdXRWYWx1ZUJhY2t1cCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl93cml0ZUlucHV0VmFsdWUodGhpcy5faW5wdXRWYWx1ZUJhY2t1cCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0eXBlYWhlYWQgcG9wdXAgd2luZG93IGlzIGRpc3BsYXllZFxuICAgKi9cbiAgaXNQb3B1cE9wZW4oKSB7IHJldHVybiB0aGlzLl93aW5kb3dSZWYgIT0gbnVsbDsgfVxuXG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgdGhpcy5fcmVzdWJzY3JpYmVUeXBlYWhlYWQubmV4dChudWxsKTtcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNQb3B1cE9wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgIGNhc2UgS2V5LkFycm93RG93bjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5fd2luZG93UmVmLmluc3RhbmNlLm5leHQoKTtcbiAgICAgICAgdGhpcy5fc2hvd0hpbnQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtleS5BcnJvd1VwOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl93aW5kb3dSZWYuaW5zdGFuY2UucHJldigpO1xuICAgICAgICB0aGlzLl9zaG93SGludCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5LkVudGVyOlxuICAgICAgY2FzZSBLZXkuVGFiOlxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl93aW5kb3dSZWYuaW5zdGFuY2UuZ2V0QWN0aXZlKCk7XG4gICAgICAgIGlmIChpc0RlZmluZWQocmVzdWx0KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xvc2VQb3B1cCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcGVuUG9wdXAoKSB7XG4gICAgaWYgKCF0aGlzLmlzUG9wdXBPcGVuKCkpIHtcbiAgICAgIHRoaXMuX2lucHV0VmFsdWVCYWNrdXAgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgICB0aGlzLl93aW5kb3dSZWYgPSB0aGlzLl9wb3B1cFNlcnZpY2Uub3BlbigpO1xuICAgICAgdGhpcy5fd2luZG93UmVmLmluc3RhbmNlLmlkID0gdGhpcy5wb3B1cElkO1xuICAgICAgdGhpcy5fd2luZG93UmVmLmluc3RhbmNlLnNlbGVjdEV2ZW50LnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHRoaXMuX3NlbGVjdFJlc3VsdENsb3NlUG9wdXAocmVzdWx0KSk7XG4gICAgICB0aGlzLl93aW5kb3dSZWYuaW5zdGFuY2UuYWN0aXZlQ2hhbmdlRXZlbnQuc3Vic2NyaWJlKChhY3RpdmVJZDogc3RyaW5nKSA9PiB0aGlzLmFjdGl2ZURlc2NlbmRhbnQgPSBhY3RpdmVJZCk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknKSB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyKS5hcHBlbmRDaGlsZCh0aGlzLl93aW5kb3dSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICBuZ2JBdXRvQ2xvc2UoXG4gICAgICAgICAgdGhpcy5fbmdab25lLCB0aGlzLl9kb2N1bWVudCwgJ291dHNpZGUnLCAoKSA9PiB0aGlzLmRpc21pc3NQb3B1cCgpLCB0aGlzLl9jbG9zZWQkLFxuICAgICAgICAgIFt0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3dpbmRvd1JlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VQb3B1cCgpIHtcbiAgICB0aGlzLl9jbG9zZWQkLm5leHQoKTtcbiAgICB0aGlzLl9wb3B1cFNlcnZpY2UuY2xvc2UoKTtcbiAgICB0aGlzLl93aW5kb3dSZWYgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlRGVzY2VuZGFudCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdFJlc3VsdChyZXN1bHQ6IGFueSkge1xuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RJdGVtLmVtaXQoe2l0ZW06IHJlc3VsdCwgcHJldmVudERlZmF1bHQ6ICgpID0+IHsgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7IH19KTtcbiAgICB0aGlzLl9yZXN1YnNjcmliZVR5cGVhaGVhZC5uZXh0KG51bGwpO1xuXG4gICAgaWYgKCFkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUocmVzdWx0KTtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHJlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0UmVzdWx0Q2xvc2VQb3B1cChyZXN1bHQ6IGFueSkge1xuICAgIHRoaXMuX3NlbGVjdFJlc3VsdChyZXN1bHQpO1xuICAgIHRoaXMuX2Nsb3NlUG9wdXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dIaW50KCkge1xuICAgIGlmICh0aGlzLnNob3dIaW50ICYmIHRoaXMuX3dpbmRvd1JlZi5pbnN0YW5jZS5oYXNBY3RpdmUoKSAmJiB0aGlzLl9pbnB1dFZhbHVlQmFja3VwICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHVzZXJJbnB1dExvd2VyQ2FzZSA9IHRoaXMuX2lucHV0VmFsdWVCYWNrdXAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbCA9IHRoaXMuX2Zvcm1hdEl0ZW1Gb3JJbnB1dCh0aGlzLl93aW5kb3dSZWYuaW5zdGFuY2UuZ2V0QWN0aXZlKCkpO1xuXG4gICAgICBpZiAodXNlcklucHV0TG93ZXJDYXNlID09PSBmb3JtYXR0ZWRWYWwuc3Vic3RyKDAsIHRoaXMuX2lucHV0VmFsdWVCYWNrdXAubGVuZ3RoKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHRoaXMuX3dyaXRlSW5wdXRWYWx1ZSh0aGlzLl9pbnB1dFZhbHVlQmFja3VwICsgZm9ybWF0dGVkVmFsLnN1YnN0cih0aGlzLl9pbnB1dFZhbHVlQmFja3VwLmxlbmd0aCkpO1xuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbJ3NldFNlbGVjdGlvblJhbmdlJ10uYXBwbHkoXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFt0aGlzLl9pbnB1dFZhbHVlQmFja3VwLmxlbmd0aCwgZm9ybWF0dGVkVmFsLmxlbmd0aF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fd3JpdGVJbnB1dFZhbHVlKGZvcm1hdHRlZFZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZm9ybWF0SXRlbUZvcklucHV0KGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW0gIT0gbnVsbCAmJiB0aGlzLmlucHV0Rm9ybWF0dGVyID8gdGhpcy5pbnB1dEZvcm1hdHRlcihpdGVtKSA6IHRvU3RyaW5nKGl0ZW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfd3JpdGVJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHRvU3RyaW5nKHZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmVUb1VzZXJJbnB1dCh1c2VySW5wdXQkOiBPYnNlcnZhYmxlPHJlYWRvbmx5IGFueVtdPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHVzZXJJbnB1dCQuc3Vic2NyaWJlKChyZXN1bHRzKSA9PiB7XG4gICAgICBpZiAoIXJlc3VsdHMgfHwgcmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fY2xvc2VQb3B1cCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fb3BlblBvcHVwKCk7XG4gICAgICAgIHRoaXMuX3dpbmRvd1JlZi5pbnN0YW5jZS5mb2N1c0ZpcnN0ID0gdGhpcy5mb2N1c0ZpcnN0O1xuICAgICAgICB0aGlzLl93aW5kb3dSZWYuaW5zdGFuY2UucmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgICAgIHRoaXMuX3dpbmRvd1JlZi5pbnN0YW5jZS50ZXJtID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgICBpZiAodGhpcy5yZXN1bHRGb3JtYXR0ZXIpIHtcbiAgICAgICAgICB0aGlzLl93aW5kb3dSZWYuaW5zdGFuY2UuZm9ybWF0dGVyID0gdGhpcy5yZXN1bHRGb3JtYXR0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVzdWx0VGVtcGxhdGUpIHtcbiAgICAgICAgICB0aGlzLl93aW5kb3dSZWYuaW5zdGFuY2UucmVzdWx0VGVtcGxhdGUgPSB0aGlzLnJlc3VsdFRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3dpbmRvd1JlZi5pbnN0YW5jZS5yZXNldEFjdGl2ZSgpO1xuXG4gICAgICAgIC8vIFRoZSBvYnNlcnZhYmxlIHN0cmVhbSB3ZSBhcmUgc3Vic2NyaWJpbmcgdG8gbWlnaHQgaGF2ZSBhc3luYyBzdGVwc1xuICAgICAgICAvLyBhbmQgaWYgYSBjb21wb25lbnQgY29udGFpbmluZyB0eXBlYWhlYWQgaXMgdXNpbmcgdGhlIE9uUHVzaCBzdHJhdGVneVxuICAgICAgICAvLyB0aGUgY2hhbmdlIGRldGVjdGlvbiB0dXJuIHdvdWxkbid0IGJlIGludm9rZWQgYXV0b21hdGljYWxseS5cbiAgICAgICAgdGhpcy5fd2luZG93UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLl9zaG93SGludCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBsaXZlIGFubm91bmNlclxuICAgICAgY29uc3QgY291bnQgPSByZXN1bHRzID8gcmVzdWx0cy5sZW5ndGggOiAwO1xuICAgICAgdGhpcy5fbGl2ZS5zYXkoY291bnQgPT09IDAgPyAnTm8gcmVzdWx0cyBhdmFpbGFibGUnIDogYCR7Y291bnR9IHJlc3VsdCR7Y291bnQgPT09IDEgPyAnJyA6ICdzJ30gYXZhaWxhYmxlYCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91bnN1YnNjcmliZUZyb21Vc2VySW5wdXQoKSB7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IG51bGw7XG4gIH1cbn1cbiJdfQ==