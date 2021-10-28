const { Sequelize } = require('sequelize');
const { DB } = require('../config/app')

const sequelize = new Sequelize(DB.DATABASE_NAME, DB.DATABASE_USERNAME, DB.DATABASE_PASSWORD, {
    host: DB.DATABASE_HOST,
    port: DB.DATABASE_PORT,
    dialect: 'mysql'
});

module.exports = sequelize;