var Hunting = require('../models/hunting');


 // List of all Costumes
exports.hunting_list = async function(req, res) {
    try{
        theHunting = await Hunting.find();
        res.send(theHunting);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// for a specific Costume.
exports.hunting_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Hunting detail: ' + req.params.id);
};

// Handle Costume create on POST.
exports.hunting_create_post = async function(req, res) {
 
    console.log(req.body) 
    let document = new Hunting(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    document.hunting_item = req.body.hunting_item; 
    document.hunting_item_price = req.body.hunting_item_price; 
    document.hunting_item_quantity = req.body.hunting_item_quantity; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
    
};

// Handle Costume delete form on DELETE.
exports.hunting_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Hunting delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.hunting_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Hunting update PUT' + req.params.id);
};

//VIEWS 
// Handle a show all view 
exports.hunting_view_all_Page = async function(req, res) { 
    try{ 
        theHunting = await Hunting.find(); 
        res.render('hunting', { title: 'Hunting Search Results', results: theHunting }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};