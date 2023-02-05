const loki = require('lokijs');

loki.prototype.loadDatabaseAsync = function(options) {
  return new Promise((resolve, reject) => this.loadDatabase(options, err => err ? reject(err) : resolve(null)))
}

const db = new loki('db.json');

const getCache = async (key) => {
  await db.loadDatabaseAsync({});

  const cache = db.getCollection('cache');
  const result = cache.findOne({ name: key });

  if (result && result['content']) {
    return result['content'];
  }
  return false;
};

const setCache = async (key, data) => {
  await db.loadDatabaseAsync({});

  const cache = db.getCollection('cache');

  const params = {
    name: key,
    content: data
  };

  cache.insert(params);

  db.saveDatabase();
};

module.exports = {
  getCache,
  setCache
};
