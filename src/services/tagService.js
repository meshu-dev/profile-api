const fs = require('fs');

const getTags = async () => {
  try {
    let data = fs.readFileSync(`${__dirname}/../data/tags.json`, 'utf8');
    data = JSON.parse(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getTags
};
