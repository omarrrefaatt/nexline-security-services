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
// @ts-expect-error StandingGuards is a JavaScript module without TypeScript declarations.
import StandingGuards from "./pages/services/StandingGuards.jsx";
// @ts-expect-error EventSecurity is a JavaScript module without TypeScript declarations.
import EventSecurity from "./pages/services/EventSecurity.jsx";
  // @ts-expect-error MobileSurveillance is a JavaScript module without TypeScript declarations.
import MobileSurveillance from "./pages/services/MobileSurveillance.jsx";
// @ts-expect-error MobilePatrols is a JavaScript module without TypeScript declarations.
import MobilePatrols from "./pages/services/MobilePatrols.jsx";
// @ts-expect-error FireWatch is a JavaScript module without TypeScript declarations.
import FireWatch from "./pages/services/FireWatch.jsx";
// @ts-expect-error FrontReceptionGuards is a JavaScript module without TypeScript declarations.
import FrontReceptionGuards from "./pages/services/FrontReceptionGuards.jsx";



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
        <Route path="/services/standing-guards" element={<StandingGuards />} />
        <Route path="/services/event-security" element={<EventSecurity />} />
        <Route path="/services/mobile-surveillance" element={<MobileSurveillance />} />
        <Route path="/services/mobile-patrols" element={<MobilePatrols />} />
        <Route path="/services/fire-watch" element={<FireWatch />} />
        <Route path="/services/front-reception-lobby-guards" element={<FrontReceptionGuards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
