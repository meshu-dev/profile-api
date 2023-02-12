const { htmlResponse, svgResponse } = require("../utils/common.js");
const { getHtml } = require("../utils/template.js");
const { getCache, setCache } = require("../utils/cache.js");
const { getTechStats, getTechList } = require('../services/techService.js');

const getUsage = async (request, reply) => {
  const langUsageHtml = await getCache('langUsage');

  if (langUsageHtml) {
    svgResponse(reply, langUsageHtml);
  } else {
    const langUsageHtml = await getTechStats();
    await setCache('langUsage', langUsageHtml);
  
    svgResponse(reply, langUsageHtml);
  }
};

const getList = async (request, reply) => {
  const includeDesc = request.query.desc === 'true' ? true : false;
  const cacheKey = includeDesc === true ? 'tagDescList' : 'tagList';

  const tagListHtml = await getCache(cacheKey);

  if (tagListHtml) {
    htmlResponse(reply, tagListHtml);
  } else {
    const techLists = await getTechList();
    const tagListHtml = await getHtml(
      'tech-lists.ejs',
      { includeDesc, techLists }
    );

    await setCache(cacheKey, tagListHtml);
  
    htmlResponse(reply, tagListHtml);
  }
};

module.exports = { getUsage, getList };
