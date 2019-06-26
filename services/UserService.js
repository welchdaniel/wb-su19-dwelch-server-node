const userDao = require('../dao/UserDao');

createUser = (user) => {
    return userDao.createUser(user);
}

findUserById = (userId) => {
    return userDao.findUserById(userId);
}

findUserByCredentials = (username, password) => {
    return userDao.findUserByCredentials(username, password);
}

findUserByUsername = (username) => {
    return userDao.findUserByUsername(username);
}

findAllUsers = () => {
    return userDao.findAllUsers();
}

deleteUser = (userId) => {
    return userDao.deleteUser(userId);
}

updateUser = (userId, user) => {
    return userDao.updateUser(userId, user);
}

module.exports = {
    createUser,
    findAllUsers,
    findUserByCredentials,
    findUserByUsername,
    findUserById,
    deleteUser,
    updateUser
}
