import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgbButtonLabel } from './label';
/**
 * Allows to easily create Bootstrap-style checkbox buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbCheckBox implements ControlValueAccessor {
    private _label;
    private _cd;
    checked: any;
    /**
     * If `true`, the checkbox button will be disabled
     */
    disabled: boolean;
    /**
     * The form control value when the checkbox is checked.
     */
    valueChecked: boolean;
    /**
     * The form control value when the checkbox is unchecked.
     */
    valueUnChecked: boolean;
    onChange: (_: any) => void;
    onTouched: () => void;
    focused: boolean;
    constructor(_label: NgbButtonLabel, _cd: ChangeDetectorRef);
    onInputChange($event: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCheckBox>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbCheckBox, "[ngbButton][type=checkbox]", never, {
    "disabled": "disabled";
    "valueChecked": "valueChecked";
    "valueUnChecked": "valueUnChecked";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guZC50cyIsInNvdXJjZXMiOlsiY2hlY2tib3guZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiQnV0dG9uTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbi8qKlxuICogQWxsb3dzIHRvIGVhc2lseSBjcmVhdGUgQm9vdHN0cmFwLXN0eWxlIGNoZWNrYm94IGJ1dHRvbnMuXG4gKlxuICogSW50ZWdyYXRlcyB3aXRoIGZvcm1zLCBzbyB0aGUgdmFsdWUgb2YgYSBjaGVja2VkIGJ1dHRvbiBpcyBib3VuZCB0byB0aGUgdW5kZXJseWluZyBmb3JtIGNvbnRyb2xcbiAqIGVpdGhlciBpbiBhIHJlYWN0aXZlIG9yIHRlbXBsYXRlLWRyaXZlbiB3YXkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkNoZWNrQm94IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIHByaXZhdGUgX2xhYmVsO1xuICAgIHByaXZhdGUgX2NkO1xuICAgIGNoZWNrZWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBjaGVja2JveCBidXR0b24gd2lsbCBiZSBkaXNhYmxlZFxuICAgICAqL1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtIGNvbnRyb2wgdmFsdWUgd2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZC5cbiAgICAgKi9cbiAgICB2YWx1ZUNoZWNrZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGZvcm0gY29udHJvbCB2YWx1ZSB3aGVuIHRoZSBjaGVja2JveCBpcyB1bmNoZWNrZWQuXG4gICAgICovXG4gICAgdmFsdWVVbkNoZWNrZWQ6IGJvb2xlYW47XG4gICAgb25DaGFuZ2U6IChfOiBhbnkpID0+IHZvaWQ7XG4gICAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xuICAgIGZvY3VzZWQ6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoX2xhYmVsOiBOZ2JCdXR0b25MYWJlbCwgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgb25JbnB1dENoYW5nZSgkZXZlbnQ6IGFueSk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQ7XG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkO1xufVxuIl19