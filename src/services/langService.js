const axios = require('axios');
const { getHtmlTags } = require('./tagService.js');

const httpClient = axios.create();

const getLangStats = async () => {
  const { data } = await httpClient.get(process.env.LANG_STATS_URL);
  
  return data;
};

const getLangList = async () => {
  const tags = await getHtmlTags();
  return tags;
};

module.exports = {
  getLangStats,
  getLangList
};
