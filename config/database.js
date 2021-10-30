'use strict';

const Sequelize = require('sequelize');
const { DB } = require('./app')

class Database {
    constructor() {
        this._sequelize = new Sequelize(DB.DATABASE_NAME, DB.DATABASE_USERNAME, DB.DATABASE_PASSWORD, {
            host: DB.DATABASE_HOST,
            port: DB.DATABASE_PORT,
            dialect: DB.DATABASE,
            pool: {
                max: parseInt(DB.DATABASE_MAX_POOL),
                min: parseInt(DB.DATABASE_MIN_POOL),
                acquire: parseInt(DB.DATABASE_ACQUIRE),
                idle: parseInt(DB.DATABASE_IDLE),
            }
        })
    }

    async connect() {
        return await this._sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.')
            })
            .catch(error => {
                console.error('Unable to connect to the database:', error)
            })
    }

    sequelize() {
        return this._sequelize
    }

    async transaction() {
        const t = await this._sequelize.transaction()

        return t
    }
}

const db = new Database()

module.exports = db