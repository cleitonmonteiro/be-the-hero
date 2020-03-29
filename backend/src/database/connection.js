const knex = require("knex");

const config = require("../../knexfile");

const configType =
  process.env.NODE_ENV === "test" ? config.test : config.development;

const connection = knex(configType);

module.exports = connection;
