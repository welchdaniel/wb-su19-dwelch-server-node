const pageModel = require('../models/PageModel');

createPage = (websiteId, page) => {
    //return pageModel.create(...);
}

findPageById = (websiteId, pageId) => {
    //return pageModel.findById(...); 
}

findAllPages = (websiteId) => {

}

deletePage = (websiteId, pageId) => {
    //return pageModel.findByIdAndDelete(...);
}

updatePage = (websiteId, pageId, page) => {
    //return pageModel.updateOne({_id: id}, {$set: user});
}

module.exports = {
    createPage,
    findPageById,
    findAllPages,
    deletePage,
    updatePage
}