/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule resolveImmediate
 * @flow
 */

const resolvedPromise = Promise.resolve();

/**
 * An alternative to setImmediate based on Promise.
 */
function resolveImmediate(callback: () => any): void {
  resolvedPromise.then(callback).catch(throwNext);
}

function throwNext(error) {
  setTimeout(() => {
    throw error;
  }, 0);
}

module.exports = resolveImmediate;
