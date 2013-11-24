'use strict';

var narray = require('../../lib/core/narray.js');
var assert = require('assert');
//var should = require('should');

describe('narray', function() {

    //=========================================================================
    //  narray creation
    //=========================================================================

    describe('#zeros(n)', function() {

        // Proper execution
        it('should create an array consisting of n 0s', function() {
            assert.deepEqual([0, 0, 0, 0, 0], narray.zeros(5),
                             'While checking zeros of size 5.');
            assert.deepEqual([], narray.zeros(0),
                             'While checking zeros of size 0.');
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {narray.zeros(-1);}, TypeError,
                          'While checking negative size.');
            assert.throws(function() {narray.zeros('a');}, TypeError,
                          'While checking non-numeric size.');
            assert.throws(function() {narray.zeros(2.4);}, TypeError,
                          'While checking non-integer size.');
        });
    });

    describe('#ones(n)', function() {

        // Proper execution
        it('should create an array consisting of n 1s', function() {
            assert.deepEqual([1, 1, 1, 1], narray.ones(4),
                             'While checking ones of size 4.');
            assert.deepEqual([], narray.ones(0),
                             'While checking ones of size 0.');
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {narray.ones(-1);}, TypeError,
                          'While checking negative size.');
            assert.throws(function() {narray.ones('a');}, TypeError,
                          'While checking non-numeric size.');
            assert.throws(function() {narray.ones(2.4);}, TypeError,
                          'While checking non-integer size.');
        });
    });

    describe('#sizefill(n, value)', function() {

        // Proper execution
        it('should create an array consisting of n copies of value',
           function() {
            assert.deepEqual([1, 1, 1], narray.sizefill(3, 1),
                             'While checking size fill of size 3, value 1.');
            assert.deepEqual([], narray.ones(0, 921),
                             'While checking size fill of size 0, arbitrary value.');
            assert.deepEqual([2.2, 2.2, 2.2, 2.2], narray.sizefill(4, 2.2),
                             'While checking size fill of size 4, float value.');
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {narray.sizefill(-1, 3);}, TypeError,
                          'While checking negative size.');
            assert.throws(function() {narray.sizefill('a', 4);}, TypeError,
                          'While checking non-numeric size.');
            assert.throws(function() {narray.sizefill(2.4, 78);}, TypeError,
                          'While checking non-integer size.');

            assert.throws(function() {narray.sizefill(3, 'a');}, TypeError,
                          'While checking non-numeric value.');
        });
    });

    //=========================================================================
    //  narray type checking
    //=========================================================================

    describe('#is_narray(to_check)', function() {

        // Proper narrays
        it('should return true for proper narrays', function() {
            assert.equal(true, narray.is_narray([1, 2, 3, 4]),
                         'While checking integer array.');
            assert.equal(true, narray.is_narray([-0.2, -5, 2789, 0.2222, 0]),
                         'While checking numeric array (integer, float,' +
                         ' negative, 0).');
            assert.equal(true, narray.is_narray([]),
                         'While checking empty array.');
        });

        // non narrays
        it('should return false for arrays that are not narrays', function() {
            assert.equal(false, narray.is_narray(['a', 'b', 'c']),
                         'While checking non-numeric strings.');
            assert.equal(false, narray.is_narray([1, 2, 'a']),
                         'While checking mixed, string at last index.');
            assert.equal(false, narray.is_narray([1, 'a', 2]),
                         'While checking mixed, string in middle index.');
            assert.equal(false, narray.is_narray(['a', 1, 2]),
                         'While checking mixed array, string in first index.');
            assert.equal(false, narray.is_narray(['1', '2.2']),
                         'While checking numeric strings.');
            assert.equal(false, narray.is_narray([{'a':  1.2}]),
                         'While checking array of objects.');
            assert.equal(false, narray.is_narray([[1, 2, 3], [2, 3, 4]]),
                         'While checking array of arrays.');
        });
    });
});
