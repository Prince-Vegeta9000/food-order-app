import { LOGO_URL, NAV_ITEMS } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="logo" />
      <nav className="nav-items">
        {NAV_ITEMS.map((nav) => (
          <a href={nav.link} key={nav.name}>
            {nav.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
