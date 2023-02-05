const loki = require('lokijs');

const initCache = () => {
  let db = new loki('db.json');
  
  db.addCollection('cache').insert([]);
  db.saveDatabase();
}

module.exports = initCache;
