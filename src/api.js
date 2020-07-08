import axios from "axios";

const APIKEY = "c2b0496873fe4f9c8a54ec24009b07e5";

export const getLatestNews = async () => {
  const {
    data: { articles }
  } = await axios.get(
    `http://newsapi.org/v2/top-headlines?country=kr&apiKey=${APIKEY}`
  );
  return articles;
};

export const getSearchNews = async keyword => {
  const {
    data: { articles }
  } = await axios.get(
    `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${APIKEY}`
  );
  return articles;
};
