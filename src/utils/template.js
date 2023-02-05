const fs = require('fs');
const ejs = require('ejs');

const getContent = async (template) => {
  try {
    let content = fs.readFileSync(`${__dirname}/../../templates/${template}`, 'utf8');
    return content;
  } catch (err) {
    console.error(err);
  }
};

const getHtml = async (template, params) => {
  const pageContent = await getContent(template);
  const html = ejs.render(pageContent, params);

  return html;
};

module.exports = {
  getHtml
};
