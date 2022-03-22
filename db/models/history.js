// File: ./models/history.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
//   code: String,
//   name: String,
//   price: Number,
//   remainingStock: Number
    code: String,
    qty: Number,
    name: String,
    price: Number,
    amount: Number

});

//Export function to create "ProductSchema" model class
module.exports = mongoose.model('History', HistorySchema );