/* eslint-disable new-cap */
'use strict';
var express = require('express');
var router = express.Router();

router.route('/_health')
    .get(healthCheck);

module.exports = router;

function healthCheck(req, res, next) {
    res.send('I think therefore I am');
}
