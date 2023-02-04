require('dotenv').config();

const fastify = require('fastify');
const initRouting = require('./config/routing.js');

const build = (opts = {}) => {
  const app = fastify(opts);
  
  initRouting(app);

  return app;
};

module.exports = { build };
