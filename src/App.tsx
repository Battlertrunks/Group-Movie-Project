import "./App.css";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import MovieGallery from "./components/MovieGallery";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import MovieDetailsRoute from "./components/MovieDetailsRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <FilterBar />
        <Routes>
          <Route path="/" element={<MovieGallery />} />
          <Route path="/search/movie" element={<MovieGallery />} />
          <Route path="/movie/:id" element={<MovieDetailsRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
