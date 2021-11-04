const { Model, Sequelize } = require('sequelize')
const db = require('../config/database')
const sequelize = db.sequelize()

class Document extends Model { }

const fields = {
    label: {
        field: 'label',
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        field: 'content',
        type: Sequelize.TEXT('long'),
        allowNull: true,
    },
}

Document.init(
    fields
    , {
        sequelize, timestamps: true, modelName: 'document'
    })

module.exports = Document;