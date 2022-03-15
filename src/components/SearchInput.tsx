import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchInput.css";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/search/movie?${new URLSearchParams({ query })}`);
  };

  return (
    <form className="SearchInput" onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        name="search-movie"
        id="search-movie"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search Icon</button>
    </form>
  );
};

export default SearchInput;
