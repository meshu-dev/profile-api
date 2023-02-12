const { svgResponse } = require("../utils/common.js");
const { getCache, setCache } = require("../utils/cache.js");
const { getWeeklyStreak } = require('../services/statService.js');

const getStreak = async (request, reply) => {
  const weeklyStreakHtml = await getCache('weeklyStreak');

  if (weeklyStreakHtml) {
    svgResponse(reply, weeklyStreakHtml);
  } else {
    const weeklyStreakHtml = await getWeeklyStreak();
    await setCache('weeklyStreak', weeklyStreakHtml);
  
    svgResponse(reply, weeklyStreakHtml);
  }
};

module.exports = { getStreak };
