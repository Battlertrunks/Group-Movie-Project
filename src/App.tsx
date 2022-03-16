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
import Footer from "./components/Footer";

// Creating routes when the users go to specific elements.
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <FilterBar />
          <Routes>
            <Route path="/" element={<MovieGalleryRoute />} />
            <Route path="/discover/movie" element={<MovieGalleryRoute />} />
            <Route path="/search/movies" element={<MovieGalleryRoute />} />
            <Route path="/movie/:id" element={<MovieDetailsRoute />} />
            <Route path="/movie/watched" element={<MovieGalleryRoute />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
