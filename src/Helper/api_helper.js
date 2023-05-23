import axios from "axios";

// let baseUrl =
//   "https://gnews.io/api/v4/top-headlines?category={categoryType}&apikey=7ca40e9252cb14173286ac908663e11f";

let baseUrl = "https://osmanabadreporter.com/wp-json/wp/v2/posts";

let headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  // apikey: "7ca40e9252cb14173286ac908663e11f",
  // category: "general",
};

const axiosApi = axios.create({
  baseURL: baseUrl,
});

const generalArticles = baseUrl.replace("{categoryType}", "general");

const technologyArticles = baseUrl.replace("{categoryType}", "technology");

// export const getGeneralArticles = async () => {
//   return await axiosApi.get(generalArticles, {
//     headers: headers,
//   });
// };

export const getGeneralArticles = async () => {
  return await axiosApi.get(baseUrl, {
    headers: headers,
  });
};

//export const getTechnologyArticles = get(technologyArticles);

async function get(url) {
  console.log("get function called : ", url);

  const data = await axiosApi.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      // apikey: "7ca40e9252cb14173286ac908663e11f",
      // category: "general",
    },
  });

  console.log("axios data : ", data);
  return data;
}
