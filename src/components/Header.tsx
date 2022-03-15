import { Link } from "react-router-dom";
import "./Header.css";
import SearchInput from "./SearchInput";

const Header = () => {
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
