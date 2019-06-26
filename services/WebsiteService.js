const websiteDao = require('../dao/WebsiteDao');

createWebsite = (website) => {
    return websiteDao.createWebsite(website);
}

findWebsiteById = (websiteId) => {
    return websiteDao.findWebsiteById(websiteId);
}

findAllWebsites = () => {
    return websiteDao.findAllWebsites();
}

deleteWebsite = (websiteId) => {
    return websiteDao.deleteWebsite(websiteId);
}

updateWebsite = (websiteId, website) => {
    return websiteDao.updateWebsite(websiteId, website);
}

module.exports = {
    createWebsite,
    findAllWebsites,
    findWebsiteById,
    deleteWebsite,
    updateWebsite
}
