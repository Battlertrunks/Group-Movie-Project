import axios from "axios";
import MovieCardResponse from "../models/MovieCardResponse";
import MovieDetailsResponse from "../models/MovieDetailsResponse";
import SingleMovie from "../models/SingleMovie";

const key: string = process.env.REACT_APP_MDB_KEY || "";

export const getTrendingMovies = (): Promise<MovieCardResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getMovieById = (id: string): Promise<MovieDetailsResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const getMovieBySearch = (
  search: string
): Promise<MovieCardResponse> => {
  return axios
    .get(`https://developers.themoviedb.org/3/search/movie`, {
      params: { api_key: key, q: search },
    })
    .then((response) => {
      return response.data;
    });
};
