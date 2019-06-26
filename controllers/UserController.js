const userService = require('../services/UserService');

module.exports = app => {
    register = (req, res) => {
        userService.createUser(req.body)
            .then(users => {
                res.send(users);
            })
    }

    profile = (req, res) => {
        userService.findUserById(req.body['userId'])
            .then(user => {
                res.send(user);
            });
    }

    login = (req, res) => {
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

    updateProfile = (req, res) => {
        userService.updateUser(req.body['userId'], req.body)
            .then(status => {
                res.send(status);
            });
    }

    app.get('/api/users', findAllUsers);
    app.get('/api/profile', profile);
    app.post('/api/login', login);
    app.post('/api/logout', logout);
    app.post('/api/users/register', findUserByUsername);
    app.post('/api/register', register);
    app.delete('/api/users/:userId', deleteUser);
    app.put('/api/profile', updateProfile);
}