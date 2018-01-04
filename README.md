# build-uri-path
[![Build Status](https://travis-ci.org/donavon/build-uri-path.svg?branch=master)](https://travis-ci.org/donavon/build-uri-path)
[![npm version](https://img.shields.io/npm/v/build-uri-path.svg)](https://www.npmjs.com/package/build-uri-path)
[![Coverage Status](https://coveralls.io/repos/github/donavon/build-uri-path/badge.svg?branch=master)](https://coveralls.io/github/donavon/build-uri-path?branch=master)

This is the accompanying source code for the blog post
[Reduce, Reuse, React](https://www.javascriptjanuary.com/blog/reduce-reuse-react)
published for JavaScript January.

TL;DR

* Reliably build a Uri path
* Use as a Tagged Template Literal function

## Install
```bash
$ npm i --save build-uri-path
```

## Usage

```js
import buildUriPath from 'build-uri-path';

const resource = 'topic';
const id = 'form/function';

const path = buildUriPath`/${resource}/${id}`;
```

In this example, `path` would equal "/topic/form%2Ffunction/"
