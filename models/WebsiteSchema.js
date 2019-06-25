const mongoose = require('mongoose');
const Page = require('./PageSchema');
const websiteSchema = mongoose.Schema({
   title: String,
   author: String,
   pages: [Page]
}, {collection: 'website'});
module.exports = websiteSchema;