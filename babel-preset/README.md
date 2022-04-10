# babel-preset-nkdjs

> Babel preset for NKDuy projects.

## Install

```sh
$ npm install --save-dev babel-preset-nkdjs
```

## Basic Usage

### Via `.babelrc`

**.babelrc**

```json
{
  "presets": ["nkdjs"]
}
```

### Via CLI

```sh
$ babel script.js --presets nkdjs
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['nkdjs']
});
```

## Advanced Usage

```javascript
require('babel-core').transform('code', {
  presets: [
    require('babel-preset-nkdjs/configure')({
      autoImport: true,
      inlineRequires: false,
      rewriteModules: {},
      stripDEV: false
    }
  ]
});
```
