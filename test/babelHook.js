/*eslint-disable */

// Force production mode so .babelrc wont load dev options
process.env.NODE_ENV = 'development';

// Get babel config and register babel for runtime transpilation of jsx/es6
var babelrc = require('../.babelrc.js');
require('babel-core/register')(babelrc);

/*eslint-enable */