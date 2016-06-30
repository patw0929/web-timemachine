# Web TimeMachine (Chrome Extension)

[![NPM version](http://img.shields.io/npm/v/web-timemachine.svg?style=flat)](https://www.npmjs.com/package/web-timemachine)
[![Dependency Status](https://david-dm.org/patw0929/web-timemachine.svg)](https://david-dm.org/patw0929/web-timemachine)
[![devDependency Status](https://david-dm.org/patw0929/web-timemachine/dev-status.svg)](https://david-dm.org/patw0929/web-timemachine#info=devDependencies)

> Chrome extension for wayback to sometime to view the archived webpages.

## Download

* [Chrome Web Store - Web TimeMachine](https://chrome.google.com/webstore/detail/web-timemachine/ncnnhgbiiaafmigkmjljpglimalikdmk)

---

## Contributing & Development Guide

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

To contribute to this repo, clone it locally and commit your code on a separate branch, then you could push & open a pull-request.


## LICENSE

[MIT](LICENSE)
