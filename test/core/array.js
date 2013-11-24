'use strict';

var array = require('../../lib/core/array.js');
var assert = require('assert');
//var should = require('should');

describe('array', function() {

    //=========================================================================
    //  array.zeros
    //=========================================================================

    describe('#zeros(n)', function() {

        // Proper execution
        it('should create an array consisting of n 0s', function() {
            assert.deepEqual([0, 0, 0, 0, 0], array.zeros(5));
            assert.deepEqual([], array.zeros(0));
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {array.zeros(-1);}, TypeError,
                          'Input n must not be negative.');
            assert.throws(function() {array.zeros('a');}, TypeError,
                          'Input n must be an integer.');
            assert.throws(function() {array.zeros(2.4);}, TypeError,
                          'Input n must be an integer.');
        });
    });

    //=========================================================================
    //  array.ones
    //=========================================================================

    describe('#ones(n)', function() {

        // Proper execution
        it('should create an array consisting of n 1s', function() {
            assert.deepEqual([1, 1, 1, 1], array.ones(4));
            assert.deepEqual([], array.ones(0));
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {array.ones(-1);}, TypeError,
                          'Input n must not be negative.');
            assert.throws(function() {array.ones('a');}, TypeError,
                          'Input n must be an integer.');
            assert.throws(function() {array.ones(2.4);}, TypeError,
                          'Input n must be an integer.');
        });
    });

    //=========================================================================
    //  array.sizefill
    //=========================================================================

    describe('#sizefill(n, value)', function() {

        // Proper execution
        it('should create an array consisting of n copies of value',
           function() {
            assert.deepEqual([1, 1, 1], array.sizefill(3, 1));
            assert.deepEqual([], array.ones(0, 921));
            assert.deepEqual([2.2, 2.2, 2.2, 2.2], array.sizefill(4, 2.2));
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {array.sizefill(-1, 3);}, TypeError,
                          'Input n must not be negative.');
            assert.throws(function() {array.sizefill('a', 4);}, TypeError,
                          'Input n must be an integer.');
            assert.throws(function() {array.sizefill(2.4, 78);}, TypeError,
                          'Input n must be an integer.');

            assert.throws(function() {array.sizefill(3, 'a');}, TypeError,
                          'Input value must be a number.');
        });
    });
});
