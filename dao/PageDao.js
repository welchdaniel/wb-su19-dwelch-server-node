const pageModel = require('../models/PageModel');
const websiteModel = require('../models/WebsiteModel')

createPage = (websiteId, page) => {
    websiteModel.update({_id: websiteId},{$push: {pages: page}});
}

findPageById = (websiteId, pageId) => {
    websiteModel.findById(websiteId)
       then(website => website.pages.id(pageId));
}

findAllPages = (websiteId) => {
    websiteModel.findById(websiteId)
       then(website => website.pages);
}

deletePage = (websiteId, pageId) => {
    websiteModel.update(
        {_id: websiteId},
        {$pull: {pages: {_id: pageId}}}
    )
}

updatePage = (websiteId, pageId, page) => {
    websiteModel.update(
        {_id: websiteId, 'pages._id': pageId},
        {$set: {
            'pages.$.title': page.title,
            'pages.$.rows': page.rows
        }}
    )
}

module.exports = {
    createPage,
    findPageById,
    findAllPages,
    deletePage,
    updatePage
}