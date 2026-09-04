import Home from "./pages/home/Home";
// @ts-expect-error Services is a JavaScript module without TypeScript declarations.
import Services from "./pages/services/Services.jsx";
// @ts-expect-error Quote is a JavaScript module without TypeScript declarations.
import Quote from "./pages/quote/Quote.jsx";
// @ts-expect-error About is a JavaScript module without TypeScript declarations.
import About from "./pages/about/About.jsx";
// @ts-expect-error Contact is a JavaScript module without TypeScript declarations.
import Contact from "./pages/contact/Contact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
