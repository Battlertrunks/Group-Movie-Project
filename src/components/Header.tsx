import { Link } from "react-router-dom";
import "./Header.css";
import SearchInput from "./SearchInput";

const Header = () => {
  // The Links direct the user to the designated path.
  return (
    <header className="Header">
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/movie/watched">
              <button>Watched</button>
            </Link>
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
