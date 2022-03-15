import { ReactNode, useState } from "react";
import MovieCard from "../models/MovieCard";

interface Props {
  children: ReactNode;
}

const MovieContextProvider = ({ children }: Props) => {
  const [movies, setMovies] = useState<MovieCard[]>([]);
};
