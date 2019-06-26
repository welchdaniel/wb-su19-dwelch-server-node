const websiteModel = require('../models/WebsiteModel');

createWebsite = (website) => {
    return websiteModel.create(website);
}

findWebsiteById = (id) => {
    return websiteModel.findById(id); 
}

findAllWebsites = () => {
    return websiteModel.find();
}

deleteWebsite = (id) => {
    return websiteModel.findByIdAndDelete(id);
}

updateWebsite = (id, website) => {
    return websiteModel.updateOne({_id: id}, {$set: website});
}

module.exports = {
    createWebsite,
    findAllWebsites,
    findWebsiteById,
    deleteWebsite,
    updateWebsite
}