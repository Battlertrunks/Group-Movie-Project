import axios from "axios";
import MovieCardResponse from "../models/MovieCardResponse";

const key: string = process.env.REACT_APP_MDB_KEY || "";

export const getTrendingMovies = (): Promise<MovieCardResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: { api_key: key },
    })
    .then((response) => {
      console.log(response.data);

      return response.data;
    });
};
