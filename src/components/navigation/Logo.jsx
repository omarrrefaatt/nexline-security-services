import  "../../components/navigation/navigation.css";
function Logo() {
  return (
    <a href="/" className="logo">
      <div className="navbar__logo"></div>
      <span className="logo__text">
        <span className="logo__name">Nexline</span>
        <br />
        <span className="logo__tagline">Security Services</span>
      </span>
    </a>
  );
}

export default Logo;
