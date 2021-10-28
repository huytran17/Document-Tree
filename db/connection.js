const sequelize = require('./database')

module.exports = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log(sequelize);
        console.error('Unable to connect to the database:', error);
    }
}