import { useTranslation } from "react-i18next";
import { MdArrowForward } from "react-icons/md";
import Socials from "./Socials";
import Preferences from "./Preferences";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background-dark dark:bg-background-light text-background-light dark:text-background-dark">
      <div className="p-10 py-20">
        <p className="uppercase text-xl mobile:text-lg mobile:text-center text-grey dark:text-grey-light mb-10">
          {t("footer.idea")}
        </p>
        <a
          href="mailto:mabrouk@mahdhi.com"
          className="text-7xl tablet:text-4xl mobile:justify-center mobile:mx-auto flex items-center gap-1 font-bold flex-wrap"
        >
          <h2 className="text-[#666f7a]">{t("footer.hello")}</h2>
          <h2>@mahdhi.com</h2>
          <div className="bg-gray p-4 rounded-full mobile:hidden text-black text-2xl duration-300 hover:-rotate-45">
            <MdArrowForward />
          </div>
        </a>
      </div>
      <div className="bg-grey dark:bg-grey-light h-[1px]" />
      <div className="p-10 pt-16 flex flex-col gap-10 mobile:justify-center">
        <Socials />
        <Preferences />
      </div>
    </footer>
  );
};

export default Footer;
