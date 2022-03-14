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
