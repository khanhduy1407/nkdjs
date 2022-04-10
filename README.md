# NKDJS

## Usage

Any `@providesModule` modules that are used by your project should be added to `src/`. They will be built and added to `module-map.json`. This file will contain a map from `@providesModule` name to what will be published as `nkdjs`. The `module-map.json` file can then be consumed in your own project, along with the [rewrite-modules](https://github.com/khanhduy1407/nkdjs/blob/master/babel-preset/plugins/rewrite-modules.js) Babel plugin (which we'll publish with this), to rewrite requires in your own project. Then, just make sure `nkdjs` is a dependency in your `package.json` and your package will consume the shared code.

```js
// Before transform
const emptyFunction = require('emptyFunction');
// After transform
const emptyFunction = require('nkdjs/lib/emptyFunction');
```

See React for an example of this. *Coming soon!*

## Building

It's as easy as just running gulp. This assumes you've also done `npm install -g gulp`.

```sh
gulp
```

Alternatively `npm run build` will also work.

### Layout

Right now these packages represent a subset of packages that we use internally at Facebook. Mostly these are support libraries used when shipping larger libraries, like React and Relay, or products. Each of these packages is in its own directory under `src/`.

### Process

Since we use `@providesModule`, we need to rewrite requires to be relative. Thanks to `@providesModule` requiring global uniqueness, we can do this easily. Eventually we'll try to make this part of the process go away by making more projects use CommonJS.
