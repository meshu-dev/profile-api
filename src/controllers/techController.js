const nodeHtmlToImage = require('node-html-to-image');
const { htmlResponse, svgResponse, pngResponse } = require("../utils/common.js");
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
  const useImg = request.query.img === 'true' ? true : false;

  const cacheKey = useImg === true ? 'tagListImg' : 'tagList';
  const isCached = await getListCachedResponse(reply, cacheKey);

  if (isCached === false) {
    const techLists = await getTechList();

    let tagListHtml = await getHtml(
      'tech-lists.ejs',
      { includeDesc, techLists }
    );

    if (useImg === true) {
      const image = await getListImg(cacheKey, tagListHtml);
      pngResponse(reply, image);
    } else {
      await setCache(cacheKey, tagListHtml);
      htmlResponse(reply, tagListHtml);
    }
  }
};

const getListCachedResponse = async (reply, cacheKey) => {
  const tagListCache = await getCache(cacheKey);

  if (tagListCache) {
    if (cacheKey === 'tagListImg') {
      pngResponse(reply, Buffer.from(tagListCache, 'base64'));
    } else {
      htmlResponse(reply, tagListCache);
    }
    return true;
  }
  return false;
};

const getListImg = async (cacheKey, tagListHtml) => {
  tagListHtml = await getHtml(
    'tech-lists-img.ejs',
    { content: tagListHtml }
  );

  const image = await nodeHtmlToImage({
    html: tagListHtml
  });

  await setCache(cacheKey, image.toString('base64'));
  return image;
};

module.exports = { getUsage, getList };
