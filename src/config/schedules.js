const { fastifySchedulePlugin } = require('@fastify/schedule');
const { clearCacheJob } = require('../utils/cronjobs.js');

const initSchedules = (app) => {
  app.register(fastifySchedulePlugin);
  
  app.ready().then(() => {
    app.scheduler.addCronJob(clearCacheJob);
  });
};

module.exports = initSchedules;
