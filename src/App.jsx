import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Home from "./components/layouts/Home.jsx";
import Future from "./components/layouts/Future.jsx";
import Presence from "./components/layouts/Presence.jsx";
import About from "./components/layouts/About.jsx";
import Explore from "./components/layouts/Explore.jsx";
import Services from "./components/layouts/Services.jsx";

import LanguagePopup from "./components/layouts/languagepopup.jsx";
import { useTranslation } from "react-i18next";

import TermsAndCondition from "./pages/TermsAndCondition.jsx";

function App() {
  const { t } = useTranslation();
  const location = useLocation();

  // Pages where BOTH navbar and footer should be hidden
  const hideLayoutOn = [
    "/terms-and-conditions",
    "/privacy-policy",
    "/seller-policy",
    "/payment-policy"
  ];

  const shouldHideLayout = hideLayoutOn.includes(location.pathname);

  return (
    <>
      {/* Only show language popup on main site */}
      {!shouldHideLayout && <LanguagePopup />}

      {/* Hide navbar on legal pages */}
      {!shouldHideLayout && <Navbar />}

      <Routes>
        {/* MAIN PAGE */}
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home title={t("welcome")} />
              </div>

              <div id="about">
                <About title={t("about")} />
              </div>

              <div id="services">
                <Services title={t("services")} />
              </div>

              <div id="explore">
                <Explore title={t("explore")} />
              </div>

              <div id="future">
                <Future title={t("future")} />
              </div>

              <div id="presence">
                <Presence title={t("presence")} />
              </div>
            </>
          }
        />

        {/* LEGAL PAGE */}
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
      </Routes>

      {/* Hide footer on legal pages */}
      {!shouldHideLayout && <Footer text={t("footer")} />}
    </>
  );
}

export default App;
