/**
 * Copyright (c) 2022-present, NKDuy.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getElementRect
 * @typechecks
 */

const containsNode = require('containsNode');

/**
 * Gets an element's bounding rect in pixels relative to the viewport.
 *
 * @param {DOMElement} elem
 * @return {object}
 */
function getElementRect(elem) {
  const docElem = document.documentElement;

  // FF 2, Safari 3 and Opera 9.5- do not support getBoundingClientRect().
  // IE9- will throw if the element is not in the document.
  if (!('getBoundingClientRect' in elem) || !containsNode(docElem, elem)) {
    return {
      left:   0,
      right:  0,
      top:    0,
      bottom: 0
    };
  }

  // Subtracts clientTop/Left because IE8- added a 2px border to the
  // <html> element. IE 7 in
  // Quicksmode does not report clientLeft/clientTop so there
  // will be an unaccounted offset of 2px when in quirksmode
  const rect = elem.getBoundingClientRect();

  return {
    left:   Math.round(rect.left) - docElem.clientLeft,
    right:  Math.round(rect.right) - docElem.clientLeft,
    top:    Math.round(rect.top) - docElem.clientTop,
    bottom: Math.round(rect.bottom) - docElem.clientTop
  };
}

module.exports = getElementRect;
