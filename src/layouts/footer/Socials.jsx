// import React from 'react'
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  const { t } = useTranslation();
  const routes = [
    {
      name: t("nav.home"),
      path: "/",
    },
    {
      name: t("nav.about"),
      path: "/about",
    },
    {
      name: t("nav.blogs"),
      path: "/blogs",
    },
    {
      name: t("nav.contact"),
      path: "/contact",
    },
  ];
  const socials = [
    {
      name: "Github",
      icon: <FaGithub />,
      path: "https://github.com/mabroukmahdhi",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/mabrouk-mahdhi-990017238/",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      path: "https://twitter.com/mabrouk_mahdhi",
    },
  ];

  return (
    <div className="flex-between flex-wrap gap-5 mobile:justify-center">
      <ul className="flex-center gap-7 tablet:gap-5 flex-wrap">
        {routes.map((route, i) => (
          <li key={i}>
            <a
              href={route.path}
              className="hover:opacity-80 text-lg duration-300 transition-colors underline underline-offset-2"
            >
              {route.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex-center gap-7 tablet:gap-5 flex-wrap">
        {socials.map((social, i) => (
          <li key={i}>
            <a
              href={social.path}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 duration-300 transition-colors underline underline-offset-2 text-2xl"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
