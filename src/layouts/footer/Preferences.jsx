// import React from "react";

import { useTranslation } from "react-i18next";

const Preferences = () => {
  const { i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const userLang = localStorage.getItem("lang");

  return (
    <div className="flex-between flex-wrap gap-5 mobile:justify-center">
      <div className="flex-center gap-7">
        <button
          onClick={() => {
            i18n.changeLanguage("en");
            localStorage.setItem("lang", "en");
          }}
          style={{ textDecoration: userLang === "en" ? "underline" : "none" }}
          className="hover:opacity-80 duration-300 transition-colors underline-offset-2 text-lg"
        >
          En
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("de");
            localStorage.setItem("lang", "de");
          }}
          style={{ textDecoration: userLang === "de" ? "underline" : "none" }}
          className="hover:opacity-80 duration-300 transition-colors underline-offset-2 text-lg"
        >
          De
        </button>
      </div>
      <p className="text-grey dark:text-grey-light">
        ©{currentYear} Mabrouk Mahdhi. All Rights Reserved.
      </p>
    </div>
  );
};

export default Preferences;
