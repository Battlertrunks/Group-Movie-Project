import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Link to="/">
        <p>Sawddit</p>
      </Link>
      <ul className="icon-list">
        <li>
          <a href="#">
            {" "}
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <i className="fa-brands fa-apple"></i>
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <i className="fa-brands fa-android"></i>
          </a>
        </li>
      </ul>
      <Link to="/">
        <p>
          <i className="fa-solid fa-copyright"></i> 2022 Sawddit inc.
        </p>
      </Link>
    </div>
  );
};

export default Footer;
