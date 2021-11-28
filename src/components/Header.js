import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Mesto"/>
    </header>
  );
}

export default Header;