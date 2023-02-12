const axios = require('axios');
const fs = require('fs');

const httpClient = axios.create();

const getTags = async () => {
  try {
    let data = fs.readFileSync(`${__dirname}/../data/tags.json`, 'utf8');
    data = JSON.parse(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getHtmlTags = async () => {
  const tagData = await getTags();
  const technologies = tagData['technologies'];
  const imgTags = [];

  for (const technology of technologies) {
    const techTitle = technology['name'];
    const tagList = technology['list'];

    const techTags = [];

    for (const tag of tagList) {
      const url = tag['url'];
      const { data } = await httpClient.get(url);

      techTags.push(data);
    }
    imgTags.push({ title: techTitle, list: techTags});
  }
  return imgTags;
};

module.exports = {
  getTags,
  getHtmlTags
};
