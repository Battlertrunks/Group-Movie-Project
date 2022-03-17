// Our filter needs at least one of these strings in order to use filter search.
export default interface Params {
  api_key?: string;
  "vote_average.gte"?: string;
  "vote_average.lte"?: string;
  with_genres?: string;
  sort_by?: string;
}
