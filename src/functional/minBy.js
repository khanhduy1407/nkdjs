/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule minBy
 * @flow
 */

var compareNumber = (a, b) => a - b;

/**
 * Returns the minimum element as measured by a scoring function f. Returns the
 * first such element if there are ties.
 */
function minBy<A, B>(
  as: Iterable<A>,
  f: (a: A) => B,
  compare?: ?((u: B, v: B) => number),
): ?A {
  compare = compare || (compareNumber: any);

  var minA = undefined;
  var minB = undefined;
  var seenFirst = false;
  for (var a of as) {
    var b = f(a);
    if (!seenFirst || compare(b, (minB: any)) < 0) {
      minA = a;
      minB = b;
      seenFirst = true;
    }
  }

  return minA;
}

module.exports = minBy;
