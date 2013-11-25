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
exports.IsNarray = function(to_check) {
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
exports.Zeros = function(n) {
    return this.SizeFill(n, 0);
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
exports.Ones = function(n) {
    return this.SizeFill(n, 1);
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
exports.SizeFill = function(n, value) {
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

/*!============================================================================
 * point-wise arithmetic
 *===========================================================================*/

/**
 * Adds the elements, point-wise, of left and right, returning the final
 * result.
 *
 * If the lengths of left and right are not equal and the length of
 * the smallest of left and right is n, then returns the pointwise addition
 * of the first n elements of left and right.
 *
 * @param {Array} left
 * @param {Array} right
 *
 * <b>Pre:</b> left and right are both narrays
 *
 * @return {Array} a JavaScript (narray) where each element i in [0, n),
 * where n is the length of the smallest of left and right, is
 * left[i] + right[i].
 */
exports.PAdd = function(left, right) {
    // TODO type check for narrays

    var n = Math.min(left.length, right.length);
    var result = new Array(n);
    for (var i = 0; i < n; i ++) {
        result[i] = left[i] + right[i];
    }
    return result;
};

/**
 * Subtracts the elements, point-wise, of left and right, returning the final
 * result.
 *
 * If the lengths of left and right are not equal and the length of
 * the smallest of left and right is n, then returns the pointwise subtractiion
 * of the first n elements of left and right.
 *
 * @param {Array} left
 * @param {Array} right
 *
 * <b>Pre:</b> left and right are both narrays
 *
 * @return {Array} a JavaScript (narray) where each element i in [0, n),
 * where n is the length of the smallest of left and right, is
 * left[i] - right[i].
 */
exports.PSub = function(left, right) {
    // TODO type check for narrays

    var n = Math.min(left.length, right.length);
    var result = new Array(n);
    for (var i = 0; i < n; i ++) {
        result[i] = left[i] - right[i];
    }
    return result;
};

/**
 * Multiplies the elements, point-wise, of left and right, returning the final
 * result.
 *
 * If the lengths of left and right are not equal and the length of
 * the smallest of left and right is n, then returns the pointwise
 * multiplication of the first n elements of left and right.
 *
 * @param {Array} left
 * @param {Array} right
 *
 * <b>Pre:</b> left and right are both narrays
 *
 * @return {Array} a JavaScript (narray) where each element i in [0, n),
 * where n is the length of the smallest of left and right, is
 * left[i] * right[i].
 */
exports.PMult = function(left, right) {
    // TODO type check for narrays

    var n = Math.min(left.length, right.length);
    var result = new Array(n);
    for (var i = 0; i < n; i ++) {
        result[i] = left[i] * right[i];
    }
    return result;
};

/**
 * Divides the elements, point-wise, of left and right, returning the final
 * result.
 *
 * If the lengths of left and right are not equal and the length of
 * the smallest of left and right is n, then returns the pointwise
 * multiplication of the first n elements of left and right.
 *
 * Throws an error if a zero is found within the first n elements of right.
 *
 * @param {Array} left
 * @param {Array} right
 *
 * <b>Pre:</b> left and right are both narrays
 *
 * @return {Array} a JavaScript (narray) where each element i in [0, n),
 * where n is the length of the smallest of left and right, is
 * left[i] / right[i].
 */
exports.PDiv = function(left, right) {
    // TODO type check for narrays

    var n = Math.min(left.length, right.length);
    var result = new Array(n);
    for (var i = 0; i < n; i ++) {
        if (right[i] === 0) {
            throw new TypeError('Divide by zero (element ' + i +
                                ' of right)');
        }
        result[i] = left[i] / right[i];
    }
    return result;
};

/*!============================================================================
 * Single array operations
 *===========================================================================*/

/**
 * Sums the elements in arr.
 *
 * @param {Array} arr
 *
 * @return {Number} the sum of the elements in arr.
 */
exports.Sum = function(arr) {
    // TODO type check for narrays
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};

/**
 * Computes the arithmetic mean of arr (sum(arr) / length(arr))
 *
 * @param {Array} arr
 *
 * @return {Number} the arithmetic mean of arr
 */
exports.Mean = function(arr) {
    // TODO type check for narrays
    if (arr.length === 0) {
        return 0;
    }
    return this.Sum(arr) / arr.length;
};

/*!============================================================================
 * Misc.
 *===========================================================================*/

/**
 * Returns a clone of the array.
 *
 * @param {Array} arr the narray to clone.
 *
 * @return {Array} a clone of arr.
 */
exports.Clone = function(arr) {
    // TODO type check for narray
    return arr.slice(0);
};

/**
 * Removes the first n elements from an array, returning the rest of the array.
 *
 * If n is greater than or equal to the length of the array, returns an
 * empty array.
 *
 * @param {Array} arr the array to shift.
 * @param {n} the number of elements to shift off the array.
 *
 * @return {Array} arr with the first n elements removed.
 */
exports.Shift = function(arr, n) {
    // TODO type check for narray
    return arr.slice(n);
};

/*!============================================================================
 * Display
 *===========================================================================*/

/**
 * Returns a string form of the given narray.
 *
 * @param {Array} arr
 *
 * @return {String} the string form of arr in the style of [a1, a2, ...]
 */
exports.Stringify = function(arr) {
    // TODO type check for narray
    return JSON.stringify(arr);
};
