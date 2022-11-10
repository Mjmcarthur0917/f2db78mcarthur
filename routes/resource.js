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
router.post('/costumes', hunting_controller.hunting_create_post);
// DELETE request to delete Costume.
router.delete('/costumes/:id', hunting_controller.hunting_delete);
// PUT request to update Costume.
router.put('/costumes/:id', hunting_controller.hunting_update_put);
// GET request for one Costume.
router.get('/costumes/:id', hunting_controller.hunting_detail);
// GET request for list of all Costume items.
router.get('/costumes', hunting_controller.hunting_list);
module.exports = router;