/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule URI
 * @flow
 */

'use strict';

class URI {
  _uri: string;

  constructor(uri: string) {
    this._uri = uri;
  }

  toString(): string {
    return this._uri;
  }
}

module.exports = URI;
