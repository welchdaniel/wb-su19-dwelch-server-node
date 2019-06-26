const pageService = require('../services/PageService');

module.exports = app => {
    createPage = (req, res) => {
        pageService.createPage(req.params['websiteId'], req.body)
            .then(pages => {
                res.send(pages);
            })
    }

    findPageById = (req, res) => {
        pageService.findPageById(req.params['websiteId'], req.params['pageId'])
            .then(page => {
                res.send(page);
            });
    }

    findAllPages = (req, res) => {
        pageService.findAllPages(req.params['websiteId'])
            .then(pages => {
                res.send(pages);
            });
    }

    deletePage = (req, res) => {
        pageService.deletePage(req.params['websiteId'], req.params['pageId'])
            .then(status => res.send(status));
    }

    updatePage = (req, res) => {
        pageService.updatePage(req.params['websiteId'], req.params['pageId'], req.body)
            .then(status => {
                res.send(status);
            });
    }

    app.get('/api/websites/:websiteId/pages', findAllPages);
    app.get('/api/websites/:websiteId/pages/:pageId', findPageById);
    app.post('/api/websites/:websiteId/pages', createPage);
    app.delete('/api/websites/:websiteId/pages/:pageId', deletePage);
    app.put('/api/websites/:websiteId/pages/:pageId', updatePage);
}