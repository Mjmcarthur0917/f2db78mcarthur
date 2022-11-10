var express = require('express');
const hunting_controlers= require('../controllers/hunting');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', hunting_controlers.hunting_view_all_Page );
});

module.exports = router;
