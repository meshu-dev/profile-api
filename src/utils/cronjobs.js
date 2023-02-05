const { CronJob } = require('toad-scheduler');
const { clearCacheTask } = require('./schedules.js');

const clearCacheJob = new CronJob(
  { cronExpression: process.env.CLEAR_CACHE_CRON_SCHEDULE },
  clearCacheTask,
  { preventOverrun: true }
);

module.exports = {
  clearCacheJob
};
