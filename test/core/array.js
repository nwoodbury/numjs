'use strict';

var narray = require('../../lib/core/narray.js');
var assert = require('assert');
//var should = require('should');

describe('narray', function() {

    //=========================================================================
    //  narray Creation
    //=========================================================================

    describe('#zeros(n)', function() {

        // Proper execution
        it('should create an array consisting of n 0s', function() {
            assert.deepEqual([0, 0, 0, 0, 0], narray.zeros(5));
            assert.deepEqual([], narray.zeros(0));
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {narray.zeros(-1);}, TypeError,
                          'Input n must not be negative.');
            assert.throws(function() {narray.zeros('a');}, TypeError,
                          'Input n must be an integer.');
            assert.throws(function() {narray.zeros(2.4);}, TypeError,
                          'Input n must be an integer.');
        });
    });

    describe('#ones(n)', function() {

        // Proper execution
        it('should create an array consisting of n 1s', function() {
            assert.deepEqual([1, 1, 1, 1], narray.ones(4));
            assert.deepEqual([], narray.ones(0));
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {narray.ones(-1);}, TypeError,
                          'Input n must not be negative.');
            assert.throws(function() {narray.ones('a');}, TypeError,
                          'Input n must be an integer.');
            assert.throws(function() {narray.ones(2.4);}, TypeError,
                          'Input n must be an integer.');
        });
    });

    describe('#sizefill(n, value)', function() {

        // Proper execution
        it('should create an array consisting of n copies of value',
           function() {
            assert.deepEqual([1, 1, 1], narray.sizefill(3, 1));
            assert.deepEqual([], narray.ones(0, 921));
            assert.deepEqual([2.2, 2.2, 2.2, 2.2], narray.sizefill(4, 2.2));
        });

        // Input error checking
        it('should throw an error due to bad input', function() {
            assert.throws(function() {narray.sizefill(-1, 3);}, TypeError,
                          'Input n must not be negative.');
            assert.throws(function() {narray.sizefill('a', 4);}, TypeError,
                          'Input n must be an integer.');
            assert.throws(function() {narray.sizefill(2.4, 78);}, TypeError,
                          'Input n must be an integer.');

            assert.throws(function() {narray.sizefill(3, 'a');}, TypeError,
                          'Input value must be a number.');
        });
    });

    //=========================================================================
    //  narray type checking
    //=========================================================================
});
