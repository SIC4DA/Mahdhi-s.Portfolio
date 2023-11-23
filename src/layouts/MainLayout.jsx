import { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom/dist";
import { useTranslation } from "react-i18next";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const MainLayout = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const userLang = useMemo(() => localStorage.getItem("lang"), []);
  useEffect(() => {
    const lng = "en";
    if (!userLang) {
      localStorage.setItem("lang", lng);
    }
    i18n.changeLanguage(userLang);
  }, [i18n, userLang]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
