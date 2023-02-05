require('dotenv').config();

const fastify = require('fastify');
const initRouting = require('./config/routing.js');
const initCache = require('./config/cache.js');
const initSchedules = require('./config/schedules.js');

const build = (opts = {}) => {
  const app = fastify(opts);
  
  initCache();
  initRouting(app);
  initSchedules(app);

  return app;
};

module.exports = { build };
