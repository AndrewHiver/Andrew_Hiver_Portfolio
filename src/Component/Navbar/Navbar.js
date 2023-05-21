import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="liste">
        <a href="#" class="logo">Andrew Hiver.</a>
        <li className="items">
          <Link to="/about">
            <h4>About</h4>
          </Link>
        </li>
        <li className="items">
          <Link to="/resume">
            <h4>Resume</h4>{" "}
          </Link>
        </li>
        <li className="items">
          <Link to="/projects">
            <h4>Projects</h4>{" "}
          </Link>
        </li>
        <li className="items">
          <Link to="/other">
            <h4>Other</h4>{" "}
          </Link>
        </li>
        <li className="items">
          <Link to="/detail">
            <h4>Detail</h4>{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
