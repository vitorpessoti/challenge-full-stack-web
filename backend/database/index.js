const Sequelize = require('sequelize');
const db = require('../config/db');
const connection = new Sequelize(db);

//models
const User = require('../models/user');

User.init(connection);
module.exports = connection;