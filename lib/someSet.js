/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @typechecks
 */

'use strict';

/**
 * The someSet() method tests whether some elements in the given Set pass the
 * test implemented by the provided function.
 */
function someSet(set, callback, context) {
  var iterator = set.entries();
  var current = iterator.next();
  while (!current.done) {
    var entry = current.value;
    if (callback.call(context, entry[1], entry[0], set)) {
      return true;
    }
    current = iterator.next();
  }
  return false;
}

module.exports = someSet;