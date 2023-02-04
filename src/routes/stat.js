const { getStreak } = require("../controllers/statController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/streak', getStreak);
  
  done();
};

module.exports = routes;
