const mongoose = require('mongoose');
const websiteSchema = require('./WebsiteSchema');
const websiteModel = mongoose.model('WebsiteModel', websiteSchema);
module.exports = websiteModel;