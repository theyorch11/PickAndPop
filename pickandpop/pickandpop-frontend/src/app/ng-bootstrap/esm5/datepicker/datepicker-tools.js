/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgbDate } from './ngb-date';
import { isDefined } from '../util/util';
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
export function isChangedDate(prev, next) {
    return !dateComparator(prev, next);
}
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
export function isChangedMonth(prev, next) {
    return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
export function dateComparator(prev, next) {
    return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}
/**
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
export function checkMinBeforeMax(minDate, maxDate) {
    if (maxDate && minDate && maxDate.before(minDate)) {
        throw new Error("'maxDate' " + maxDate + " should be greater than 'minDate' " + minDate);
    }
}
/**
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
export function checkDateInRange(date, minDate, maxDate) {
    if (date && minDate && date.before(minDate)) {
        return minDate;
    }
    if (date && maxDate && date.after(maxDate)) {
        return maxDate;
    }
    return date;
}
/**
 * @param {?} date
 * @param {?} state
 * @return {?}
 */
export function isDateSelectable(date, state) {
    var minDate = state.minDate, maxDate = state.maxDate, disabled = state.disabled, markDisabled = state.markDisabled;
    // clang-format off
    return !(!isDefined(date) ||
        disabled ||
        (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
        (minDate && date.before(minDate)) ||
        (maxDate && date.after(maxDate)));
    // clang-format on
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
export function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    /** @type {?} */
    var months = calendar.getMonths(date.year);
    if (minDate && date.year === minDate.year) {
        /** @type {?} */
        var index = months.findIndex((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return month === minDate.month; }));
        months = months.slice(index);
    }
    if (maxDate && date.year === maxDate.year) {
        /** @type {?} */
        var index = months.findIndex((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return month === maxDate.month; }));
        months = months.slice(0, index + 1);
    }
    return months;
}
/**
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
export function generateSelectBoxYears(date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    /** @type {?} */
    var start = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
    /** @type {?} */
    var end = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
    /** @type {?} */
    var length = end - start + 1;
    /** @type {?} */
    var numbers = Array(length);
    for (var i = 0; i < length; i++) {
        numbers[i] = start + i;
    }
    return numbers;
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} maxDate
 * @return {?}
 */
export function nextMonthDisabled(calendar, date, maxDate) {
    /** @type {?} */
    var nextDate = Object.assign(calendar.getNext(date, 'm'), { day: 1 });
    return maxDate && nextDate.after(maxDate);
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} minDate
 * @return {?}
 */
export function prevMonthDisabled(calendar, date, minDate) {
    /** @type {?} */
    var prevDate = Object.assign(calendar.getPrev(date, 'm'), { day: 1 });
    return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
        prevDate.year < minDate.year && minDate.month === 1);
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} state
 * @param {?} i18n
 * @param {?} force
 * @return {?}
 */
export function buildMonths(calendar, date, state, i18n, force) {
    var displayMonths = state.displayMonths, months = state.months;
    // move old months to a temporary array
    /** @type {?} */
    var monthsToReuse = months.splice(0, months.length);
    // generate new first dates, nullify or reuse months
    /** @type {?} */
    var firstDates = Array.from({ length: displayMonths }, (/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    function (_, i) {
        /** @type {?} */
        var firstDate = Object.assign(calendar.getNext(date, 'm', i), { day: 1 });
        months[i] = null;
        if (!force) {
            /** @type {?} */
            var reusedIndex = monthsToReuse.findIndex((/**
             * @param {?} month
             * @return {?}
             */
            function (month) { return month.firstDate.equals(firstDate); }));
            // move reused month back to months
            if (reusedIndex !== -1) {
                months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
            }
        }
        return firstDate;
    }));
    // rebuild nullified months
    firstDates.forEach((/**
     * @param {?} firstDate
     * @param {?} i
     * @return {?}
     */
    function (firstDate, i) {
        if (months[i] === null) {
            months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || (/** @type {?} */ ({})));
        }
    }));
    return months;
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} state
 * @param {?} i18n
 * @param {?=} month
 * @return {?}
 */
export function buildMonth(calendar, date, state, i18n, month) {
    if (month === void 0) { month = (/** @type {?} */ ({})); }
    var dayTemplateData = state.dayTemplateData, minDate = state.minDate, maxDate = state.maxDate, firstDayOfWeek = state.firstDayOfWeek, markDisabled = state.markDisabled, outsideDays = state.outsideDays;
    /** @type {?} */
    var calendarToday = calendar.getToday();
    month.firstDate = null;
    month.lastDate = null;
    month.number = date.month;
    month.year = date.year;
    month.weeks = month.weeks || [];
    month.weekdays = month.weekdays || [];
    date = getFirstViewDate(calendar, date, firstDayOfWeek);
    // month has weeks
    for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
        /** @type {?} */
        var weekObject = month.weeks[week];
        if (!weekObject) {
            weekObject = month.weeks[week] = { number: 0, days: [], collapsed: true };
        }
        /** @type {?} */
        var days = weekObject.days;
        // week has days
        for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
            if (week === 0) {
                month.weekdays[day] = calendar.getWeekday(date);
            }
            /** @type {?} */
            var newDate = new NgbDate(date.year, date.month, date.day);
            /** @type {?} */
            var nextDate = calendar.getNext(newDate);
            /** @type {?} */
            var ariaLabel = i18n.getDayAriaLabel(newDate);
            // marking date as disabled
            /** @type {?} */
            var disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
            if (!disabled && markDisabled) {
                disabled = markDisabled(newDate, { month: month.number, year: month.year });
            }
            // today
            /** @type {?} */
            var today = newDate.equals(calendarToday);
            // adding user-provided data to the context
            /** @type {?} */
            var contextUserData = dayTemplateData ? dayTemplateData(newDate, { month: month.number, year: month.year }) : undefined;
            // saving first date of the month
            if (month.firstDate === null && newDate.month === month.number) {
                month.firstDate = newDate;
            }
            // saving last date of the month
            if (newDate.month === month.number && nextDate.month !== month.number) {
                month.lastDate = newDate;
            }
            /** @type {?} */
            var dayObject = days[day];
            if (!dayObject) {
                dayObject = days[day] = (/** @type {?} */ ({}));
            }
            dayObject.date = newDate;
            dayObject.context = Object.assign(dayObject.context || {}, {
                $implicit: newDate,
                date: newDate,
                data: contextUserData,
                currentMonth: month.number,
                currentYear: month.year, disabled: disabled,
                focused: false,
                selected: false, today: today
            });
            dayObject.tabindex = -1;
            dayObject.ariaLabel = ariaLabel;
            dayObject.hidden = false;
            date = nextDate;
        }
        weekObject.number = calendar.getWeekNumber(days.map((/**
         * @param {?} day
         * @return {?}
         */
        function (day) { return day.date; })), firstDayOfWeek);
        // marking week as collapsed
        weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number &&
            days[days.length - 1].date.month !== month.number;
    }
    return month;
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} firstDayOfWeek
 * @return {?}
 */
export function getFirstViewDate(calendar, date, firstDayOfWeek) {
    /** @type {?} */
    var daysPerWeek = calendar.getDaysPerWeek();
    /** @type {?} */
    var firstMonthDate = new NgbDate(date.year, date.month, 1);
    /** @type {?} */
    var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
    return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci10b29scy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci9kYXRlcGlja2VyLXRvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBR25DLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7Ozs7OztBQUd2QyxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQWEsRUFBRSxJQUFhO0lBQ3hELE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JDLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsSUFBYSxFQUFFLElBQWE7SUFDekQsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQy9HLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsSUFBYSxFQUFFLElBQWE7SUFDekQsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxPQUFnQixFQUFFLE9BQWdCO0lBQ2xFLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMs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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ2JEYXRlfSBmcm9tICcuL25nYi1kYXRlJztcbmltcG9ydCB7RGF0ZXBpY2tlclZpZXdNb2RlbCwgRGF5Vmlld01vZGVsLCBNb250aFZpZXdNb2RlbH0gZnJvbSAnLi9kYXRlcGlja2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0IHtOZ2JDYWxlbmRhcn0gZnJvbSAnLi9uZ2ItY2FsZW5kYXInO1xuaW1wb3J0IHtpc0RlZmluZWR9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQge05nYkRhdGVwaWNrZXJJMThufSBmcm9tICcuL2RhdGVwaWNrZXItaTE4bic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NoYW5nZWREYXRlKHByZXY6IE5nYkRhdGUsIG5leHQ6IE5nYkRhdGUpIHtcbiAgcmV0dXJuICFkYXRlQ29tcGFyYXRvcihwcmV2LCBuZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hhbmdlZE1vbnRoKHByZXY6IE5nYkRhdGUsIG5leHQ6IE5nYkRhdGUpIHtcbiAgcmV0dXJuICFwcmV2ICYmICFuZXh0ID8gZmFsc2UgOiAhcHJldiB8fCAhbmV4dCA/IHRydWUgOiBwcmV2LnllYXIgIT09IG5leHQueWVhciB8fCBwcmV2Lm1vbnRoICE9PSBuZXh0Lm1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0ZUNvbXBhcmF0b3IocHJldjogTmdiRGF0ZSwgbmV4dDogTmdiRGF0ZSkge1xuICByZXR1cm4gKCFwcmV2ICYmICFuZXh0KSB8fCAoISFwcmV2ICYmICEhbmV4dCAmJiBwcmV2LmVxdWFscyhuZXh0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja01pbkJlZm9yZU1heChtaW5EYXRlOiBOZ2JEYXRlLCBtYXhEYXRlOiBOZ2JEYXRlKSB7XG4gIGlmIChtYXhEYXRlICYmIG1pbkRhdGUgJiYgbWF4RGF0ZS5iZWZvcmUobWluRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCdtYXhEYXRlJyAke21heERhdGV9IHNob3VsZCBiZSBncmVhdGVyIHRoYW4gJ21pbkRhdGUnICR7bWluRGF0ZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEYXRlSW5SYW5nZShkYXRlOiBOZ2JEYXRlLCBtaW5EYXRlOiBOZ2JEYXRlLCBtYXhEYXRlOiBOZ2JEYXRlKTogTmdiRGF0ZSB7XG4gIGlmIChkYXRlICYmIG1pbkRhdGUgJiYgZGF0ZS5iZWZvcmUobWluRGF0ZSkpIHtcbiAgICByZXR1cm4gbWluRGF0ZTtcbiAgfVxuICBpZiAoZGF0ZSAmJiBtYXhEYXRlICYmIGRhdGUuYWZ0ZXIobWF4RGF0ZSkpIHtcbiAgICByZXR1cm4gbWF4RGF0ZTtcbiAgfVxuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlU2VsZWN0YWJsZShkYXRlOiBOZ2JEYXRlLCBzdGF0ZTogRGF0ZXBpY2tlclZpZXdNb2RlbCkge1xuICBjb25zdCB7bWluRGF0ZSwgbWF4RGF0ZSwgZGlzYWJsZWQsIG1hcmtEaXNhYmxlZH0gPSBzdGF0ZTtcbiAgLy8gY2xhbmctZm9ybWF0IG9mZlxuICByZXR1cm4gIShcbiAgICAhaXNEZWZpbmVkKGRhdGUpIHx8XG4gICAgZGlzYWJsZWQgfHxcbiAgICAobWFya0Rpc2FibGVkICYmIG1hcmtEaXNhYmxlZChkYXRlLCB7eWVhcjogZGF0ZS55ZWFyLCBtb250aDogZGF0ZS5tb250aH0pKSB8fFxuICAgIChtaW5EYXRlICYmIGRhdGUuYmVmb3JlKG1pbkRhdGUpKSB8fFxuICAgIChtYXhEYXRlICYmIGRhdGUuYWZ0ZXIobWF4RGF0ZSkpXG4gICk7XG4gIC8vIGNsYW5nLWZvcm1hdCBvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTZWxlY3RCb3hNb250aHMoY2FsZW5kYXI6IE5nYkNhbGVuZGFyLCBkYXRlOiBOZ2JEYXRlLCBtaW5EYXRlOiBOZ2JEYXRlLCBtYXhEYXRlOiBOZ2JEYXRlKSB7XG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGxldCBtb250aHMgPSBjYWxlbmRhci5nZXRNb250aHMoZGF0ZS55ZWFyKTtcblxuICBpZiAobWluRGF0ZSAmJiBkYXRlLnllYXIgPT09IG1pbkRhdGUueWVhcikge1xuICAgIGNvbnN0IGluZGV4ID0gbW9udGhzLmZpbmRJbmRleChtb250aCA9PiBtb250aCA9PT0gbWluRGF0ZS5tb250aCk7XG4gICAgbW9udGhzID0gbW9udGhzLnNsaWNlKGluZGV4KTtcbiAgfVxuXG4gIGlmIChtYXhEYXRlICYmIGRhdGUueWVhciA9PT0gbWF4RGF0ZS55ZWFyKSB7XG4gICAgY29uc3QgaW5kZXggPSBtb250aHMuZmluZEluZGV4KG1vbnRoID0+IG1vbnRoID09PSBtYXhEYXRlLm1vbnRoKTtcbiAgICBtb250aHMgPSBtb250aHMuc2xpY2UoMCwgaW5kZXggKyAxKTtcbiAgfVxuXG4gIHJldHVybiBtb250aHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNlbGVjdEJveFllYXJzKGRhdGU6IE5nYkRhdGUsIG1pbkRhdGU6IE5nYkRhdGUsIG1heERhdGU6IE5nYkRhdGUpIHtcbiAgaWYgKCFkYXRlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3Qgc3RhcnQgPSBtaW5EYXRlID8gTWF0aC5tYXgobWluRGF0ZS55ZWFyLCBkYXRlLnllYXIgLSA1MDApIDogZGF0ZS55ZWFyIC0gMTA7XG4gIGNvbnN0IGVuZCA9IG1heERhdGUgPyBNYXRoLm1pbihtYXhEYXRlLnllYXIsIGRhdGUueWVhciArIDUwMCkgOiBkYXRlLnllYXIgKyAxMDtcblxuICBjb25zdCBsZW5ndGggPSBlbmQgLSBzdGFydCArIDE7XG4gIGNvbnN0IG51bWJlcnMgPSBBcnJheShsZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbnVtYmVyc1tpXSA9IHN0YXJ0ICsgaTtcbiAgfVxuXG4gIHJldHVybiBudW1iZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dE1vbnRoRGlzYWJsZWQoY2FsZW5kYXI6IE5nYkNhbGVuZGFyLCBkYXRlOiBOZ2JEYXRlLCBtYXhEYXRlOiBOZ2JEYXRlKSB7XG4gIGNvbnN0IG5leHREYXRlID0gT2JqZWN0LmFzc2lnbihjYWxlbmRhci5nZXROZXh0KGRhdGUsICdtJyksIHtkYXk6IDF9KTtcbiAgcmV0dXJuIG1heERhdGUgJiYgbmV4dERhdGUuYWZ0ZXIobWF4RGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2TW9udGhEaXNhYmxlZChjYWxlbmRhcjogTmdiQ2FsZW5kYXIsIGRhdGU6IE5nYkRhdGUsIG1pbkRhdGU6IE5nYkRhdGUpIHtcbiAgY29uc3QgcHJldkRhdGUgPSBPYmplY3QuYXNzaWduKGNhbGVuZGFyLmdldFByZXYoZGF0ZSwgJ20nKSwge2RheTogMX0pO1xuICByZXR1cm4gbWluRGF0ZSAmJiAocHJldkRhdGUueWVhciA9PT0gbWluRGF0ZS55ZWFyICYmIHByZXZEYXRlLm1vbnRoIDwgbWluRGF0ZS5tb250aCB8fFxuICAgICAgICAgICAgICAgICAgICAgcHJldkRhdGUueWVhciA8IG1pbkRhdGUueWVhciAmJiBtaW5EYXRlLm1vbnRoID09PSAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTW9udGhzKFxuICAgIGNhbGVuZGFyOiBOZ2JDYWxlbmRhciwgZGF0ZTogTmdiRGF0ZSwgc3RhdGU6IERhdGVwaWNrZXJWaWV3TW9kZWwsIGkxOG46IE5nYkRhdGVwaWNrZXJJMThuLFxuICAgIGZvcmNlOiBib29sZWFuKTogTW9udGhWaWV3TW9kZWxbXSB7XG4gIGNvbnN0IHtkaXNwbGF5TW9udGhzLCBtb250aHN9ID0gc3RhdGU7XG4gIC8vIG1vdmUgb2xkIG1vbnRocyB0byBhIHRlbXBvcmFyeSBhcnJheVxuICBjb25zdCBtb250aHNUb1JldXNlID0gbW9udGhzLnNwbGljZSgwLCBtb250aHMubGVuZ3RoKTtcblxuICAvLyBnZW5lcmF0ZSBuZXcgZmlyc3QgZGF0ZXMsIG51bGxpZnkgb3IgcmV1c2UgbW9udGhzXG4gIGNvbnN0IGZpcnN0RGF0ZXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IGRpc3BsYXlNb250aHN9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IGZpcnN0RGF0ZSA9IE9iamVjdC5hc3NpZ24oY2FsZW5kYXIuZ2V0TmV4dChkYXRlLCAnbScsIGkpLCB7ZGF5OiAxfSk7XG4gICAgbW9udGhzW2ldID0gbnVsbDtcblxuICAgIGlmICghZm9yY2UpIHtcbiAgICAgIGNvbnN0IHJldXNlZEluZGV4ID0gbW9udGhzVG9SZXVzZS5maW5kSW5kZXgobW9udGggPT4gbW9udGguZmlyc3REYXRlLmVxdWFscyhmaXJzdERhdGUpKTtcbiAgICAgIC8vIG1vdmUgcmV1c2VkIG1vbnRoIGJhY2sgdG8gbW9udGhzXG4gICAgICBpZiAocmV1c2VkSW5kZXggIT09IC0xKSB7XG4gICAgICAgIG1vbnRoc1tpXSA9IG1vbnRoc1RvUmV1c2Uuc3BsaWNlKHJldXNlZEluZGV4LCAxKVswXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3REYXRlO1xuICB9KTtcblxuICAvLyByZWJ1aWxkIG51bGxpZmllZCBtb250aHNcbiAgZmlyc3REYXRlcy5mb3JFYWNoKChmaXJzdERhdGUsIGkpID0+IHtcbiAgICBpZiAobW9udGhzW2ldID09PSBudWxsKSB7XG4gICAgICBtb250aHNbaV0gPSBidWlsZE1vbnRoKGNhbGVuZGFyLCBmaXJzdERhdGUsIHN0YXRlLCBpMThuLCBtb250aHNUb1JldXNlLnNoaWZ0KCkgfHwge30gYXMgTW9udGhWaWV3TW9kZWwpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1vbnRocztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTW9udGgoXG4gICAgY2FsZW5kYXI6IE5nYkNhbGVuZGFyLCBkYXRlOiBOZ2JEYXRlLCBzdGF0ZTogRGF0ZXBpY2tlclZpZXdNb2RlbCwgaTE4bjogTmdiRGF0ZXBpY2tlckkxOG4sXG4gICAgbW9udGg6IE1vbnRoVmlld01vZGVsID0ge30gYXMgTW9udGhWaWV3TW9kZWwpOiBNb250aFZpZXdNb2RlbCB7XG4gIGNvbnN0IHtkYXlUZW1wbGF0ZURhdGEsIG1pbkRhdGUsIG1heERhdGUsIGZpcnN0RGF5T2ZXZWVrLCBtYXJrRGlzYWJsZWQsIG91dHNpZGVEYXlzfSA9IHN0YXRlO1xuICBjb25zdCBjYWxlbmRhclRvZGF5ID0gY2FsZW5kYXIuZ2V0VG9kYXkoKTtcblxuICBtb250aC5maXJzdERhdGUgPSBudWxsO1xuICBtb250aC5sYXN0RGF0ZSA9IG51bGw7XG4gIG1vbnRoLm51bWJlciA9IGRhdGUubW9udGg7XG4gIG1vbnRoLnllYXIgPSBkYXRlLnllYXI7XG4gIG1vbnRoLndlZWtzID0gbW9udGgud2Vla3MgfHwgW107XG4gIG1vbnRoLndlZWtkYXlzID0gbW9udGgud2Vla2RheXMgfHwgW107XG5cbiAgZGF0ZSA9IGdldEZpcnN0Vmlld0RhdGUoY2FsZW5kYXIsIGRhdGUsIGZpcnN0RGF5T2ZXZWVrKTtcblxuICAvLyBtb250aCBoYXMgd2Vla3NcbiAgZm9yIChsZXQgd2VlayA9IDA7IHdlZWsgPCBjYWxlbmRhci5nZXRXZWVrc1Blck1vbnRoKCk7IHdlZWsrKykge1xuICAgIGxldCB3ZWVrT2JqZWN0ID0gbW9udGgud2Vla3Nbd2Vla107XG4gICAgaWYgKCF3ZWVrT2JqZWN0KSB7XG4gICAgICB3ZWVrT2JqZWN0ID0gbW9udGgud2Vla3Nbd2Vla10gPSB7bnVtYmVyOiAwLCBkYXlzOiBbXSwgY29sbGFwc2VkOiB0cnVlfTtcbiAgICB9XG4gICAgY29uc3QgZGF5cyA9IHdlZWtPYmplY3QuZGF5cztcblxuICAgIC8vIHdlZWsgaGFzIGRheXNcbiAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCBjYWxlbmRhci5nZXREYXlzUGVyV2VlaygpOyBkYXkrKykge1xuICAgICAgaWYgKHdlZWsgPT09IDApIHtcbiAgICAgICAgbW9udGgud2Vla2RheXNbZGF5XSA9IGNhbGVuZGFyLmdldFdlZWtkYXkoZGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgTmdiRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KTtcbiAgICAgIGNvbnN0IG5leHREYXRlID0gY2FsZW5kYXIuZ2V0TmV4dChuZXdEYXRlKTtcblxuICAgICAgY29uc3QgYXJpYUxhYmVsID0gaTE4bi5nZXREYXlBcmlhTGFiZWwobmV3RGF0ZSk7XG5cbiAgICAgIC8vIG1hcmtpbmcgZGF0ZSBhcyBkaXNhYmxlZFxuICAgICAgbGV0IGRpc2FibGVkID0gISEoKG1pbkRhdGUgJiYgbmV3RGF0ZS5iZWZvcmUobWluRGF0ZSkpIHx8IChtYXhEYXRlICYmIG5ld0RhdGUuYWZ0ZXIobWF4RGF0ZSkpKTtcbiAgICAgIGlmICghZGlzYWJsZWQgJiYgbWFya0Rpc2FibGVkKSB7XG4gICAgICAgIGRpc2FibGVkID0gbWFya0Rpc2FibGVkKG5ld0RhdGUsIHttb250aDogbW9udGgubnVtYmVyLCB5ZWFyOiBtb250aC55ZWFyfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHRvZGF5XG4gICAgICBsZXQgdG9kYXkgPSBuZXdEYXRlLmVxdWFscyhjYWxlbmRhclRvZGF5KTtcblxuICAgICAgLy8gYWRkaW5nIHVzZXItcHJvdmlkZWQgZGF0YSB0byB0aGUgY29udGV4dFxuICAgICAgbGV0IGNvbnRleHRVc2VyRGF0YSA9XG4gICAgICAgICAgZGF5VGVtcGxhdGVEYXRhID8gZGF5VGVtcGxhdGVEYXRhKG5ld0RhdGUsIHttb250aDogbW9udGgubnVtYmVyLCB5ZWFyOiBtb250aC55ZWFyfSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIHNhdmluZyBmaXJzdCBkYXRlIG9mIHRoZSBtb250aFxuICAgICAgaWYgKG1vbnRoLmZpcnN0RGF0ZSA9PT0gbnVsbCAmJiBuZXdEYXRlLm1vbnRoID09PSBtb250aC5udW1iZXIpIHtcbiAgICAgICAgbW9udGguZmlyc3REYXRlID0gbmV3RGF0ZTtcbiAgICAgIH1cblxuICAgICAgLy8gc2F2aW5nIGxhc3QgZGF0ZSBvZiB0aGUgbW9udGhcbiAgICAgIGlmIChuZXdEYXRlLm1vbnRoID09PSBtb250aC5udW1iZXIgJiYgbmV4dERhdGUubW9udGggIT09IG1vbnRoLm51bWJlcikge1xuICAgICAgICBtb250aC5sYXN0RGF0ZSA9IG5ld0RhdGU7XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXlPYmplY3QgPSBkYXlzW2RheV07XG4gICAgICBpZiAoIWRheU9iamVjdCkge1xuICAgICAgICBkYXlPYmplY3QgPSBkYXlzW2RheV0gPSB7fSBhcyBEYXlWaWV3TW9kZWw7XG4gICAgICB9XG4gICAgICBkYXlPYmplY3QuZGF0ZSA9IG5ld0RhdGU7XG4gICAgICBkYXlPYmplY3QuY29udGV4dCA9IE9iamVjdC5hc3NpZ24oZGF5T2JqZWN0LmNvbnRleHQgfHwge30sIHtcbiAgICAgICAgJGltcGxpY2l0OiBuZXdEYXRlLFxuICAgICAgICBkYXRlOiBuZXdEYXRlLFxuICAgICAgICBkYXRhOiBjb250ZXh0VXNlckRhdGEsXG4gICAgICAgIGN1cnJlbnRNb250aDogbW9udGgubnVtYmVyLFxuICAgICAgICBjdXJyZW50WWVhcjogbW9udGgueWVhciwgZGlzYWJsZWQsXG4gICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsIHRvZGF5XG4gICAgICB9KTtcbiAgICAgIGRheU9iamVjdC50YWJpbmRleCA9IC0xO1xuICAgICAgZGF5T2JqZWN0LmFyaWFMYWJlbCA9IGFyaWFMYWJlbDtcbiAgICAgIGRheU9iamVjdC5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgZGF0ZSA9IG5leHREYXRlO1xuICAgIH1cblxuICAgIHdlZWtPYmplY3QubnVtYmVyID0gY2FsZW5kYXIuZ2V0V2Vla051bWJlcihkYXlzLm1hcChkYXkgPT4gZGF5LmRhdGUpLCBmaXJzdERheU9mV2Vlayk7XG5cbiAgICAvLyBtYXJraW5nIHdlZWsgYXMgY29sbGFwc2VkXG4gICAgd2Vla09iamVjdC5jb2xsYXBzZWQgPSBvdXRzaWRlRGF5cyA9PT0gJ2NvbGxhcHNlZCcgJiYgZGF5c1swXS5kYXRlLm1vbnRoICE9PSBtb250aC5udW1iZXIgJiZcbiAgICAgICAgZGF5c1tkYXlzLmxlbmd0aCAtIDFdLmRhdGUubW9udGggIT09IG1vbnRoLm51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBtb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0Vmlld0RhdGUoY2FsZW5kYXI6IE5nYkNhbGVuZGFyLCBkYXRlOiBOZ2JEYXRlLCBmaXJzdERheU9mV2VlazogbnVtYmVyKTogTmdiRGF0ZSB7XG4gIGNvbnN0IGRheXNQZXJXZWVrID0gY2FsZW5kYXIuZ2V0RGF5c1BlcldlZWsoKTtcbiAgY29uc3QgZmlyc3RNb250aERhdGUgPSBuZXcgTmdiRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIDEpO1xuICBjb25zdCBkYXlPZldlZWsgPSBjYWxlbmRhci5nZXRXZWVrZGF5KGZpcnN0TW9udGhEYXRlKSAlIGRheXNQZXJXZWVrO1xuICByZXR1cm4gY2FsZW5kYXIuZ2V0UHJldihmaXJzdE1vbnRoRGF0ZSwgJ2QnLCAoZGF5c1BlcldlZWsgKyBkYXlPZldlZWsgLSBmaXJzdERheU9mV2VlaykgJSBkYXlzUGVyV2Vlayk7XG59XG4iXX0=