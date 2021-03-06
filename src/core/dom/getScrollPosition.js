/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getScrollPosition
 * @typechecks
 */

'use strict';

const getDocumentScrollElement = require('getDocumentScrollElement');
const getUnboundedScrollPosition = require('getUnboundedScrollPosition');

/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are bounded. This means that if the scroll position is
 * negative or exceeds the element boundaries (which is possible using inertial
 * scrolling), you will get zero or the maximum scroll position, respectively.
 *
 * If you need the unbound scroll position, use `getUnboundedScrollPosition`.
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */
function getScrollPosition(scrollable) {
  const documentScrollElement = getDocumentScrollElement();
  if (scrollable === window) {
    scrollable = documentScrollElement;
  }
  const scrollPosition = getUnboundedScrollPosition(scrollable);

  const viewport =
    scrollable === documentScrollElement ?
      document.documentElement :
      scrollable;

  const xMax = scrollable.scrollWidth - viewport.clientWidth;
  const yMax = scrollable.scrollHeight - viewport.clientHeight;

  scrollPosition.x = Math.max(0, Math.min(scrollPosition.x, xMax));
  scrollPosition.y = Math.max(0, Math.min(scrollPosition.y, yMax));

  return scrollPosition;
}

module.exports = getScrollPosition;
