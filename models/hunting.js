const mongoose = require("mongoose")
const huntingSchema = mongoose.Schema({
    hunting_item: String,
    hunting_item_price: Number,
    hunting_item_quantity: Number
})
module.exports = mongoose.model("Hunting", huntingSchema)