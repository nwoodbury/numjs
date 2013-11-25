'use strict';

var narray = require('../../lib/core/narray.js');
var assert = require('assert');
//var should = require('should');

describe('narray', function() {

    //=========================================================================
    //  narray creation
    //=========================================================================

    describe('#Zeros(n)', function() {

        // Proper execution
        it('should create an array consisting of n 0s', function() {
            assert.deepEqual([0, 0, 0, 0, 0], narray.Zeros(5),
                             'While checking Zeros of size 5.');
            assert.deepEqual([], narray.Zeros(0),
                             'While checking Zeros of size 0.');
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {narray.Zeros(-1);}, TypeError,
                          'While checking negative size.');
            assert.throws(function() {narray.Zeros('a');}, TypeError,
                          'While checking non-numeric size.');
            assert.throws(function() {narray.Zeros(2.4);}, TypeError,
                          'While checking non-integer size.');
        });
    });

    describe('#Ones(n)', function() {

        // Proper execution
        it('should create an array consisting of n 1s', function() {
            assert.deepEqual([1, 1, 1, 1], narray.Ones(4),
                             'While checking Ones of size 4.');
            assert.deepEqual([], narray.Ones(0),
                             'While checking Ones of size 0.');
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {narray.Ones(-1);}, TypeError,
                          'While checking negative size.');
            assert.throws(function() {narray.Ones('a');}, TypeError,
                          'While checking non-numeric size.');
            assert.throws(function() {narray.Ones(2.4);}, TypeError,
                          'While checking non-integer size.');
        });
    });

    describe('#SizeFill(n, value)', function() {

        // Proper execution
        it('should create an array consisting of n copies of value',
           function() {
            assert.deepEqual([1, 1, 1], narray.SizeFill(3, 1),
                             'While checking size fill of size 3, value 1.');
            assert.deepEqual([], narray.Ones(0, 921),
                             'While checking size fill of size 0, arbitrary value.');
            assert.deepEqual([2.2, 2.2, 2.2, 2.2], narray.SizeFill(4, 2.2),
                             'While checking size fill of size 4, float value.');
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {narray.SizeFill(-1, 3);}, TypeError,
                          'While checking negative size.');
            assert.throws(function() {narray.SizeFill('a', 4);}, TypeError,
                          'While checking non-numeric size.');
            assert.throws(function() {narray.SizeFill(2.4, 78);}, TypeError,
                          'While checking non-integer size.');

            assert.throws(function() {narray.SizeFill(3, 'a');}, TypeError,
                          'While checking non-numeric value.');
        });
    });

    //=========================================================================
    //  narray type checking
    //=========================================================================

    describe('#IsNarray(to_check)', function() {

        // Proper narrays
        it('should return true for proper narrays', function() {
            assert.equal(true, narray.IsNarray([1, 2, 3, 4]),
                         'While checking integer array.');
            assert.equal(true, narray.IsNarray([-0.2, -5, 2789, 0.2222, 0]),
                         'While checking numeric array (integer, float,' +
                         ' negative, 0).');
            assert.equal(true, narray.IsNarray([]),
                         'While checking empty array.');
        });

        // non narrays
        it('should return false for arrays that are not narrays', function() {
            assert.equal(false, narray.IsNarray(['a', 'b', 'c']),
                         'While checking non-numeric strings.');
            assert.equal(false, narray.IsNarray([1, 2, 'a']),
                         'While checking mixed, string at last index.');
            assert.equal(false, narray.IsNarray([1, 'a', 2]),
                         'While checking mixed, string in middle index.');
            assert.equal(false, narray.IsNarray(['a', 1, 2]),
                         'While checking mixed array, string in first index.');
            assert.equal(false, narray.IsNarray(['1', '2.2']),
                         'While checking numeric strings.');
            assert.equal(false, narray.IsNarray([{'a':  1.2}]),
                         'While checking array of objects.');
            assert.equal(false, narray.IsNarray([[1, 2, 3], [2, 3, 4]]),
                         'While checking array of arrays.');
        });
    });

    //=========================================================================
    //  pointwise arithmetic
    //=========================================================================

    describe('#PAdd', function() {

        // Proper addition
        it('should pointwise-add the arrays', function() {
            assert.deepEqual([5, 7, 9], narray.PAdd([1, 2, 3], [4, 5, 6]),
                             'While checking equal sizes with integers.');
            assert.deepEqual([2.4, 0, -4, -5.2],
                             narray.PAdd([1.2, -4.5, 7, -3],
                                         [1.2, 4.5, -11, -2.2]),
                             'While checking equal sizes with mixed numbers.');
            assert.deepEqual([4, 6], narray.PAdd([1, 2], [3, 4, 5]),
                             'While checking left < right.');
            assert.deepEqual([5, 7], narray.PAdd([1, 2, 3], [4, 5]),
                             'While checking left > right.');
            assert.deepEqual([], narray.PAdd([], [1, 2]),
                             'While checking empty left.');
            assert.deepEqual([], narray.PAdd([1, 2], []),
                             'While checking empty right.');
            assert.deepEqual([], narray.PAdd([], []),
                             'While checking empty left and right.');
        });
    });

    describe('#PSub', function() {

        // Proper subtraction
        it('should pointwise-subtract the arrays', function() {
            assert.deepEqual([-3, -3, -3], narray.PSub([1, 2, 3], [4, 5, 6]),
                             'While checking equal sizes with integers.');
            assert.deepEqual([0, -9, 18],
                             narray.PSub([1.2, -4.5, 7],
                                         [1.2, 4.5, -11]),
                             'While checking equal sizes with mixed numbers.');
            assert.deepEqual([-2, -2], narray.PSub([1, 2], [3, 4, 5]),
                             'While checking left < right.');
            assert.deepEqual([-3, -3], narray.PSub([1, 2, 3], [4, 5]),
                             'While checking left > right.');
            assert.deepEqual([], narray.PSub([], [1, 2]),
                             'While checking empty left.');
            assert.deepEqual([], narray.PSub([1, 2], []),
                             'While checking empty right.');
            assert.deepEqual([], narray.PSub([], []),
                             'While checking empty left and right.');
        });
    });

    describe('#PMult', function() {

        // Proper multiplication
        it('should pointwise-subtract the arrays', function() {
            assert.deepEqual([2, -6, 12],
                             narray.PMult([2, -3, -4], [1, 2, -3]),
                             'While checking basic equal sizes.');
            assert.deepEqual([0, 6], narray.PMult([0, 3], [1, 2]),
                             'While checking 0 on left.');
            assert.deepEqual([0, 6], narray.PMult([2, 3], [0, 2]),
                             'While checking 0 on right');
            assert.deepEqual([0, 6], narray.PMult([0, 3], [0, 2]),
                             'While checking 0 on left and right');
            assert.deepEqual([3, 8], narray.PMult([1, 2], [3, 4, 5]),
                             'While checking left < right.');
            assert.deepEqual([4, 10], narray.PMult([1, 2, 3], [4, 5]),
                             'While checking left > right.');
            assert.deepEqual([], narray.PMult([], [1, 2]),
                             'While checking empty left.');
            assert.deepEqual([], narray.PMult([1, 2], []),
                             'While checking empty right.');
            assert.deepEqual([], narray.PMult([], []),
                             'While checking empty left and right.');
        });
    });

    describe('#PDiv', function() {

        // Proper division
        it('should pointwise-subtract the arrays', function() {
            assert.deepEqual([2, -2, 2],
                             narray.PDiv([2, -4, -6], [1, 2, -3]),
                             'While checking basic equal sizes.');
            assert.deepEqual([0, 2], narray.PDiv([0, 4], [1, 2]),
                             'While checking 0 on left.');
            //assert.deepEqual([0, 6], narray.PMult([2, 3], [0, 2]),
            //                 'While checking 0 on right');
            //assert.deepEqual([0, 6], narray.PMult([0, 3], [0, 2]),
            //                 'While checking 0 on left and right');
            assert.deepEqual([1, 3], narray.PDiv([3, 12], [3, 4, 5]),
                             'While checking left < right.');
            assert.deepEqual([2, 1], narray.PDiv([8, 5, 3], [4, 5]),
                             'While checking left > right.');
            assert.deepEqual([], narray.PDiv([], [1, 2]),
                             'While checking empty left.');
            assert.deepEqual([], narray.PDiv([1, 2], []),
                             'While checking empty right.');
            assert.deepEqual([], narray.PDiv([], []),
                             'While checking empty left and right.');
            assert.deepEqual([2], narray.PDiv([4], [2, 0]),
                             'While checking zero in right in position >= n');
        });

        // Divide by zero
        it('should throw an error due to division by zero', function() {
            assert.throws(function() {narray.PDiv([2, 3], [0, 2]);},
                          TypeError,
                          'While checking zero on right.');
            assert.throws(function() {narray.PDiv([0, 3], [0, 2]);},
                          TypeError,
                          'While checking zero on left and right.');
        });
    });

    //=========================================================================
    //  Single array operations
    //=========================================================================

    describe('#Sum', function() {
        it('should sum the elements in arr', function() {
            assert.equal(0, narray.Sum([]),
                         'While checking a sum on an empty array.');
            assert.equal(1, narray.Sum([1]),
                         'While checking the sum of a size-one array.');
            assert.equal(2.2, narray.Sum([1, 1.2]),
                         'While checking the sum of a size-two array.');
            assert.equal(-2, narray.Sum([1, 2, -5]),
                         'While checking sum with negative values');
        });
    });

    //=========================================================================
    //  Misc
    //=========================================================================

    describe('#Clone', function() {
        it('should return a copy of the array', function() {
            var first = [1, 2, 3];
            var second = narray.Clone(first);

            assert.deepEqual(first, second, 'While checking values are equal');
            assert.notEqual(first, second,
                            'While verifying that the arrays are not the' +
                            ' same reference');
        });
    });

    describe('#Shift', function() {
        it('should shift off the first n elements', function() {
            var orig = [1, 2, 3, 4];

            assert.deepEqual([1, 2, 3, 4], narray.Shift(orig, 0),
                             'While testing shift 0.');
            assert.deepEqual([2, 3, 4], narray.Shift(orig, 1),
                             'While testing shift 1.');
            assert.deepEqual([4], narray.Shift(orig, 3),
                             'While testing shift 3.');
            assert.deepEqual([], narray.Shift(orig, 10),
                             'While testing shift > length.');
            assert.deepEqual([1, 2, 3, 4], orig,
                             'While testing that original was not changed.');
        });
    });
});
