/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule equalsSet
 * @flow
 * @typechecks
 */

'use strict';

import type Set from 'Set';

var everySet = require('everySet');

/**
 * Checks if two sets are equal
 */
function equalsSet<T>(one: Set<T>, two: Set<T>): boolean {
  if (one.size !== two.size) {
    return false;
  }
  return everySet(one, value => two.has(value));
}

module.exports = equalsSet;
