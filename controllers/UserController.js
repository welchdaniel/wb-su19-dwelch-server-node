const userService = require('../services/UserService');

module.exports = app => {
    createUser = (req, res) => {
        userService.createUser(req.body)
            .then(users => {
                res.send(users);
            })
    }

    findUserById = (req, res) => {
        userService.findUserById(req.params['userId'])
            .then(user => {
                res.send(user);
            });
    }

    findUserByCredentials = (req, res) => {
        userService.findUserByCredentials(req.body['username'], req.body['password'])
            .then(user => {
                res.send(user);
            });
    }

    findUserByUsername = (req, res) => {
        userService.findUserByUsername(req.body['username'])
            .then(user => {
                res.send(user);
            });
    }

    findAllUsers = (req, res) => {
        userService.findAllUsers()
            .then(users => {
                res.send(users);
            });
    }

    deleteUser = (req, res) => {
        userService.deleteUser(req.params['userId'])
            .then(status => res.send(status));
    }

    updateUser = (req, res) => {
        userService.updateUser(req.params['userId'], req.body)
            .then(status => {
                res.send(status);
            });
    }

    app.get('/api/users', findAllUsers);
    app.get('/api/users/:userId', findUserById);
    app.post('/api/users/login', findUserByCredentials);
    app.post('/api/users/register', findUserByUsername);
    app.post('/api/users', createUser);
    app.delete('/api/users/:userId', deleteUser);
    app.put('/api/users/:userId', updateUser);
}