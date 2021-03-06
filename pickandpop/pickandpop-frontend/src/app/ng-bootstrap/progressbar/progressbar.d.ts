import { NgbProgressbarConfig } from './progressbar-config';
/**
 * A directive that provides feedback on the progress of a workflow or an action.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbProgressbar {
    private _max;
    /**
     * The maximal value to be displayed in the progress bar.
     *
     * Should be a positive number. Will default to 100 otherwise.
     */
    max: number;
    /**
     * If `true`, the stripes on the progress bar are animated.
     *
     * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
     */
    animated: boolean;
    /**
     * If `true`, the progress bars will be displayed as striped.
     */
    striped: boolean;
    /**
     * If `true`, the current percentage will be shown in the `xx%` format.
     */
    showValue: boolean;
    /**
     * Optional text variant type of the progress bar.
     *
     * Supports types based on Bootstrap background color variants, like:
     *  `"success"`, `"info"`, `"warning"`, `"danger"`, `"primary"`, `"secondary"`, `"dark"` and so on.
     *
     * @since 5.2.0
     */
    textType: string;
    /**
     * The type of the progress bar.
     *
     * Supports types based on Bootstrap background color variants, like:
     *  `"success"`, `"info"`, `"warning"`, `"danger"`, `"primary"`, `"secondary"`, `"dark"` and so on.
     */
    type: string;
    /**
     * The current value for the progress bar.
     *
     * Should be in the `[0, max]` range.
     */
    value: number;
    /**
     * The height of the progress bar.
     *
     * Accepts any valid CSS height values, ex. `"2rem"`
     */
    height: string;
    constructor(config: NgbProgressbarConfig);
    getValue(): number;
    getPercentValue(): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbProgressbar>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbProgressbar, "ngb-progressbar", never, {
    "value": "value";
    "max": "max";
    "animated": "animated";
    "striped": "striped";
    "textType": "textType";
    "type": "type";
    "showValue": "showValue";
    "height": "height";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuZC50cyIsInNvdXJjZXMiOlsicHJvZ3Jlc3NiYXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nYlByb2dyZXNzYmFyQ29uZmlnIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci1jb25maWcnO1xuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHByb3ZpZGVzIGZlZWRiYWNrIG9uIHRoZSBwcm9ncmVzcyBvZiBhIHdvcmtmbG93IG9yIGFuIGFjdGlvbi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiUHJvZ3Jlc3NiYXIge1xuICAgIHByaXZhdGUgX21heDtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW1hbCB2YWx1ZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHByb2dyZXNzIGJhci5cbiAgICAgKlxuICAgICAqIFNob3VsZCBiZSBhIHBvc2l0aXZlIG51bWJlci4gV2lsbCBkZWZhdWx0IHRvIDEwMCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgbWF4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgc3RyaXBlcyBvbiB0aGUgcHJvZ3Jlc3MgYmFyIGFyZSBhbmltYXRlZC5cbiAgICAgKlxuICAgICAqIFRha2VzIGVmZmVjdCBvbmx5IGZvciBicm93c2VycyBzdXBwb3J0aW5nIENTUzMgYW5pbWF0aW9ucywgYW5kIGlmIGBzdHJpcGVkYCBpcyBgdHJ1ZWAuXG4gICAgICovXG4gICAgYW5pbWF0ZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgcHJvZ3Jlc3MgYmFycyB3aWxsIGJlIGRpc3BsYXllZCBhcyBzdHJpcGVkLlxuICAgICAqL1xuICAgIHN0cmlwZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgY3VycmVudCBwZXJjZW50YWdlIHdpbGwgYmUgc2hvd24gaW4gdGhlIGB4eCVgIGZvcm1hdC5cbiAgICAgKi9cbiAgICBzaG93VmFsdWU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwgdGV4dCB2YXJpYW50IHR5cGUgb2YgdGhlIHByb2dyZXNzIGJhci5cbiAgICAgKlxuICAgICAqIFN1cHBvcnRzIHR5cGVzIGJhc2VkIG9uIEJvb3RzdHJhcCBiYWNrZ3JvdW5kIGNvbG9yIHZhcmlhbnRzLCBsaWtlOlxuICAgICAqICBgXCJzdWNjZXNzXCJgLCBgXCJpbmZvXCJgLCBgXCJ3YXJuaW5nXCJgLCBgXCJkYW5nZXJcImAsIGBcInByaW1hcnlcImAsIGBcInNlY29uZGFyeVwiYCwgYFwiZGFya1wiYCBhbmQgc28gb24uXG4gICAgICpcbiAgICAgKiBAc2luY2UgNS4yLjBcbiAgICAgKi9cbiAgICB0ZXh0VHlwZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAgICpcbiAgICAgKiBTdXBwb3J0cyB0eXBlcyBiYXNlZCBvbiBCb290c3RyYXAgYmFja2dyb3VuZCBjb2xvciB2YXJpYW50cywgbGlrZTpcbiAgICAgKiAgYFwic3VjY2Vzc1wiYCwgYFwiaW5mb1wiYCwgYFwid2FybmluZ1wiYCwgYFwiZGFuZ2VyXCJgLCBgXCJwcmltYXJ5XCJgLCBgXCJzZWNvbmRhcnlcImAsIGBcImRhcmtcImAgYW5kIHNvIG9uLlxuICAgICAqL1xuICAgIHR5cGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCB2YWx1ZSBmb3IgdGhlIHByb2dyZXNzIGJhci5cbiAgICAgKlxuICAgICAqIFNob3VsZCBiZSBpbiB0aGUgYFswLCBtYXhdYCByYW5nZS5cbiAgICAgKi9cbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHByb2dyZXNzIGJhci5cbiAgICAgKlxuICAgICAqIEFjY2VwdHMgYW55IHZhbGlkIENTUyBoZWlnaHQgdmFsdWVzLCBleC4gYFwiMnJlbVwiYFxuICAgICAqL1xuICAgIGhlaWdodDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogTmdiUHJvZ3Jlc3NiYXJDb25maWcpO1xuICAgIGdldFZhbHVlKCk6IG51bWJlcjtcbiAgICBnZXRQZXJjZW50VmFsdWUoKTogbnVtYmVyO1xufVxuIl19