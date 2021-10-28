const { DataTypes, Model, Sequelize } = require('sequelize');
const db = require('../config/database')
const sequelize = db.sequelize()

class Directory extends Model { }

const fields = {
    label: {
        field: 'label',
        type: Sequelize.STRING,
        allowNull: false
    },
    parentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Directory,
            key: 'id'
        },
        allowNull: true,
    },

}

Directory.init(
    fields
    , {
        sequelize, timestamps: true, modelName: 'directory',
    })

module.exports = Directory;