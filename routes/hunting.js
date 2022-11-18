var express = require('express');
const hunting_controllers= require('../controllers/hunting');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  router.get('/', hunting_controllers.hunting_view_all_Page );
});
*/
router.get('/detail', hunting_controllers.hunting_view_one_Page);

router.get('/create', hunting_controllers.hunting_create_Page);

router.get('/update', hunting_controllers.hunting_update_Page);

router.get('/delete', hunting_controllers.hunting_delete_Page);

module.exports = router;
