const { htmlResponse } = require("../utils/common.js");
const { getHtml } = require("../utils/template.js");
const { getCache, setCache } = require("../utils/cache.js");
const { getTechStats, getTechList } = require('../services/techService.js');

const getUsage = async (request, reply) => {
  const langUsageHtml = await getCache('langUsage');

  if (langUsageHtml) {
    htmlResponse(reply, langUsageHtml);
  } else {
    const langUsageHtml = await getTechStats();
    await setCache('langUsage', langUsageHtml);
  
    htmlResponse(reply, langUsageHtml);
  }
};

const getList = async (request, reply) => {
  const tagListHtml = await getCache('tagList');

  if (tagListHtml) {
    htmlResponse(reply, tagListHtml);
  } else {
    const langLists = await getTechList();
    const tagListHtml = await getHtml('lang-lists.ejs', { langLists: langLists });

    await setCache('tagList', tagListHtml);
  
    htmlResponse(reply, tagListHtml);
  }
};

module.exports = { getUsage, getList };
