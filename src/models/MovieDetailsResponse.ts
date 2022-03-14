import MovieCard from "./MovieCard";

interface Name {
  name: string[];
}

export default interface MovieDetails {
  release_date: string;
  genres: Name[];
  runtime: number;
  overview: string;
  title: string;
  vote_average: number;
  poster_path: string;
  id: number;
}

//  genre: string;
//   title: string;
//   vote_average: number;
//   poster_path: string;
//   id?: number;
