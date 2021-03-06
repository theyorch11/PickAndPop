import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDateStruct } from './ngb-date-struct';
import { DatepickerViewModel } from './datepicker-view-model';
import { Observable } from 'rxjs';
import { NgbDatepickerI18n } from './datepicker-i18n';
import * as ɵngcc0 from '@angular/core';
export interface DatepickerServiceInputs extends Partial<Pick<DatepickerViewModel, 'dayTemplateData' | 'displayMonths' | 'disabled' | 'firstDayOfWeek' | 'focusVisible' | 'markDisabled' | 'maxDate' | 'minDate' | 'navigation' | 'outsideDays'>> {
}
export declare class NgbDatepickerService {
    private _calendar;
    private _i18n;
    private _VALIDATORS;
    private _model$;
    private _dateSelect$;
    private _state;
    readonly model$: Observable<DatepickerViewModel>;
    readonly dateSelect$: Observable<NgbDate>;
    set(options: DatepickerServiceInputs): void;
    constructor(_calendar: NgbCalendar, _i18n: NgbDatepickerI18n);
    focus(date: NgbDate): void;
    focusSelect(): void;
    open(date: NgbDate): void;
    select(date: NgbDate, options?: {
        emitEvent?: boolean;
    }): void;
    toValidDate(date: NgbDateStruct, defaultValue?: NgbDate): NgbDate;
    getMonth(struct: NgbDateStruct): import("./datepicker-view-model").MonthViewModel;
    private _nextState;
    private _patchContexts;
    private _updateState;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDatepickerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImRhdGVwaWNrZXItc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdiQ2FsZW5kYXIgfSBmcm9tICcuL25nYi1jYWxlbmRhcic7XG5pbXBvcnQgeyBOZ2JEYXRlIH0gZnJvbSAnLi9uZ2ItZGF0ZSc7XG5pbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlclZpZXdNb2RlbCB9IGZyb20gJy4vZGF0ZXBpY2tlci12aWV3LW1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJJMThuIH0gZnJvbSAnLi9kYXRlcGlja2VyLWkxOG4nO1xuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyU2VydmljZUlucHV0cyBleHRlbmRzIFBhcnRpYWw8UGljazxEYXRlcGlja2VyVmlld01vZGVsLCAnZGF5VGVtcGxhdGVEYXRhJyB8ICdkaXNwbGF5TW9udGhzJyB8ICdkaXNhYmxlZCcgfCAnZmlyc3REYXlPZldlZWsnIHwgJ2ZvY3VzVmlzaWJsZScgfCAnbWFya0Rpc2FibGVkJyB8ICdtYXhEYXRlJyB8ICdtaW5EYXRlJyB8ICduYXZpZ2F0aW9uJyB8ICdvdXRzaWRlRGF5cyc+PiB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JEYXRlcGlja2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfY2FsZW5kYXI7XG4gICAgcHJpdmF0ZSBfaTE4bjtcbiAgICBwcml2YXRlIF9WQUxJREFUT1JTO1xuICAgIHByaXZhdGUgX21vZGVsJDtcbiAgICBwcml2YXRlIF9kYXRlU2VsZWN0JDtcbiAgICBwcml2YXRlIF9zdGF0ZTtcbiAgICByZWFkb25seSBtb2RlbCQ6IE9ic2VydmFibGU8RGF0ZXBpY2tlclZpZXdNb2RlbD47XG4gICAgcmVhZG9ubHkgZGF0ZVNlbGVjdCQ6IE9ic2VydmFibGU8TmdiRGF0ZT47XG4gICAgc2V0KG9wdGlvbnM6IERhdGVwaWNrZXJTZXJ2aWNlSW5wdXRzKTogdm9pZDtcbiAgICBjb25zdHJ1Y3RvcihfY2FsZW5kYXI6IE5nYkNhbGVuZGFyLCBfaTE4bjogTmdiRGF0ZXBpY2tlckkxOG4pO1xuICAgIGZvY3VzKGRhdGU6IE5nYkRhdGUpOiB2b2lkO1xuICAgIGZvY3VzU2VsZWN0KCk6IHZvaWQ7XG4gICAgb3BlbihkYXRlOiBOZ2JEYXRlKTogdm9pZDtcbiAgICBzZWxlY3QoZGF0ZTogTmdiRGF0ZSwgb3B0aW9ucz86IHtcbiAgICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9KTogdm9pZDtcbiAgICB0b1ZhbGlkRGF0ZShkYXRlOiBOZ2JEYXRlU3RydWN0LCBkZWZhdWx0VmFsdWU/OiBOZ2JEYXRlKTogTmdiRGF0ZTtcbiAgICBnZXRNb250aChzdHJ1Y3Q6IE5nYkRhdGVTdHJ1Y3QpOiBpbXBvcnQoXCIuL2RhdGVwaWNrZXItdmlldy1tb2RlbFwiKS5Nb250aFZpZXdNb2RlbDtcbiAgICBwcml2YXRlIF9uZXh0U3RhdGU7XG4gICAgcHJpdmF0ZSBfcGF0Y2hDb250ZXh0cztcbiAgICBwcml2YXRlIF91cGRhdGVTdGF0ZTtcbn1cbiJdfQ==