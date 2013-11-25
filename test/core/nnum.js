'use strict';

var nnum = require('../../lib/core/nnum.js');
var assert = require('assert');

describe('nnum', function() {

    describe('#Round(num, prec)', function() {
        it('should round the number to the given precision', function() {
            assert.equal(1, nnum.Round(1.2345, 0),
                         'While checking 0 precision');
            assert.equal(3.14, nnum.Round(3.14159, 2),
                         'While checking non-zero precision');
        });
    });

});
