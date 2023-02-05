const { htmlResponse } = require("../utils/common.js");
const { getLangStats, getLangList } = require('../services/langService.js');

const getUsage = async (request, reply) => {
  const statusCode = 200;
  const response = await getLangStats();

  htmlResponse(reply, statusCode, response);
};

const getList = async (request, reply) => {
  const statusCode = 200;
  const langLists = await getLangList();

  return reply.view("/templates/lang-lists.ejs", { langLists: langLists });
};

module.exports = { getUsage, getList };
