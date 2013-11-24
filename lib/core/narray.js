'use strict';

/**
 * Module containing operations on narrays.
 *
 * An narray is defined as a native JavaScript array where each element is
 * a JavaScript number.
 */

/*!============================================================================
 * Type Checkers
 *===========================================================================*/

/**
 * Returns true if the array is an narray, false otherwise.
 *
 * @param {any} to_check the variable on which to run the narray check.
 *
 * @return {boolean} true if to_check is an narray, false otherwise.
 */
exports.is_narray = function(to_check) {
    for (var i = 0; i < to_check.length; i++) {
        if (isNaN(to_check[i]) || typeof(to_check[i]) === 'string') {
            return false;
        }
    }
    return true;
};

/*!============================================================================
 * narray creators
 *===========================================================================*/

/**
 * Creates an narray filled with n 0s.
 *
 * <b>Pre:</b> n &ge; 0
 *
 * @param {int} n size of the zero-filled array to return. If n is 0, then an
 * empty array is returned.
 *
 * @return {Array} a JavaScript array containing n zeros. This array is also
 * an narray.
 */
exports.zeros = function(n) {
    return this.sizefill(n, 0);
};

/**
 * Creates an narray filled with n 1s.
 *
 * <b>Pre:</b> n &ge; 0
 *
 * @param {int} n size of the one-filled array to return. If n is zero, then
 * an empty array is returned.
 *
 * @return {Array} a JavaScript array containing n ones. This array is also
 * an narray.
 */
exports.ones = function(n) {
    return this.sizefill(n, 1);
};

/**
 * Creates an narray filled with n copies of value.
 *
 * @param {int} n size of the value-filled array to return. If n is zero,
 * then an empty array is returned.
 * @param {float} value the value with which to fill the new array.
 *
 * <b>Pre:</b> n &ge; 0
 *
 * @return {Array} a JavaScript array containing n copies of value. This array
 * is also an narray.
 */
exports.sizefill = function(n, value) {
    if (isNaN(n) || (n % 1) !== 0) {
        throw new TypeError('Input n must be an integer.');
    }
    if (n < 0) {
        throw new TypeError('Input n must not be negative.');
    }
    if (isNaN(value)) {
        throw new TypeError('Input value must be a number.');
    }
    return Array.apply(null, new Array(n)).map(Number.prototype.valueOf,
                                               value);
};


