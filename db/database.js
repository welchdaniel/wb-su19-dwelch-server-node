module.exports = function() {
    const mongoose = require('mongoose');
    const databaseName = "whiteboard";
    var connectionString = 'mongodb://heroku_bq24lmtm:26969b4b6vqrb79811f06mb5l2@ds243607.mlab.com:43607/heroku_bq24lmtm';
    mongoose.connect(connectionString, { useNewUrlParser: true });
}