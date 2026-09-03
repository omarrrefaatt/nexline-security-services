import Navbar from "../navigation/Navbar.jsx";
import Footer from "./Footer.jsx";

function PageShell({ children }) {
  return (
    <div className="page-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PageShell;
