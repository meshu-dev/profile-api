const { htmlResponse } = require("../utils/common.js");
const { getHtml } = require("../utils/template.js");

const getAbout = async (request, reply) => {
  const aboutHtml = await getHtml('about.ejs');
  htmlResponse(reply, aboutHtml);
};

module.exports = { getAbout };
