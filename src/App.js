import react, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ApplicationDashboard from "./pages/ApplicationDashboard";
import ScholarshipCollection from "./pages/ScholarshipCollection";
import IntroducingCoPilot from "./pages/IntroducingCoPilot";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/application-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/scholarship-collection":
        title = "";
        metaDescription = "";
        break;
      case "/introducing-copilot":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/application-dashboard" element={<ApplicationDashboard />} />
      <Route
        path="/scholarship-collection"
        element={<ScholarshipCollection />}
      />
      <Route path="/introducing-copilot" element={<IntroducingCoPilot />} />
    </Routes>
  );
}
export default App;
