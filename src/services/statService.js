const axios = require('axios');

const getWeeklyStreak = async () => {
  const httpClient = axios.create({
    baseURL: process.env.STREAK_STATS_URL
  });
  const { data } = await httpClient.get();
  
  return data;
};

module.exports = {
  getWeeklyStreak
};
