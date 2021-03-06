/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TokenizeUtil
 * @typechecks
 * @stub
 * @flow
 */

'use strict';

// \u00a1-\u00b1\u00b4-\u00b8\u00ba\u00bb\u00bf
//             is latin supplement punctuation except fractions and superscript
//             numbers
// \u2010-\u2027\u2030-\u205e
//             is punctuation from the general punctuation block:
//             weird quotes, commas, bullets, dashes, etc.
// \u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f
//             is CJK punctuation
// \uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65
//             is some full-width/half-width punctuation
// \u2E2E\u061f\u066a-\u066c\u061b\u060c\u060d\uFD3e\uFD3F
//             is some Arabic punctuation marks
// \u1801\u0964\u104a\u104b
//             is misc. other language punctuation marks
var PUNCTUATION = (
  '[.,+*?$|#{}()\'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;' +
  '\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f' +
  '\uff3b-\uff40\uff5b-\uff65\u2E2E\u061f\u066a-\u066c\u061b\u060c\u060d' +
  '\uFD3e\uFD3F\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e' +
  '\u00a1-\u00b1\u00b4-\u00b8\u00ba\u00bb\u00bf]'
);

module.exports = {
  getPunctuation: (): string => PUNCTUATION,
};
