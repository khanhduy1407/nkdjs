/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule everySet
 * @flow
 * @typechecks
 */

'use strict';

import type Set from 'Set';

/**
 * The everySet() method tests whether all elements in the given Set pass the
 * test implemented by the provided function.
 */
function everySet<T>(
  set: Set<T>,
  callback: (value: T, key: T, set: Set<T>) => boolean,
  context?: any
): boolean {
  var iterator = set.entries();
  var current = iterator.next();
  while (!current.done) {
    var entry = current.value;
    if (!callback.call(context, entry[1], entry[0], set)) {
      return false;
    }
    current = iterator.next();
  }
  return true;
}

module.exports = everySet;
