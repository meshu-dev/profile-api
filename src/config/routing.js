const indexRoutes = require('./../routes/index.js');
const langRoutes = require('./../routes/lang.js');
const statRoutes = require('./../routes/stat.js');

const initRouting = (app) => {
  app.register(indexRoutes);
  app.register(langRoutes, { prefix: '/lang' });
  app.register(statRoutes, { prefix: '/stats' });
};

module.exports = initRouting;
