import * as ɵngcc0 from '@angular/core';
export declare function NGB_TIMEPICKER_I18N_FACTORY(locale: any): NgbTimepickerI18nDefault;
/**
 * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 */
export declare abstract class NgbTimepickerI18n {
    /**
     * Returns the name for the period before midday.
     */
    abstract getMorningPeriod(): string;
    /**
     * Returns the name for the period after midday.
     */
    abstract getAfternoonPeriod(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTimepickerI18n>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbTimepickerI18n>;
}
export declare class NgbTimepickerI18nDefault extends NgbTimepickerI18n {
    private _periods;
    constructor(locale: string);
    getMorningPeriod(): string;
    getAfternoonPeriod(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTimepickerI18nDefault>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbTimepickerI18nDefault>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1pMThuLmQudHMiLCJzb3VyY2VzIjpbInRpbWVwaWNrZXItaTE4bi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIE5HQl9USU1FUElDS0VSX0kxOE5fRkFDVE9SWShsb2NhbGU6IGFueSk6IE5nYlRpbWVwaWNrZXJJMThuRGVmYXVsdDtcbi8qKlxuICogVHlwZSBvZiB0aGUgc2VydmljZSBzdXBwbHlpbmcgZGF5IHBlcmlvZHMgKGZvciBleGFtcGxlLCAnQU0nIGFuZCAnUE0nKSB0byBOZ2JUaW1lcGlja2VyIGNvbXBvbmVudC5cbiAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgc2VydmljZSBob25vcnMgdGhlIEFuZ3VsYXIgbG9jYWxlLCBhbmQgdXNlcyB0aGUgcmVnaXN0ZXJlZCBsb2NhbGUgZGF0YSxcbiAqIGFzIGV4cGxhaW5lZCBpbiB0aGUgQW5ndWxhciBpMThuIGd1aWRlLlxuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBOZ2JUaW1lcGlja2VySTE4biB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmFtZSBmb3IgdGhlIHBlcmlvZCBiZWZvcmUgbWlkZGF5LlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldE1vcm5pbmdQZXJpb2QoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hbWUgZm9yIHRoZSBwZXJpb2QgYWZ0ZXIgbWlkZGF5LlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldEFmdGVybm9vblBlcmlvZCgpOiBzdHJpbmc7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JUaW1lcGlja2VySTE4bkRlZmF1bHQgZXh0ZW5kcyBOZ2JUaW1lcGlja2VySTE4biB7XG4gICAgcHJpdmF0ZSBfcGVyaW9kcztcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGU6IHN0cmluZyk7XG4gICAgZ2V0TW9ybmluZ1BlcmlvZCgpOiBzdHJpbmc7XG4gICAgZ2V0QWZ0ZXJub29uUGVyaW9kKCk6IHN0cmluZztcbn1cbiJdfQ==