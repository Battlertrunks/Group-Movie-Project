// MovieCard must have these variables.
export default interface MovieCard {
  genre: string;
  title: string;
  vote_average: number;
  poster_path: string;
  id: number;
  total_pages?: number;
}
