const indexRoutes = require('./../routes/index.js');
const infoRoutes = require('./../routes/info.js');
const langRoutes = require('./../routes/tech.js');
const statRoutes = require('./../routes/stat.js');

const initRouting = (app) => {
  app.register(indexRoutes);
  app.register(infoRoutes, { prefix: '/info' });
  app.register(langRoutes, { prefix: '/tech' });
  app.register(statRoutes, { prefix: '/stats' });
};

module.exports = initRouting;
