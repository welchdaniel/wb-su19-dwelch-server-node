const mongoose = require('mongoose');
const Column = require('./ColumnSchema');
const rowSchema = mongoose.Schema({
   title: String,
   columns: [Column]
}, {collection: 'row'});
module.exports = rowSchema;