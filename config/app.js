require('dotenv').config();

const env = process.env;

module.exports.DB = Object.freeze({
    DATABASE_HOST: env.DATABASE_HOST,
    DATABASE_PORT: env.DATABASE_PORT,
    DATABASE_USERNAME: env.DATABASE_USERNAME,
    DATABASE_PASSWORD: env.DATABASE_PASSWORD,
    DATABASE_NAME: env.DATABASE_NAME
})