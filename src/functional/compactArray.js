/**
 * Copyright 2022-present NKDuy. All Rights Reserved.
 *
 * @providesModule compactArray
 * @typechecks
 * @flow
 */

'use strict';

/**
 * Returns a new Array containing all the element of the source array except
 * `null` and `undefined` ones. This brings the benefit of strong typing over
 * `Array.prototype.filter`.
 */
function compactArray<T>(
  array: Array<T|null|void>
): Array<T> {
  var result = [];
  for (var i = 0; i < array.length; ++i) {
    var elem = array[i];
    if (elem != null) {
      result.push(elem);
    }
  }
  return result;
}

module.exports = compactArray;
