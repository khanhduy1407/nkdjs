/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule base62
 * @flow
 */

'use strict';

const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function base62(number: number): string {
  if (!number) {
    return '0';
  }
  let string = '';
  while (number > 0) {
    string = BASE62[number % 62] + string;
    number = Math.floor(number / 62);
  }
  return string;
}

module.exports = base62;
