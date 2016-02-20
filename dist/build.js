'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _responsiveReset = require('./responsive-reset');

var _responsiveReset2 = _interopRequireDefault(_responsiveReset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stream = _fs2.default.createWriteStream('responsive-reset.css');

stream.on('error', function (error) {
  throw error;
}).on('finish', function () {
  var stream2 = _fs2.default.createWriteStream('responsive-reset.css', { flags: 'a+' });
  stream2.on('error', function (error) {
    throw error;
  }).on('finish', function () {
    console.log('OK');
  });

  stream2.write(_responsiveReset2.default.toString());

  stream2.end();
});

_fs2.default.createReadStream('html5-reset.css').pipe(stream);