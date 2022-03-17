import axios from "axios";
import Params from "../models/Params";
import GenreResponse from "../models/GenreResponse";
import MovieCardResponse from "../models/MovieCardResponse";
import MovieDetailsResponse from "../models/MovieDetailsResponse";
import PagesResponse from "../models/PagesResponse";

// Gets the key from a .env.local file to prevent theft of api key.
const key: string = process.env.REACT_APP_MDB_KEY || "";

// newParams.api

// Runs promise to bring back data of the filtered movies list from the API
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

// Runs promise to bring back data about the specific movie from the API
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

// Runs promise to bring back data of the search results from the API
export const getMovieBySearch = (
  query: string,
  page: string = "1"
): Promise<MovieCardResponse> => {
  // console.log(query);
  return axios
    .get(`https://api.themoviedb.org/3/search/movie`, {
      params: { api_key: key, query, page: page },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

// Runs promise to return the data of trending movies for the week from the API
export const getTrendingMovies = (): Promise<MovieCardResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/trending/movie/week", {
      params: { api_key: key },
    })
    .then((response) => response.data);
};

// Runs promise to return the data of all of the genres with their IDs and names.
export const getGenres = (): Promise<GenreResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/genre/movie/list", {
      params: { api_key: key },
    })
    .then((response) => response.data);
};

export const numberOfPagesAvail = (
  query: string,
  page: string = "1"
): Promise<PagesResponse> => {
  // console.log(query);
  return axios
    .get(`https://api.themoviedb.org/3/search/movie`, {
      params: { api_key: key, query, page: page },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const numberOfPagesAvailFilter = (
  page: string
): Promise<PagesResponse> => {
  // console.log(query);

  return axios
    .get(`https://api.themoviedb.org/3/discover/movie`, {
      params: { api_key: key, page: page },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};
