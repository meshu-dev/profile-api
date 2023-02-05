require('dotenv').config();

const fastify = require('fastify');
const initRouting = require('./config/routing.js');
const initView = require('./config/view.js');

const build = (opts = {}) => {
  const app = fastify(opts);
  
  initRouting(app);
  initView(app);

  return app;
};

module.exports = { build };
