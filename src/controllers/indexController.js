const { jsonResponse } = require("../utils/common.js");

const index = async (request, reply) => {
  const statusCode = 200;
  const response = {
    message: 'API is running'
  };

  jsonResponse(reply, statusCode, response);
};

module.exports = { index };
