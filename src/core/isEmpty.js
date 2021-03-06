/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEmpty
 * @flow
 */

'use strict';

/* eslint-disable www/typeof-undefined */
/* eslint-disable no-unused-vars */

const invariant = require('invariant');

/**
 * Checks if a value is empty.
 */
function isEmpty(value: mixed): boolean {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === 'object') {
    if (value) {
      invariant(
        !isIterable(value) || value.size === undefined,
        'isEmpty() does not support iterable collections.',
      );
      for (const _ in value) {
        return false;
      }
    }
    return true;
  } else {
    return !value;
  }
}

function isIterable(value: any): boolean {
  if (typeof Symbol === 'undefined') {
    return false;
  }
  return value[Symbol.iterator];
}

module.exports = isEmpty;
