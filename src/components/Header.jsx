import NavBar from './NavBar';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">Quizzy</div>
        {<NavBar />}
      </div>
    </header>
  );
};

export default Header;
