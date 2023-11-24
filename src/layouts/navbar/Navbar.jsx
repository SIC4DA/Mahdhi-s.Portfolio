import Logo from "./Logo";
import { useTranslation } from "react-i18next";
import "../../styles/nav.css";
// import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/dist";
import ThemeSwitcher from "../../components/shared/ThemeSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <header
      // style={{ backdropFilter: "blur(64px)" }}
      className="py-5 sticky top-0 bg-background-light dark:bg-background-dark z-[1]"
    >
      <nav className="flex-between tablet:flex-col gap-7 max-w-large mx-auto px-5">
        <Logo />
        <div className="flex items-center gap-24 tablet:justify-between tablet:w-full tablet:gap-5">
          {/* <Link
            to="/contact"
            className="px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-black dark:border-white rounded-full flex-center gap-2 hover:gap-3 font-semibold active:scale-95 duration-300"
          >
            <span>{t("nav.letsTalk")}</span>
            <IoArrowForwardOutline className="text-xl" />
          </Link> */}
          <div className="flex-center gap-3 text-lg tablet:text-base">
            <Link
              className="route relative"
              aria-current={pathname?.includes("/blogs") && "page"}
              to="/blogs"
            >
              {t("nav.blogs")},
            </Link>
            <Link
              className="route relative"
              aria-current={pathname?.includes("/about") && "page"}
              to="/about"
            >
              {t("nav.about")},
            </Link>
            <Link
              className="route relative"
              aria-current={pathname?.includes("/contact") && "page"}
              to="/contact"
            >
              {t("nav.contact")}
            </Link>
          </div>
          <ThemeSwitcher />
          {/* <a
            href="mailto:mabrouk@mahdhi.com"
            className="font-medium text-lg tablet:text-base flex-center"
          >
            <div className="relative h-9 email overflow-hidden duration-1000">
              mabrouk@mahdhi.com
            </div>
          </a> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
