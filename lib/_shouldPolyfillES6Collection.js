'use strict';

/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @preventMunge
 * 
 */

/**
 * Checks whether a collection name (e.g. "Map" or "Set") has a native polyfill
 * that is safe to be used.
 */
function shouldPolyfillES6Collection(collectionName) {
  var Collection = global[collectionName];
  if (Collection == null) {
    return true;
  }

  // The iterator protocol depends on `Symbol.iterator`. If a collection is
  // implemented, but `Symbol` is not, it's going to break iteration because
  // we'll be using custom "@@iterator" instead, which is not implemented on
  // native collections.
  if (typeof global.Symbol !== 'function') {
    return true;
  }

  var proto = Collection.prototype;

  // These checks are adapted from es6-shim
  // NOTE: `isCallableWithoutNew` and `!supportsSubclassing` are not checked
  // because they make debugging with "break on exceptions" difficult.
  return Collection == null || typeof Collection !== 'function' || typeof proto.clear !== 'function' || new Collection().size !== 0 || typeof proto.keys !== 'function' || typeof proto.forEach !== 'function';
}

module.exports = shouldPolyfillES6Collection;