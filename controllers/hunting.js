var Hunting = require('../models/hunting');

// List of all Costumes
exports.hunting_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Hunting list');
};

// for a specific Costume.
exports.hunting_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Hunting detail: ' + req.params.id);
};

// Handle Costume create on POST.
exports.hunting_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Hunting create POST');
};

// Handle Costume delete form on DELETE.
exports.hunting_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Hunting delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.hunting_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Hunting update PUT' + req.params.id);
};