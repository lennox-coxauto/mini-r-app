const express = require('express');
const controller = require('../controller/min_controller');
const ROUTER = express.Router();


/**
 *  @description Root Route
 *  @method GET /
 */

ROUTER.get('/' , controller.homeroute)




module.exports = ROUTER;