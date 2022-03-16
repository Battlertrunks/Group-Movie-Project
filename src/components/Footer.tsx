import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <p>Sawddit</p>
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
      <p>
        <i className="fa-solid fa-copyright"></i> 2022 Sawddit inc.
      </p>
    </div>
  );
};

export default Footer;
