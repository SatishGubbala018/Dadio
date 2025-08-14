import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import ContactPage from "./pages/ContactPage.jsx/ContactPage.jsx";
import ChildSafetyPolicy from "./pages/ChildSafteyPolicy/ChildSafetyPolicy.jsx";
import About from "./pages/About/About.jsx";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <CSSTransition
        key={location.pathname}
        classNames="scale-fade"
        timeout={500}
      >
        <div>
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
           
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/child-safety-policy"
              element={<ChildSafetyPolicy />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </CSSTransition>
    </div>
  );
};

export default App;
