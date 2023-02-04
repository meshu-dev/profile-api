const { getUsage, getList } = require("../controllers/langController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/usage', getUsage);
  fastify.get('/list', getList);
  
  done();
};

module.exports = routes;
