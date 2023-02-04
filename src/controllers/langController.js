const { htmlResponse } = require("../utils/common.js");
const { getLangStats, getLangList } = require('../services/langService.js');

const getUsage = async (request, reply) => {
  const statusCode = 200;
  const response = await getLangStats();

  htmlResponse(reply, statusCode, response);
};

const getList = async (request, reply) => {
  const statusCode = 200;
  const response = await getLangList();

  htmlResponse(reply, statusCode, response);
};

module.exports = { getUsage, getList };
