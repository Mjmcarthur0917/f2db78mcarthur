var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var hunting_controller = require('../controllers/hunting');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/hunting', hunting_controller.hunting_create_post);
// DELETE request to delete Costume.
router.delete('/hunting/:id', hunting_controller.hunting_delete);
// PUT request to update Costume.
router.put('/hunting/:id', hunting_controller.hunting_update_put);
// GET request for one Costume.
router.get('/hunting/:id', hunting_controller.hunting_detail);
// GET request for list of all Costume items.
router.get('/hunting', hunting_controller.hunting_list);
/* GET detail hunting page */
router.get('/detail', hunting_controller.hunting_view_one_Page);
/* GET create costume page */
router.get('/create', hunting_controller.hunting_create_Page);
/* GET update costume page */
router.get('/update', hunting_controller.hunting_update_Page);
/* GET delete costume page */
router.get('/delete', hunting_controller.hunting_delete_Page);
module.exports = router;