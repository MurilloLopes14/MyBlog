///* Styles
import "./Navbar.css";

//* Components
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav id="navigation">
      <h2 className="logo">
        <Link to={`/`}>
          My<span>Blog</span>
        </Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/admin`}>Gerenciar</Link>
        </li>
        <li>
          <Link to={`/new`} className="new_btn">
            Novo Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};
