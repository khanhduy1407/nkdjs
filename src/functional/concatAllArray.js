/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule concatAllArray
 * @typechecks
 */

var push = Array.prototype.push;

/**
 * Concats an array of arrays into a single flat array.
 *
 * @param {array} array
 * @return {array}
 */
function concatAllArray(array) {
  var ret = [];
  for (var ii = 0; ii < array.length; ii++) {
    var value = array[ii];
    if (Array.isArray(value)) {
      push.apply(ret, value);
    } else if (value != null) {
      throw new TypeError(
        'concatAllArray: All items in the array must be an array or null, ' +
        'got "' + value + '" at index "' + ii + '" instead'
      );
    }
  }
  return ret;
}

module.exports = concatAllArray;
