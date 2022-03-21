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
            <span className="sawd">Sawd</span> <span className="dit">dit</span>
            <img src={handSaw} alt="handSaw" />
          </h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/movie/watched">
                <button className="watchedButton">Saw It</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <SearchInput />
    </header>
  );
};

export default Header;
