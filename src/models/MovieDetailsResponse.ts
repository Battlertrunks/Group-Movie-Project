export default interface MovieDetails {
  genre: string[];
  title: string;
  vote_average: number;
  poster_path: string;
  id?: number;
  overview: string;
  runtime: number;
  release_date: string;
}

//   https://api.themoviedb.org/3/movie/{movieID}?api_key....
