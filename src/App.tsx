import "./App.css";
import FilterBar from "./components/FilterSearchBar";
import Header from "./components/Header";
import MovieGalleryRoute from "./components/MovieGalleryRoute";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import MovieDetailsRoute from "./components/MovieDetailsRoute";
import WatchedMovieGallery from "./components/WatchedMovieGalleryRoute";

// Creating routes when the users go to specific elements.
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <FilterBar />
        <Routes>
          <Route path="/" element={<MovieGalleryRoute />} />
          <Route path="/discover/movie" element={<MovieGalleryRoute />} />
          <Route path="/search/movies" element={<MovieGalleryRoute />} />
          <Route path="/movie/:id" element={<MovieDetailsRoute />} />
          <Route path="/movie/watched" element={<WatchedMovieGallery />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
