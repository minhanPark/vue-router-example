import axios from "axios";

const APIKEY = "c2b0496873fe4f9c8a54ec24009b07e5";

export const getLatestNews = () => {
  return axios.get(
    `http://newsapi.org/v2/top-headlines?country=kr&apiKey=${APIKEY}`
  );
};

export const getSearchNews = keyword => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${APIKEY}`
  );
};
