import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2024</p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      <p>
        Powered by{' '}
        <a href="https://opentdb.com/" target="_blank">
          Open Trivia API
        </a>
      </p>
    </footer>
  );
};

export default Footer;
