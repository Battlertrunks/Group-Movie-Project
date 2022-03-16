import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchInput.css";

const SearchInput = () => {
  // Sets up the useState to get the query
  const [query, setQuery] = useState("");
  // stores the useNavigate items/values to use.
  const navigate = useNavigate();
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault(); // Stops reload
    // Navigates to this path with the search query value
    navigate(`/search/movies?${new URLSearchParams({ query })}`);
  };

  // Displays the search bar to the user:
  return (
    <form className="SearchInput" onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        name="search-movie"
        id="search-movie"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchInput;
