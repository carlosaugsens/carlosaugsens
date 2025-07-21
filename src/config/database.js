require('dotenv').config()


module.exports = {
    dialect: process.env.DATABASE_DIALECT,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    define: {
        timestamps: true
    },
    dialectOptions: {
        useUTC: false
    },
    timezone: '-03:00'
}