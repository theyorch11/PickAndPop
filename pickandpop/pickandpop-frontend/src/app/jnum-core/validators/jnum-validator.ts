import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Validators } from "@angular/forms";

function isEmptyInputValue(value: any): boolean {
    return value == null || value.length === 0;
}

const NUMBER_REGEXP = /^[-+]?\d+$/;
const DOUBLE_REGEXP = /[+-]?[0-9]+(\.[0-9]+)?([Ee][+-]?[0-9]+)?/;
const MAIL_REGEXP = /[a-zA-Z0-9._-]+[@]+[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6}/;

export class JnumValidator extends Validators {
    static number(control: AbstractControl) {
        if (isEmptyInputValue(control.value)) {
            return null;
        }
        return NUMBER_REGEXP.test(control.value) ? null : { 'number': true };
    }

    static double(control: AbstractControl) {
        if (isEmptyInputValue(control.value)) {
            return null;
        }
        return DOUBLE_REGEXP.test(control.value) ? null : { 'double': true };
    }

    static mail(control: AbstractControl) {
        if (isEmptyInputValue(control.value)) {
            return null;
        }
        return MAIL_REGEXP.test(control.value) ? null : { 'mail': true };
    }

    static datelessthaneq(dateField1: string, dateField2: string, label1?: string, label2?: string) {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            const date1 = c.get(dateField1).value;
            const date2 = c.get(dateField2).value;

            if ((date1 !== null && date2 !== null) && date1 > date2) {
                c.get(dateField1).setErrors({ "datelessthaneq": { "dateini": label1, "datefin": label2 } });
            } else {
                if (c.get(dateField1).valid) {
                    c.get(dateField1).setErrors(null);
                }
            }
            return null;
        };
    }


    static datelessthan(dateField1: string, dateField2: string, label1?: string, label2?: string) {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            const date1 = c.get(dateField1).value;
            const date2 = c.get(dateField2).value;
            if ((date1 !== null && date2 !== null) && date1 >= date2) {
                c.get(dateField1).setErrors({ "datelessthan": { "dateini": label1, "datefin": label2 } });
            } else {
                if (c.get(dateField1).valid) {
                    c.get(dateField1).setErrors(null);
                }
            }
            return null;
        };
    }



    static lessthaneq(field1: string, field2: string, label1?: string, label2?: string) {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            const value1 = c.get(field1).value;
            const value2 = c.get(field2).value;
            if ((value1 !== null && value2 !== null) && value1 > value2) {
                c.get(field1).setErrors({ "lessthaneq": { "valueini": label1, "valuefin": label2 } });
            } else {
                if (c.get(field1).valid) {
                    c.get(field1).setErrors(null);
                }
            }
            return null;
        };
    }

    static lessthan(field1: string, field2: string, label1?: string, label2?: string) {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            const value1 = c.get(field1).value;
            const value2 = c.get(field2).value;
            if ((value1 !== null && value2 !== null) && value1 >= value2) {
                c.get(field1).setErrors({ "lessthan": { "valueini": label1, "valuefin": label2 } });
            } else {
                if (c.get(field1).valid) {
                    c.get(field1).setErrors(null);
                }
            }
            return null;
        };
    }

}