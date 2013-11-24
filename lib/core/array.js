'use strict';

//=============================================================================
//  Array Creation
//=============================================================================

exports.zeros = function(n) {
    return this.sizefill(n, 0);
};

exports.ones = function(n) {
    return this.sizefill(n, 1);
};

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