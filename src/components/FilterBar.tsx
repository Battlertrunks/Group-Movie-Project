import "./FilterBar.css";

const FilterBar = () => {
  return (
    <form className="FilterBar">
      <label htmlFor="sort-by">Sort by:</label>
      <select name="sort-by" id="sort-by">
        <option value="pop-decending">Popular decending</option>
        <option value="pop-ascending">Popular ascending</option>
      </select>
      <label htmlFor="genres">Genres:</label>
      <select name="genres" id="genres">
        <option value="action">Action</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="romance">Romance</option>
        <option value="adventure">Adventure</option>
      </select>
      <label htmlFor="rating">Rating:</label>
      <select name="rating" id="rating">
        <option value="10">10</option>
        <option value="9">Greater than 9</option>
        <option value="8">Greater than 8</option>
      </select>
    </form>
  );
};

export default FilterBar;
