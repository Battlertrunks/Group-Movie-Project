import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchInput.css";

const SearchInput = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/search/movie
    ?${new URLSearchParams({ term })}`);
  };

  return (
    <form className="SearchInput" onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        name="search-movie"
        id="search-movie"
        placeholder="Search"
        onChange={(e) => setTerm(e.target.value)}
      />
      <button>Search Icon</button>
    </form>
  );
};

export default SearchInput;
