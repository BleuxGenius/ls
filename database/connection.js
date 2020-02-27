const knex = require('knex');

const knexfile = require('../knexfile.js');

const env = process.env.DB_ENV || "development";
// can only pull the values from the knexfile i.e (development, testing, or production)
return knex(knexfile[env]);