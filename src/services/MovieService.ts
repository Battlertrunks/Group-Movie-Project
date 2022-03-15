import axios from "axios";
import Params from "../models/Params";
import GenreResponse from "../models/GenreResponse";
import MovieCardResponse from "../models/MovieCardResponse";
import MovieDetailsResponse from "../models/MovieDetailsResponse";

const key: string = process.env.REACT_APP_MDB_KEY || "";

// newParams.api

export const getFilteredMovies = (
  newParams: Params
): Promise<MovieCardResponse> => {
  newParams.api_key = key;
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: newParams,
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

export const getMovieBySearch = (query: string): Promise<MovieCardResponse> => {
  // console.log(query);
  return axios
    .get(`https://api.themoviedb.org/3/search/movie`, {
      params: { api_key: key, query },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const getTrendingMovies = (): Promise<MovieCardResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/trending/movie/week", {
      params: { api_key: key },
    })
    .then((response) => response.data);
};

export const getGenres = (): Promise<GenreResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/genre/movie/list", {
      params: { api_key: key },
    })
    .then((response) => response.data);
};
