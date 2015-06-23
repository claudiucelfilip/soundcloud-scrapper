'use strict';

var request = require('request');

exports.index = function(req, res) {
  request(decodeURI(req.query.url)).pipe(res);
};
