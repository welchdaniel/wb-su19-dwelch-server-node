const websiteService = require('../services/WebsiteService');

module.exports = app => {
    createWebsite = (req, res) => {
        websiteService.createWebsite(req.body)
            .then(websites => {
                res.send(websites);
            })
    }

    findWebsiteById = (req, res) => {
        websiteService.findWebsiteById(req.params['websiteId'])
            .then(website => {
                res.send(website);
            });
    }

    findAllWebsites = (req, res) => {
        websiteService.findAllWebsites()
            .then(websites => {
                res.send(websites);
            });
    }

    deleteWebsite = (req, res) => {
        websiteService.deleteWebsite(req.params['websiteId'])
            .then(status => res.send(status));
    }

    updateWebsite = (req, res) => {
        websiteService.updateWebsite(req.params['websiteId'], req.body)
            .then(status => {
                res.send(status);
            });
    }

    app.get('/api/websites', findAllWebsites);
    app.get('/api/websites/:websiteId', findWebsiteById);
    app.post('/api/websites', createWebsite);
    app.delete('/api/websites/:websiteId', deleteWebsite);
    app.put('/api/websites/:websiteId', updateWebsite);
}