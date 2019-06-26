const pageDao = require('../dao/PageDao');

createPage = (websiteId, page) => {
    return pageDao.createPage(websiteId, page);
}

findPageById = (websiteId, pageId) => {
    return pageDao.findPageById(websiteId, pageId); 
}

findAllPages = (websiteId) => {
    return pageDao.findAllPages(websiteId); 
}

deletePage = (websiteId, pageId) => {
    return pageDao.deletePage(websiteId, pageId);
}

updatePage = (websiteId, pageId, page) => {
    return pageDao.updatePage(websiteId, pageId, page);
}

module.exports = {
    createPage,
    findPageById,
    findAllPages,
    deletePage,
    updatePage
}