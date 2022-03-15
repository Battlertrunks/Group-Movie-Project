import { Link } from "react-router-dom";
import "./Header.css";
import SearchInput from "./SearchInput";
import handSaw from "../Resources/hand-saw2.png";

const Header = () => {
  // The Links direct the user to the designated path.
  return (
    <header className="Header">
      <div className="header-bg-color">
        <Link className="logo" to="/">
          <h1>
            <img src={handSaw} alt="handSaw" />
            Sawddit
          </h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/movie/watched">
                <button>Watched</button>
              </Link>
            </li>
            {/* <li>
            <button>Favorites</button>
          </li> */}
          </ul>
        </nav>
      </div>
      <SearchInput />
    </header>
  );
};

export default Header;
