import { NgbCalendarIslamicCivil } from './ngb-calendar-islamic-civil';
import { NgbDate } from '../ngb-date';
import * as ɵngcc0 from '@angular/core';
export declare class NgbCalendarIslamicUmalqura extends NgbCalendarIslamicCivil {
    /**
    * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
    * `gdate` is s JS Date to be converted to Hijri.
    */
    fromGregorian(gDate: Date): NgbDate;
    /**
    * Converts the current Hijri date to Gregorian.
    */
    toGregorian(hDate: NgbDate): Date;
    /**
    * Returns the number of days in a specific Hijri hMonth.
    * `hMonth` is 1 for Muharram, 2 for Safar, etc.
    * `hYear` is any Hijri hYear.
    */
    getDaysPerMonth(hMonth: number, hYear: number): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCalendarIslamicUmalqura>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbCalendarIslamicUmalqura>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLWlzbGFtaWMtdW1hbHF1cmEuZC50cyIsInNvdXJjZXMiOlsibmdiLWNhbGVuZGFyLWlzbGFtaWMtdW1hbHF1cmEuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nYkNhbGVuZGFySXNsYW1pY0NpdmlsIH0gZnJvbSAnLi9uZ2ItY2FsZW5kYXItaXNsYW1pYy1jaXZpbCc7XG5pbXBvcnQgeyBOZ2JEYXRlIH0gZnJvbSAnLi4vbmdiLWRhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiQ2FsZW5kYXJJc2xhbWljVW1hbHF1cmEgZXh0ZW5kcyBOZ2JDYWxlbmRhcklzbGFtaWNDaXZpbCB7XG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIHRoZSBlcXVpdmFsZW50IGlzbGFtaWMoVW1hbHF1cmEpIGRhdGUgdmFsdWUgZm9yIGEgZ2l2ZSBpbnB1dCBHcmVnb3JpYW4gZGF0ZS5cbiAgICAqIGBnZGF0ZWAgaXMgcyBKUyBEYXRlIHRvIGJlIGNvbnZlcnRlZCB0byBIaWpyaS5cbiAgICAqL1xuICAgIGZyb21HcmVnb3JpYW4oZ0RhdGU6IERhdGUpOiBOZ2JEYXRlO1xuICAgIC8qKlxuICAgICogQ29udmVydHMgdGhlIGN1cnJlbnQgSGlqcmkgZGF0ZSB0byBHcmVnb3JpYW4uXG4gICAgKi9cbiAgICB0b0dyZWdvcmlhbihoRGF0ZTogTmdiRGF0ZSk6IERhdGU7XG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIHNwZWNpZmljIEhpanJpIGhNb250aC5cbiAgICAqIGBoTW9udGhgIGlzIDEgZm9yIE11aGFycmFtLCAyIGZvciBTYWZhciwgZXRjLlxuICAgICogYGhZZWFyYCBpcyBhbnkgSGlqcmkgaFllYXIuXG4gICAgKi9cbiAgICBnZXREYXlzUGVyTW9udGgoaE1vbnRoOiBudW1iZXIsIGhZZWFyOiBudW1iZXIpOiBudW1iZXI7XG59XG4iXX0=