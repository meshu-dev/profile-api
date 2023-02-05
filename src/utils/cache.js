const loki = require('lokijs');

loki.prototype.loadDatabaseAsync = function(options) {
  return new Promise((resolve, reject) => this.loadDatabase(options, err => err ? reject(err) : resolve(null)))
}

const db = new loki('db.json');

const getCache = async (key) => {
  await db.loadDatabaseAsync({});

  const cache = db.getCollection('cache');
  const result = cache.findOne({ key });

  if (result && result['value']) {
    return result['value'];
  }
  return false;
};

const setCache = async (key, data) => {
  await db.loadDatabaseAsync({});

  const cache = db.getCollection('cache');

  const params = {
    key,
    value: data
  };

  cache.insert(params);

  db.saveDatabase();
};

const clearCache = async (key) => {
  await db.loadDatabaseAsync({});

  const cache = db.getCollection('cache');
  cache.findOne({ key }).remove();

  db.saveDatabase();
};

const clearCaches = async (keys) => {
  await db.loadDatabaseAsync({});

  const cache = db.getCollection('cache');

  for (const key of keys) {
    let result = cache.findOne({ key });

    console.log(`Cache key: ${key} | result: ${result}`);

    if (result) {
      cache.remove(result);
    }
  }

  db.saveDatabase();
};

module.exports = {
  getCache,
  setCache,
  clearCache,
  clearCaches
};
