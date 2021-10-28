const { DataTypes, Model, Sequelize } = require('sequelize')
const db = require('../config/database')
const sequelize = db.sequelize()
const Directory = require('./Directory')

class Document extends Model { }

const fields = {
    label: {
        field: 'label',
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        field: 'content',
        type: Sequelize.STRING,
        allowNull: true,
    },
    parentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Document,
            key: 'id'
        },
        allowNull: true,
    },
    directoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Directory,
            key: 'id'
        },
        allowNull: true,
    }
}

Document.init(
    fields
    , {
        sequelize, timestamps: true, modelName: 'document'
    })

module.exports = Document;