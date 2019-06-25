const mongoose = require('mongoose');
const Row = require('./RowSchema');
const pageSchema = mongoose.Schema({
   title: String,
   rows: [Row]
}, {collection: 'page'});
module.exports = pageSchema;