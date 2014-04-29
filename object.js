'use strict';
var S = require('./index.js');
var arrayUtils = require('./array.js');

var objectUtils = S.newLibrary();
module.exports = objectUtils;

objectUtils.defineProperties({
    extend: function(target, object) {
        if (object) {
            for (var i in object) {
                target[i] = object[i];
            }
        }
        return target;
    },
    mextend: function(target) {
        var objects = arrayUtils.slice1(arguments), l=objects.length, i, obj, j;
        for (i=0; i<l; i++) {
            obj = objects[i];
            for (j in obj) {
                target[j] = obj[j];
            }
        }
        return target;
    },
    union: function(target, object) {
        if (object) {
            for (var i in object) {
                if (target[i] === undefined) {
                    target[i] = object[i];
                }
            }
        }
        return target;
    },
    clone: function(o) {
        return objectUtils.extend({}, o);
    },
    iterator: function(o) {
        if (Array.isArray(o)) {
            return arrayUtils.iterator(o);
        }
        var keys = Object.keys(o), i=0;
        return Object.freeze({
            hasNext: function() {
                return i < keys.length;
            },
            next: function() {
                if (!this.hasNext()) {
                    throw StopIteration;
                }
                return [ keys[i], o[keys[i++]] ];
            }
        });
    },
    forEach: function(o, callback, thisArg) {
        if (!thisArg) {
            thisArg = o;
        }
        /*#if DEV*/
        if (o.forEach) {
            throw new Error('call forEach !');
        }
        /*#/if*/
        Object.keys(o).forEach(function(k) {
            callback.call(thisArg, o[k], k);
        });
    },
    
    map: function(o,callback) {
        var mappedO = {};
        Object.keys(o).forEach(function(k) {
            mappedO[k] = callback(o[k], k);
        });
        return mappedO;
    },
    join: function(o, separator) {
        return Object.keys(o).map(function(k) {
            return o[k];
        }).join(separator);
    },
    filterKeys: function(o, keys) {
        var mappedO = {};
        keys.forEach(function(k){
            mappedO[k] = o[k];
        });
        return mappedO;
    },
    
    implode: function(o, glue, callback) {
        if (S.isFunction(glue)){
            callback=glue;
            glue='';
        }
        if (!callback) {
            callback = function(k, v){
                return v;
            };
        }
        for (var res, keys = Object.keys(o), length = keys.length, i=0 ; i<length ; i++){
            var k = keys[i];
            if (i!==0) {
                res += glue;
            }
            res += callback(k, o[k]);
        }
        return res;
    }
}, false, true);