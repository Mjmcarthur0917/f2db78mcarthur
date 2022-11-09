const mongoose = require("mongoose")
const huntingSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Hunting", huntingSchema)