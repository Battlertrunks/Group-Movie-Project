import "./Header.css";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="Header">
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <button>Watched</button>
          </li>
          <li>
            <button>Favorites</button>
          </li>
        </ul>
        <SearchInput />
      </nav>
    </header>
  );
};

export default Header;
