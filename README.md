# Web TimeMachine (Chrome Extension)

[![NPM version](http://img.shields.io/npm/v/web-timemachine.svg?style=flat)](https://www.npmjs.com/package/web-timemachine)
[![Dependency Status](https://david-dm.org/patw0929/web-timemachine.svg)](https://david-dm.org/patw0929/web-timemachine)
[![devDependency Status](https://david-dm.org/patw0929/web-timemachine/dev-status.svg)](https://david-dm.org/patw0929/web-timemachine#info=devDependencies)

> Chrome extension for wayback to sometime to view the archived webpages.

## Development

```bash
# clone it
$ git clone https://github.com/patw0929/web-timemachine.git

# Install dependencies
$ npm install
```

* Run script
```bash
# build files to './dev'
# start webpack development server
$ npm run dev
```
* If you're developing Inject page, please allow `https://localhost:3000` connections. (Because `injectpage` injected GitHub (https) pages, so webpack server procotol must be https.)
* [Load unpacked extensions](https://developer.chrome.com/extensions/getstarted#unpacked) with `./dev` folder.

#### React/Redux hot reload

This extension uses `Webpack` and `react-transform`, and use `Redux`. You can hot reload by editing related files.

#### Using Redux DevTools Extension

You can use [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) on development mode.

## Build

```bash
# build files to './build'
$ npm run build
```

## Compress

```bash
# compress build folder to {manifest.name}.zip and crx
$ npm run build
$ npm run compress -- [options]
```

#### Options

If you want to build `crx` file (auto update), please provide options, and add `update.xml` file url in [manifest.json](https://developer.chrome.com/extensions/autoupdate#update_url manifest.json).

* --app-id: your extension id (can be get it when you first release extension)
* --key: your private key path (default: './key.pem')
  you can use `npm run compress-keygen` to generate private key `./key.pem`
* --codebase: your `crx` file url

See [autoupdate guide](https://developer.chrome.com/extensions/autoupdate) for more information.

```bash
# lint
$ npm run lint
```

## LICENSE

[MIT](LICENSE)
