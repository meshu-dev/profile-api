const { htmlResponse } = require("../utils/common.js");
const { getCache, setCache } = require("../utils/cache.js");
const { getWeeklyStreak } = require('../services/statService.js');

const getStreak = async (request, reply) => {
  const weeklyStreakHtml = await getCache('weeklyStreak');

  if (weeklyStreakHtml) {
    htmlResponse(reply, weeklyStreakHtml);
  } else {
    const weeklyStreakHtml = await getWeeklyStreak();
    await setCache('weeklyStreak', weeklyStreakHtml);
  
    htmlResponse(reply, weeklyStreakHtml);
  }
};

module.exports = { getStreak };
