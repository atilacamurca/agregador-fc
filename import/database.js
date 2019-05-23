require('dotenv').config()

const { Client } = require('pg')

// workaround <https://github.com/brianc/node-pg-types/issues/28>
var types = require('pg').types
types.setTypeParser(1700, 'text', parseFloat)

const client = new Client({
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

module.exports = { client }
