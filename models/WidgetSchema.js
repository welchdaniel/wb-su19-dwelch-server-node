const mongoose = require('mongoose');
const widgetSchema = mongoose.Schema({
   title: String,
   type: {type: String, enum: ['HEADING', 'PARAGRAPH', 'LIST', 'HYPERLINK', 'IMAGE']},
   text: String,
   size: Number
}, {collection: 'widget'});
module.exports = widgetSchema;