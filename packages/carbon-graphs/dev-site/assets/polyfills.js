'use strict';

/* eslint-disable no-plusplus */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-syntax */

(function () {
  // object conversion errors
  const CANNOT_CNVT_TO_OBJ = 'Cannot convert undefined or null to object';

  // Shorthand for object.defineProperty
  const objectDefineProperty = function (proto, keyValuePairArray) {
    for (let i = keyValuePairArray.length; i--;) {
      const key = keyValuePairArray[i][0];
      const val = keyValuePairArray[i][1];
      if (!proto[key]) {
        Object.defineProperty(proto, key, {
          writeable: true,
          configureable: true,
          enumerable: false,
          value: val,
        });
      }
    }
  };
    // Static object polyfills
  (function () {
    const checkConvertible = function (obj) {
      if (typeof obj === 'undefined' || obj === null) {
        throw new TypeError(CANNOT_CNVT_TO_OBJ);
      }
      return Object(obj);
    };
    const polylist = [
      /**
             * Copies all values of all enumerable properties from 1+ source objects to a target object.
             * @param {Object} target The target object to assign to
             * @param {...Object} The source objects
             * @returns {Object} the modified target object
             */
      [
        'assign',
        function assign(target) {
          // .length of function is 2
          // create the new object which is to be returned from the target object
          const to = checkConvertible(target);
          // combine with each additional argument
          for (let i = 1; i < arguments.length; i++) {
            const nextSource = arguments[i];
            if (
              nextSource !== null
                            && typeof nextSource !== 'undefined'
            ) {
              // Skip over if undefined or null
              for (const nextKey in nextSource) {
                // Avoid bugs in IE
                if (
                  Object.prototype.hasOwnProperty.call(
                    nextSource,
                    nextKey,
                  )
                ) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
          return to;
        },
      ],
      /**
             * Given any object, returns an array of the given object's own enumerable property values.
             * @param {Object} obj The object for which to retrieve the values.
             * @returns {Object[]} An array of values
             */
      [
        'values',
        function values(obj) {
          obj = checkConvertible(obj);
          const vals = [];
          for (const key in obj) {
            if (
              Object.prototype.hasOwnProperty.call(obj, key)
                            && Object.prototype.propertyIsEnumerable.call(obj, key)
            ) {
              vals.push(obj[key]);
            }
          }
          return vals;
        },
      ],
    ];
    objectDefineProperty(Object, polylist);
  }());
}());
