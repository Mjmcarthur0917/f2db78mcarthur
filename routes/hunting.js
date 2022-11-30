var express = require('express');
const hunting_controllers= require('../controllers/hunting');
var router = express.Router();

//GET home page. 

router.get('/', hunting_controllers.hunting_view_all_Page );

router.get('/detail', hunting_controllers.hunting_view_one_Page);

router.get('/create', hunting_controllers.hunting_create_Page);
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
router.get('/update',secured, hunting_controllers.hunting_update_Page);


router.get('/delete', hunting_controllers.hunting_delete_Page);

module.exports = router;
