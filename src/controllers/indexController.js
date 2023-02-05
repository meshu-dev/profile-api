const { jsonResponse } = require("../utils/common.js");

const index = async (request, reply) => {
  const response = {
    message: 'Profile API is running'
  };

  jsonResponse(reply, response);
};

module.exports = { index };
