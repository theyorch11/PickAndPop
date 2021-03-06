import { NgbDateAdapter } from './ngb-date-adapter';
import { NgbDateStruct } from '../ngb-date-struct';
/**
 * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
    /**
     * Converts a native `Date` to a `NgbDateStruct`.
     */
    fromModel(date: Date): NgbDateStruct;
    /**
     * Converts a `NgbDateStruct` to a native `Date`.
     */
    toModel(date: NgbDateStruct): Date;
    protected _fromNativeDate(date: Date): NgbDateStruct;
    protected _toNativeDate(date: NgbDateStruct): Date;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateNativeAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDateNativeAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtbmF0aXZlLWFkYXB0ZXIuZC50cyIsInNvdXJjZXMiOlsibmdiLWRhdGUtbmF0aXZlLWFkYXB0ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JEYXRlQWRhcHRlciB9IGZyb20gJy4vbmdiLWRhdGUtYWRhcHRlcic7XG5pbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnLi4vbmdiLWRhdGUtc3RydWN0Jztcbi8qKlxuICogW2BOZ2JEYXRlQWRhcHRlcmBdKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2FwaSNOZ2JEYXRlQWRhcHRlcikgaW1wbGVtZW50YXRpb24gdGhhdCB1c2VzXG4gKiBuYXRpdmUgamF2YXNjcmlwdCBkYXRlcyBhcyBhIHVzZXIgZGF0ZSBtb2RlbC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiRGF0ZU5hdGl2ZUFkYXB0ZXIgZXh0ZW5kcyBOZ2JEYXRlQWRhcHRlcjxEYXRlPiB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBuYXRpdmUgYERhdGVgIHRvIGEgYE5nYkRhdGVTdHJ1Y3RgLlxuICAgICAqL1xuICAgIGZyb21Nb2RlbChkYXRlOiBEYXRlKTogTmdiRGF0ZVN0cnVjdDtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIGBOZ2JEYXRlU3RydWN0YCB0byBhIG5hdGl2ZSBgRGF0ZWAuXG4gICAgICovXG4gICAgdG9Nb2RlbChkYXRlOiBOZ2JEYXRlU3RydWN0KTogRGF0ZTtcbiAgICBwcm90ZWN0ZWQgX2Zyb21OYXRpdmVEYXRlKGRhdGU6IERhdGUpOiBOZ2JEYXRlU3RydWN0O1xuICAgIHByb3RlY3RlZCBfdG9OYXRpdmVEYXRlKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBEYXRlO1xufVxuIl19