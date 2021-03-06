/** Type for the callback used to revert the scrollbar compensation. */
import * as ɵngcc0 from '@angular/core';
export declare type CompensationReverter = () => void;
/**
 * Utility to handle the scrollbar.
 *
 * It allows to compensate the lack of a vertical scrollbar by adding an
 * equivalent padding on the right of the body, and to remove this compensation.
 */
export declare class ScrollBar {
    private _document;
    constructor(_document: any);
    /**
     * To be called right before a potential vertical scrollbar would be removed:
     *
     * - if there was a scrollbar, adds some compensation padding to the body
     * to keep the same layout as when the scrollbar is there
     * - if there was none, there is nothing to do
     *
     * @return a callback used to revert the compensation (noop if there was none,
     * otherwise a function removing the padding)
     */
    compensate(): CompensationReverter;
    /**
     * Adds a padding of the given width on the right of the body.
     *
     * @return a callback used to revert the padding to its previous value
     */
    private _adjustBody;
    /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @return true if scrollbar is present, false otherwise
     */
    private _isPresent;
    /**
     * Calculates and returns the width of a scrollbar.
     *
     * @return the width of a scrollbar on this page
     */
    private _getWidth;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollBar>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ScrollBar>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLmQudHMiLCJzb3VyY2VzIjpbInNjcm9sbGJhci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBUeXBlIGZvciB0aGUgY2FsbGJhY2sgdXNlZCB0byByZXZlcnQgdGhlIHNjcm9sbGJhciBjb21wZW5zYXRpb24uICovXG5leHBvcnQgZGVjbGFyZSB0eXBlIENvbXBlbnNhdGlvblJldmVydGVyID0gKCkgPT4gdm9pZDtcbi8qKlxuICogVXRpbGl0eSB0byBoYW5kbGUgdGhlIHNjcm9sbGJhci5cbiAqXG4gKiBJdCBhbGxvd3MgdG8gY29tcGVuc2F0ZSB0aGUgbGFjayBvZiBhIHZlcnRpY2FsIHNjcm9sbGJhciBieSBhZGRpbmcgYW5cbiAqIGVxdWl2YWxlbnQgcGFkZGluZyBvbiB0aGUgcmlnaHQgb2YgdGhlIGJvZHksIGFuZCB0byByZW1vdmUgdGhpcyBjb21wZW5zYXRpb24uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNjcm9sbEJhciB7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgY29uc3RydWN0b3IoX2RvY3VtZW50OiBhbnkpO1xuICAgIC8qKlxuICAgICAqIFRvIGJlIGNhbGxlZCByaWdodCBiZWZvcmUgYSBwb3RlbnRpYWwgdmVydGljYWwgc2Nyb2xsYmFyIHdvdWxkIGJlIHJlbW92ZWQ6XG4gICAgICpcbiAgICAgKiAtIGlmIHRoZXJlIHdhcyBhIHNjcm9sbGJhciwgYWRkcyBzb21lIGNvbXBlbnNhdGlvbiBwYWRkaW5nIHRvIHRoZSBib2R5XG4gICAgICogdG8ga2VlcCB0aGUgc2FtZSBsYXlvdXQgYXMgd2hlbiB0aGUgc2Nyb2xsYmFyIGlzIHRoZXJlXG4gICAgICogLSBpZiB0aGVyZSB3YXMgbm9uZSwgdGhlcmUgaXMgbm90aGluZyB0byBkb1xuICAgICAqXG4gICAgICogQHJldHVybiBhIGNhbGxiYWNrIHVzZWQgdG8gcmV2ZXJ0IHRoZSBjb21wZW5zYXRpb24gKG5vb3AgaWYgdGhlcmUgd2FzIG5vbmUsXG4gICAgICogb3RoZXJ3aXNlIGEgZnVuY3Rpb24gcmVtb3ZpbmcgdGhlIHBhZGRpbmcpXG4gICAgICovXG4gICAgY29tcGVuc2F0ZSgpOiBDb21wZW5zYXRpb25SZXZlcnRlcjtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcGFkZGluZyBvZiB0aGUgZ2l2ZW4gd2lkdGggb24gdGhlIHJpZ2h0IG9mIHRoZSBib2R5LlxuICAgICAqXG4gICAgICogQHJldHVybiBhIGNhbGxiYWNrIHVzZWQgdG8gcmV2ZXJ0IHRoZSBwYWRkaW5nIHRvIGl0cyBwcmV2aW91cyB2YWx1ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2FkanVzdEJvZHk7XG4gICAgLyoqXG4gICAgICogVGVsbHMgd2hldGhlciBhIHNjcm9sbGJhciBpcyBjdXJyZW50bHkgcHJlc2VudCBvbiB0aGUgYm9keS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gdHJ1ZSBpZiBzY3JvbGxiYXIgaXMgcHJlc2VudCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaXNQcmVzZW50O1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgYW5kIHJldHVybnMgdGhlIHdpZHRoIG9mIGEgc2Nyb2xsYmFyLlxuICAgICAqXG4gICAgICogQHJldHVybiB0aGUgd2lkdGggb2YgYSBzY3JvbGxiYXIgb24gdGhpcyBwYWdlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0V2lkdGg7XG59XG4iXX0=