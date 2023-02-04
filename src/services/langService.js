const axios = require('axios');
const { getTags } = require('./tagService.js');

const httpClient = axios.create();

const getLangStats = async () => {
  const { data } = await httpClient.get(process.env.LANG_STATS_URL);
  
  return data;
};

const getLangList = async () => {
  const url = await getTags();
  
  console.log('TAG', url);

  return 'AAA';
};

module.exports = {
  getLangStats,
  getLangList
};
