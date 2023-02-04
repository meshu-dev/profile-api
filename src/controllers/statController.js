const { htmlResponse } = require("../utils/common.js");
const { getWeeklyStreak } = require('../services/statService.js');

const getStreak = async (request, reply) => {
  const statusCode = 200;
  const response = await getWeeklyStreak();

  htmlResponse(reply, statusCode, response);
};

module.exports = { getStreak };
