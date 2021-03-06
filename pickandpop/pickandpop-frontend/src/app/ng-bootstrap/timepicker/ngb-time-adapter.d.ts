import { NgbTimeStruct } from './ngb-time-struct';
import * as ɵngcc0 from '@angular/core';
export declare function NGB_DATEPICKER_TIME_ADAPTER_FACTORY(): NgbTimeStructAdapter;
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * @since 2.2.0
 */
export declare abstract class NgbTimeAdapter<T> {
    /**
     * Converts a user-model time of type `T` to an `NgbTimeStruct` for internal use.
     */
    abstract fromModel(value: T): NgbTimeStruct;
    /**
     * Converts an internal `NgbTimeStruct` time to a user-model time of type `T`.
     */
    abstract toModel(time: NgbTimeStruct): T;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTimeAdapter<any>>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbTimeAdapter<any>>;
}
export declare class NgbTimeStructAdapter extends NgbTimeAdapter<NgbTimeStruct> {
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    fromModel(time: NgbTimeStruct): NgbTimeStruct;
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    toModel(time: NgbTimeStruct): NgbTimeStruct;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTimeStructAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbTimeStructAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRpbWUtYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJuZ2ItdGltZS1hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7Ozs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdiVGltZVN0cnVjdCB9IGZyb20gJy4vbmdiLXRpbWUtc3RydWN0JztcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIE5HQl9EQVRFUElDS0VSX1RJTUVfQURBUFRFUl9GQUNUT1JZKCk6IE5nYlRpbWVTdHJ1Y3RBZGFwdGVyO1xuLyoqXG4gKiBBbiBhYnN0cmFjdCBzZXJ2aWNlIHRoYXQgZG9lcyB0aGUgY29udmVyc2lvbiBiZXR3ZWVuIHRoZSBpbnRlcm5hbCB0aW1lcGlja2VyIGBOZ2JUaW1lU3RydWN0YCBtb2RlbCBhbmRcbiAqIGFueSBwcm92aWRlZCB1c2VyIHRpbWUgbW9kZWwgYFRgLCBleC4gYSBzdHJpbmcsIGEgbmF0aXZlIGRhdGUsIGV0Yy5cbiAqXG4gKiBUaGUgYWRhcHRlciBpcyB1c2VkICoqb25seSoqIGZvciBjb252ZXJzaW9uIHdoZW4gYmluZGluZyB0aW1lcGlja2VyIHRvIGEgZm9ybSBjb250cm9sLFxuICogZXguIGBbKG5nTW9kZWwpXT1cInVzZXJUaW1lTW9kZWxcImAuIEhlcmUgYHVzZXJUaW1lTW9kZWxgIGNhbiBiZSBvZiBhbnkgdHlwZS5cbiAqXG4gKiBUaGUgZGVmYXVsdCB0aW1lcGlja2VyIGltcGxlbWVudGF0aW9uIGFzc3VtZXMgd2UgdXNlIGBOZ2JUaW1lU3RydWN0YCBhcyBhIHVzZXIgbW9kZWwuXG4gKlxuICogU2VlIHRoZSBbY3VzdG9tIHRpbWUgYWRhcHRlciBkZW1vXSgjL2NvbXBvbmVudHMvdGltZXBpY2tlci9leGFtcGxlcyNhZGFwdGVyKSBmb3IgYW4gZXhhbXBsZS5cbiAqXG4gKiBAc2luY2UgMi4yLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgTmdiVGltZUFkYXB0ZXI8VD4ge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgdXNlci1tb2RlbCB0aW1lIG9mIHR5cGUgYFRgIHRvIGFuIGBOZ2JUaW1lU3RydWN0YCBmb3IgaW50ZXJuYWwgdXNlLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGZyb21Nb2RlbCh2YWx1ZTogVCk6IE5nYlRpbWVTdHJ1Y3Q7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYW4gaW50ZXJuYWwgYE5nYlRpbWVTdHJ1Y3RgIHRpbWUgdG8gYSB1c2VyLW1vZGVsIHRpbWUgb2YgdHlwZSBgVGAuXG4gICAgICovXG4gICAgYWJzdHJhY3QgdG9Nb2RlbCh0aW1lOiBOZ2JUaW1lU3RydWN0KTogVDtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRpbWVTdHJ1Y3RBZGFwdGVyIGV4dGVuZHMgTmdiVGltZUFkYXB0ZXI8TmdiVGltZVN0cnVjdD4ge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgTmdiVGltZVN0cnVjdCB2YWx1ZSBpbnRvIE5nYlRpbWVTdHJ1Y3QgdmFsdWVcbiAgICAgKi9cbiAgICBmcm9tTW9kZWwodGltZTogTmdiVGltZVN0cnVjdCk6IE5nYlRpbWVTdHJ1Y3Q7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBOZ2JUaW1lU3RydWN0IHZhbHVlIGludG8gTmdiVGltZVN0cnVjdCB2YWx1ZVxuICAgICAqL1xuICAgIHRvTW9kZWwodGltZTogTmdiVGltZVN0cnVjdCk6IE5nYlRpbWVTdHJ1Y3Q7XG59XG4iXX0=