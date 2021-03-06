/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule maxBy
 * @flow
 */

var minBy = require('minBy');

var compareNumber = (a, b) => a - b;

/**
 * Returns the maximum element as measured by a scoring function f. Returns the
 * first such element if there are ties.
 */
function maxBy<A, B>(
  as: Iterable<A>,
  f: (a: A) => B,
  compare?: ?((u: B, v: B) => number),
): ?A {
  compare = compare || (compareNumber: any);

  return minBy(as, f, (u, v) => (compare: any)(v, u));
}

module.exports = maxBy;
