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


// for a specific hunting item.
exports.hunting_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Hunting.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   
};

// Handle Hunting create on POST.
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

// Handle Hunting delete form on DELETE.
exports.hunting_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Hunting.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle Costume update form on PUT.
exports.hunting_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Hunting.findById( req.params.id)
    // Do updates of properties
    if(req.body.hunting_item)
    toUpdate.hunting_item = req.body.hunting_item;
    if(req.body.hunting_item_price) toUpdate.hunting_item_price = req.body.hunting_item_price;
    if(req.body.hunting_item_quantity) toUpdate.hunting_item_quantity = req.body.hunting_item_quantity;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };
exports.hunting_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Hunting update PUT' + req.params.id);
};

//VIEWS 
// Handle a show all view 
exports.hunting_view_all_Page = async function(req, res) { 
    try{ 
        Hunting = await Hunting.find(); 
        res.render('hunting', { title: 'Hunting Search Results', results: Hunting }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// Handle a show one view with id specified by query
exports.hunting_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Hunting.findById( req.query.id)
    res.render('huntingdetail',
   { title: 'Hunting Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.hunting_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('huntingcreate', { title: 'Hunting Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };