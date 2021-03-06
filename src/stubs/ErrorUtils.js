/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ErrorUtils
 */

/* jslint unused:false */

if (global.ErrorUtils) {
  module.exports = global.ErrorUtils;
} else {
  var ErrorUtils = {
    applyWithGuard(callback, context, args, onError, name) {
      return callback.apply(context, args);
    },
    guard(callback, name) {
      return callback;
    },
  };

  module.exports = ErrorUtils;
}
