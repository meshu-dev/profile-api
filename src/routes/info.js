const { getAbout } = require("../controllers/infoController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/about', getAbout);
  
  done();
};

module.exports = routes;
