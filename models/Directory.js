const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/database')

class Directory extends Model { }

Directory.init({
    label: {
        type: DataTypes.String,
        allowNull: false
    },
    parent_id: {
        
    }
})