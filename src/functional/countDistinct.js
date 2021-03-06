/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule countDistinct
 * @flow
 */

'use strict';

var Set = require('Set');

var emptyFunction = require('emptyFunction');

/**
 * Returns the count of distinct elements selected from an array.
 */
function countDistinct<T1, T2>(
  iter: Iterable<T1>,
  selector: (item: T1) => T2,
): number {
  selector = selector || emptyFunction.thatReturnsArgument;

  var set = new Set();
  for (var val of iter) {
    set.add(selector(val));
  }

  return set.size;
}

module.exports = countDistinct;
