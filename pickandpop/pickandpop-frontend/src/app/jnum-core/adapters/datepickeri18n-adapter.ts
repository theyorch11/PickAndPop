import { Injectable } from '@angular/core';
import { NgbDatepickerI18n } from '@app/ng-bootstrap';

const I18N_VALUES = {
    es: {
      weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
      months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    }
  };
  

@Injectable()
export class CustomDatePickerI18n extends NgbDatepickerI18n{
    getWeekdayShortName(weekday: number): string {
        return I18N_VALUES['es'].weekdays[weekday - 1];
    }
    getMonthShortName(month: number, year?: number): string {
        return I18N_VALUES['es'].months[month - 1];
    }
    getMonthFullName(month: number, year?: number): string {
        return this.getMonthShortName(month);
    }
    getDayAriaLabel(date: import("../../ng-bootstrap/ng-bootstrap").NgbDateStruct): string {
        return `${date.day}-${date.month}-${date.year}`;
    }

}