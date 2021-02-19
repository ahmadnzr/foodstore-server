const mongoose = require('mongoose');

const { dbHost, dbUser, dbPort, dbPass, dbName, dbAuth } = require('../app/config');

mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=${dbAuth}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

const db = mongoose.connection;

module.exports = db;