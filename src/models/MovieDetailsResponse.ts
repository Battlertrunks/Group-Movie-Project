// Goes inside array to attain the genre names.
interface Name {
  name: string[];
}

// Must include these variables and array
export default interface MovieDetails {
  release_date: string;
  genres: Name[];
  runtime: number;
  overview: string;
  title: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  id: number;
}

//  genre: string;
//   title: string;
//   vote_average: number;
//   poster_path: string;
//   id?: number;
