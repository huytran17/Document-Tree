require('dotenv').config();

const env = process.env;

module.exports.DB = Object.freeze({
    DATABASE: env.DATABASE || 'mysql',
    DATABASE_HOST: env.DATABASE_HOST || 'localhost',
    DATABASE_PORT: env.DATABASE_PORT || 3306,
    DATABASE_USERNAME: env.DATABASE_USERNAME || 'root',
    DATABASE_PASSWORD: env.DATABASE_PASSWORD || '',
    DATABASE_NAME: env.DATABASE_NAME || 'folder_tree',
    DATABASE_MIN_POOL: env.DATABASE_MIN_POOL || 0,
    DATABASE_MAX_POOL: env.DATABASE_MAX_POOL || 10,
    DATABASE_ACQUIRE: env.DATABASE_ACQUIRE || 30000,
    DATABASE_IDLE: env.DATABASE_IDLE || 10000
})