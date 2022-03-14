import "./SearchInput.css";

const SearchInput = () => {
  return (
    <form className="SearchInput">
      <input
        type="text"
        name="search-movie"
        id="search-movie"
        placeholder="Search"
      />
      <button>Search Icon</button>
    </form>
  );
};

export default SearchInput;
