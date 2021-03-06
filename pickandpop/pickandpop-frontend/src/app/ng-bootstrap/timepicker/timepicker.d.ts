import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgbTime } from './ngb-time';
import { NgbTimepickerConfig } from './timepicker-config';
import { NgbTimeAdapter } from './ngb-time-adapter';
import { NgbTimepickerI18n } from './timepicker-i18n';
/**
 * A directive that helps with wth picking hours, minutes and seconds.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbTimepicker implements ControlValueAccessor, OnChanges {
    private readonly _config;
    private _ngbTimeAdapter;
    private _cd;
    i18n: NgbTimepickerI18n;
    disabled: boolean;
    model: NgbTime;
    private _hourStep;
    private _minuteStep;
    private _secondStep;
    /**
     * Whether to display 12H or 24H mode.
     */
    meridian: boolean;
    /**
     * If `true`, the spinners above and below inputs are visible.
     */
    spinners: boolean;
    /**
     * If `true`, it is possible to select seconds.
     */
    seconds: boolean;
    /**
     * The number of hours to add/subtract when clicking hour spinners.
     */
    hourStep: number;
    /**
     * The number of minutes to add/subtract when clicking minute spinners.
     */
    minuteStep: number;
    /**
     * The number of seconds to add/subtract when clicking second spinners.
     */
    secondStep: number;
    /**
     * If `true`, the timepicker is readonly and can't be changed.
     */
    readonlyInputs: boolean;
    /**
     * The size of inputs and buttons.
     */
    size: 'small' | 'medium' | 'large';
    constructor(_config: NgbTimepickerConfig, _ngbTimeAdapter: NgbTimeAdapter<any>, _cd: ChangeDetectorRef, i18n: NgbTimepickerI18n);
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    changeHour(step: number): void;
    changeMinute(step: number): void;
    changeSecond(step: number): void;
    updateHour(newVal: string): void;
    updateMinute(newVal: string): void;
    updateSecond(newVal: string): void;
    toggleMeridian(): void;
    formatInput(input: HTMLInputElement): void;
    formatHour(value: number): string;
    formatMinSec(value: number): string;
    readonly isSmallSize: boolean;
    readonly isLargeSize: boolean;
    ngOnChanges(changes: SimpleChanges): void;
    private propagateModelChange;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTimepicker>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbTimepicker, "ngb-timepicker", never, {
    "meridian": "meridian";
    "spinners": "spinners";
    "seconds": "seconds";
    "hourStep": "hourStep";
    "minuteStep": "minuteStep";
    "secondStep": "secondStep";
    "readonlyInputs": "readonlyInputs";
    "size": "size";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5kLnRzIiwic291cmNlcyI6WyJ0aW1lcGlja2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYlRpbWUgfSBmcm9tICcuL25nYi10aW1lJztcbmltcG9ydCB7IE5nYlRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuL3RpbWVwaWNrZXItY29uZmlnJztcbmltcG9ydCB7IE5nYlRpbWVBZGFwdGVyIH0gZnJvbSAnLi9uZ2ItdGltZS1hZGFwdGVyJztcbmltcG9ydCB7IE5nYlRpbWVwaWNrZXJJMThuIH0gZnJvbSAnLi90aW1lcGlja2VyLWkxOG4nO1xuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGhlbHBzIHdpdGggd3RoIHBpY2tpbmcgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRpbWVwaWNrZXIgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWc7XG4gICAgcHJpdmF0ZSBfbmdiVGltZUFkYXB0ZXI7XG4gICAgcHJpdmF0ZSBfY2Q7XG4gICAgaTE4bjogTmdiVGltZXBpY2tlckkxOG47XG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgbW9kZWw6IE5nYlRpbWU7XG4gICAgcHJpdmF0ZSBfaG91clN0ZXA7XG4gICAgcHJpdmF0ZSBfbWludXRlU3RlcDtcbiAgICBwcml2YXRlIF9zZWNvbmRTdGVwO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gZGlzcGxheSAxMkggb3IgMjRIIG1vZGUuXG4gICAgICovXG4gICAgbWVyaWRpYW46IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgc3Bpbm5lcnMgYWJvdmUgYW5kIGJlbG93IGlucHV0cyBhcmUgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBzcGlubmVyczogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIGl0IGlzIHBvc3NpYmxlIHRvIHNlbGVjdCBzZWNvbmRzLlxuICAgICAqL1xuICAgIHNlY29uZHM6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBob3VycyB0byBhZGQvc3VidHJhY3Qgd2hlbiBjbGlja2luZyBob3VyIHNwaW5uZXJzLlxuICAgICAqL1xuICAgIGhvdXJTdGVwOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBtaW51dGVzIHRvIGFkZC9zdWJ0cmFjdCB3aGVuIGNsaWNraW5nIG1pbnV0ZSBzcGlubmVycy5cbiAgICAgKi9cbiAgICBtaW51dGVTdGVwOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIGFkZC9zdWJ0cmFjdCB3aGVuIGNsaWNraW5nIHNlY29uZCBzcGlubmVycy5cbiAgICAgKi9cbiAgICBzZWNvbmRTdGVwOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgdGltZXBpY2tlciBpcyByZWFkb25seSBhbmQgY2FuJ3QgYmUgY2hhbmdlZC5cbiAgICAgKi9cbiAgICByZWFkb25seUlucHV0czogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiBpbnB1dHMgYW5kIGJ1dHRvbnMuXG4gICAgICovXG4gICAgc2l6ZTogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcbiAgICBjb25zdHJ1Y3RvcihfY29uZmlnOiBOZ2JUaW1lcGlja2VyQ29uZmlnLCBfbmdiVGltZUFkYXB0ZXI6IE5nYlRpbWVBZGFwdGVyPGFueT4sIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIGkxOG46IE5nYlRpbWVwaWNrZXJJMThuKTtcbiAgICBvbkNoYW5nZTogKF86IGFueSkgPT4gdm9pZDtcbiAgICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZDtcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZDtcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZDtcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICAgIGNoYW5nZUhvdXIoc3RlcDogbnVtYmVyKTogdm9pZDtcbiAgICBjaGFuZ2VNaW51dGUoc3RlcDogbnVtYmVyKTogdm9pZDtcbiAgICBjaGFuZ2VTZWNvbmQoc3RlcDogbnVtYmVyKTogdm9pZDtcbiAgICB1cGRhdGVIb3VyKG5ld1ZhbDogc3RyaW5nKTogdm9pZDtcbiAgICB1cGRhdGVNaW51dGUobmV3VmFsOiBzdHJpbmcpOiB2b2lkO1xuICAgIHVwZGF0ZVNlY29uZChuZXdWYWw6IHN0cmluZyk6IHZvaWQ7XG4gICAgdG9nZ2xlTWVyaWRpYW4oKTogdm9pZDtcbiAgICBmb3JtYXRJbnB1dChpbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQ7XG4gICAgZm9ybWF0SG91cih2YWx1ZTogbnVtYmVyKTogc3RyaW5nO1xuICAgIGZvcm1hdE1pblNlYyh2YWx1ZTogbnVtYmVyKTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGlzU21hbGxTaXplOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGlzTGFyZ2VTaXplOiBib29sZWFuO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHByaXZhdGUgcHJvcGFnYXRlTW9kZWxDaGFuZ2U7XG59XG4iXX0=