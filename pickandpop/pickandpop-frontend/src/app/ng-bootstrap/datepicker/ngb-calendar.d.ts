import { NgbDate } from './ngb-date';
import * as ɵngcc0 from '@angular/core';
export declare function fromJSDate(jsDate: Date): NgbDate;
export declare function toJSDate(date: NgbDate): Date;
export declare type NgbPeriod = 'y' | 'm' | 'd';
export declare function NGB_DATEPICKER_CALENDAR_FACTORY(): NgbCalendarGregorian;
/**
 * A service that represents the calendar used by the datepicker.
 *
 * The default implementation uses the Gregorian calendar. You can inject it in your own
 * implementations if necessary to simplify `NgbDate` calculations.
 */
export declare abstract class NgbCalendar {
    /**
     * Returns the number of days per week.
     */
    abstract getDaysPerWeek(): number;
    /**
     * Returns an array of months per year.
     *
     * With default calendar we use ISO 8601 and return [1, 2, ..., 12];
     */
    abstract getMonths(year?: number): number[];
    /**
     * Returns the number of weeks per month.
     */
    abstract getWeeksPerMonth(): number;
    /**
     * Returns the weekday number for a given day.
     *
     * With the default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun
     */
    abstract getWeekday(date: NgbDate): number;
    /**
     * Adds a number of years, months or days to a given date.
     *
     * * `period` can be `y`, `m` or `d` and defaults to day.
     * * `number` defaults to 1.
     *
     * Always returns a new date.
     */
    abstract getNext(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    /**
     * Subtracts a number of years, months or days from a given date.
     *
     * * `period` can be `y`, `m` or `d` and defaults to day.
     * * `number` defaults to 1.
     *
     * Always returns a new date.
     */
    abstract getPrev(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    /**
     * Returns the week number for a given week.
     */
    abstract getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number;
    /**
     * Returns the today's date.
     */
    abstract getToday(): NgbDate;
    /**
     * Checks if a date is valid in the current calendar.
     */
    abstract isValid(date: NgbDate): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCalendar>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbCalendar>;
}
export declare class NgbCalendarGregorian extends NgbCalendar {
    getDaysPerWeek(): number;
    getMonths(): number[];
    getWeeksPerMonth(): number;
    getNext(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getPrev(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getWeekday(date: NgbDate): number;
    getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number;
    getToday(): NgbDate;
    isValid(date: NgbDate): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCalendarGregorian>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbCalendarGregorian>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLmQudHMiLCJzb3VyY2VzIjpbIm5nYi1jYWxlbmRhci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REE7Ozs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nYkRhdGUgfSBmcm9tICcuL25nYi1kYXRlJztcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZyb21KU0RhdGUoanNEYXRlOiBEYXRlKTogTmdiRGF0ZTtcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHRvSlNEYXRlKGRhdGU6IE5nYkRhdGUpOiBEYXRlO1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBOZ2JQZXJpb2QgPSAneScgfCAnbScgfCAnZCc7XG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBOR0JfREFURVBJQ0tFUl9DQUxFTkRBUl9GQUNUT1JZKCk6IE5nYkNhbGVuZGFyR3JlZ29yaWFuO1xuLyoqXG4gKiBBIHNlcnZpY2UgdGhhdCByZXByZXNlbnRzIHRoZSBjYWxlbmRhciB1c2VkIGJ5IHRoZSBkYXRlcGlja2VyLlxuICpcbiAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHVzZXMgdGhlIEdyZWdvcmlhbiBjYWxlbmRhci4gWW91IGNhbiBpbmplY3QgaXQgaW4geW91ciBvd25cbiAqIGltcGxlbWVudGF0aW9ucyBpZiBuZWNlc3NhcnkgdG8gc2ltcGxpZnkgYE5nYkRhdGVgIGNhbGN1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgTmdiQ2FsZW5kYXIge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIHBlciB3ZWVrLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldERheXNQZXJXZWVrKCk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIG1vbnRocyBwZXIgeWVhci5cbiAgICAgKlxuICAgICAqIFdpdGggZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDEgYW5kIHJldHVybiBbMSwgMiwgLi4uLCAxMl07XG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0TW9udGhzKHllYXI/OiBudW1iZXIpOiBudW1iZXJbXTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2Vla3MgcGVyIG1vbnRoLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldFdlZWtzUGVyTW9udGgoKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdlZWtkYXkgbnVtYmVyIGZvciBhIGdpdmVuIGRheS5cbiAgICAgKlxuICAgICAqIFdpdGggdGhlIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnd2Vla2RheScgaXMgMT1Nb24gLi4uIDc9U3VuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0V2Vla2RheShkYXRlOiBOZ2JEYXRlKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBudW1iZXIgb2YgeWVhcnMsIG1vbnRocyBvciBkYXlzIHRvIGEgZ2l2ZW4gZGF0ZS5cbiAgICAgKlxuICAgICAqICogYHBlcmlvZGAgY2FuIGJlIGB5YCwgYG1gIG9yIGBkYCBhbmQgZGVmYXVsdHMgdG8gZGF5LlxuICAgICAqICogYG51bWJlcmAgZGVmYXVsdHMgdG8gMS5cbiAgICAgKlxuICAgICAqIEFsd2F5cyByZXR1cm5zIGEgbmV3IGRhdGUuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0TmV4dChkYXRlOiBOZ2JEYXRlLCBwZXJpb2Q/OiBOZ2JQZXJpb2QsIG51bWJlcj86IG51bWJlcik6IE5nYkRhdGU7XG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIGEgbnVtYmVyIG9mIHllYXJzLCBtb250aHMgb3IgZGF5cyBmcm9tIGEgZ2l2ZW4gZGF0ZS5cbiAgICAgKlxuICAgICAqICogYHBlcmlvZGAgY2FuIGJlIGB5YCwgYG1gIG9yIGBkYCBhbmQgZGVmYXVsdHMgdG8gZGF5LlxuICAgICAqICogYG51bWJlcmAgZGVmYXVsdHMgdG8gMS5cbiAgICAgKlxuICAgICAqIEFsd2F5cyByZXR1cm5zIGEgbmV3IGRhdGUuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0UHJldihkYXRlOiBOZ2JEYXRlLCBwZXJpb2Q/OiBOZ2JQZXJpb2QsIG51bWJlcj86IG51bWJlcik6IE5nYkRhdGU7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd2VlayBudW1iZXIgZm9yIGEgZ2l2ZW4gd2Vlay5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRXZWVrTnVtYmVyKHdlZWs6IHJlYWRvbmx5IE5nYkRhdGVbXSwgZmlyc3REYXlPZldlZWs6IG51bWJlcik6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0b2RheSdzIGRhdGUuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0VG9kYXkoKTogTmdiRGF0ZTtcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYSBkYXRlIGlzIHZhbGlkIGluIHRoZSBjdXJyZW50IGNhbGVuZGFyLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGlzVmFsaWQoZGF0ZTogTmdiRGF0ZSk6IGJvb2xlYW47XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JDYWxlbmRhckdyZWdvcmlhbiBleHRlbmRzIE5nYkNhbGVuZGFyIHtcbiAgICBnZXREYXlzUGVyV2VlaygpOiBudW1iZXI7XG4gICAgZ2V0TW9udGhzKCk6IG51bWJlcltdO1xuICAgIGdldFdlZWtzUGVyTW9udGgoKTogbnVtYmVyO1xuICAgIGdldE5leHQoZGF0ZTogTmdiRGF0ZSwgcGVyaW9kPzogTmdiUGVyaW9kLCBudW1iZXI/OiBudW1iZXIpOiBOZ2JEYXRlO1xuICAgIGdldFByZXYoZGF0ZTogTmdiRGF0ZSwgcGVyaW9kPzogTmdiUGVyaW9kLCBudW1iZXI/OiBudW1iZXIpOiBOZ2JEYXRlO1xuICAgIGdldFdlZWtkYXkoZGF0ZTogTmdiRGF0ZSk6IG51bWJlcjtcbiAgICBnZXRXZWVrTnVtYmVyKHdlZWs6IHJlYWRvbmx5IE5nYkRhdGVbXSwgZmlyc3REYXlPZldlZWs6IG51bWJlcik6IG51bWJlcjtcbiAgICBnZXRUb2RheSgpOiBOZ2JEYXRlO1xuICAgIGlzVmFsaWQoZGF0ZTogTmdiRGF0ZSk6IGJvb2xlYW47XG59XG4iXX0=