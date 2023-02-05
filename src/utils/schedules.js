const { AsyncTask } = require('toad-scheduler');
const { clearCaches } = require('./cache.js');

const clearCache = async () => {
  console.log('Running clearCaches...');

  const cacheKeys = ['langUsage', 'tagList', 'weeklyStreak'];
  await clearCaches(cacheKeys);

  console.log('Finished clearCaches');
};

const clearCacheTask = new AsyncTask(
  'Clear cache task',
  clearCache
);

module.exports = {
  clearCacheTask
};
