# nkdjs-scripts

This is a collection of tools and scripts intended to be used in conjunction with `nkdjs`. Previously these were shipped as a part of `nkdjs`.

```js
// before (nkdjs@0.1.0)
var invariant = require('nkdjs/lib/invariant');
var devExpression = require('nkdjs/scripts/babel/dev-expression');

// after (nkdjs, nkdjs-scripts@0.2.0)
var invariant = require('nkdjs/lib/invariant');
var devExpression = require('nkdjs-scripts/babel/dev-expression');
```

## Why?

This ensures that production code consuming `nkdjs` library code does not need to install script dependencies, unless you explicitly use them via the `nkdjs-scripts` package.
