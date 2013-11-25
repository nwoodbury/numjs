'use strict';

/**
 * Module containing operations on standalone numbers.
 *
 */

/**
 * Rounds num to precision precision.
 *
 * Example: nnum.Round(3.14159, 2) = 3.14
 *
 * @param num {Number}
 * @param precision {int}
 *
 * @return {Number} num rounded to prec precision.
 */
exports.Round = function(num, precision) {
    // TODO type check prec is integer and num is number
    var scale = Math.pow(10, precision);
    return Math.round(num * scale) / scale;
};
