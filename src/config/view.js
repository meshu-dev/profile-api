const initView = (app) => {
  app.register(require("@fastify/view"), {
    engine: {
      ejs: require("ejs")
    },
  });
};

module.exports = initView;
