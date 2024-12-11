import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>

        <li>
          <Link to="/about">Rules</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
