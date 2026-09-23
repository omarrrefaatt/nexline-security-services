import { Link } from "react-router-dom";
import "../../components/navigation/navigation.css";

function Logo() {
  return (
    <Link to="/" className="logo">
      <div className="navbar__logo"></div>

      <span className="logo__text">
        <span className="logo__name">Nexline</span>
        <br />
        <span className="logo__tagline">
          Security Services
        </span>
      </span>
    </Link>
  );
}

export default Logo;