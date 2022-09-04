const Sequelize = require('sequelize');
const db = require('../config/db');
const connection = new Sequelize(db);

//models
const User = require('../models/user');
const Student = require('../models/student');

User.init(connection);
Student.init(connection);
module.exports = connection;