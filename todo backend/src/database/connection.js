const knex = require('knex')
const config = require('./knexfile')
const knexInstance = knex(config[process.env.ENVIORNMENT])
module.exports = knexInstance;