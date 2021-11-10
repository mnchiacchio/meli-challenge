require("dotenv").config();

const DEVELOPMENT = require("./development");

let currentEnvironment = DEVELOPMENT;

module.exports = currentEnvironment;