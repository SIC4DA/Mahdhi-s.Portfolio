import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Email = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 1.3, ease: "backOut" }}
      // href="mailto:mabrouk@mahdhi.com"
      // target="_blank"
      // rel="noreferrer"
      style={{
        width: "clamp(fit-content, 200px, 200px)",
      }}
      className="px-7 py-3 text-center rounded-full text-lg mobile:text-sm border border-black dark:border-white block w-fit relative overflow-hidden email-btn"
    >
      <Link to="/contact">
        <p className="relative z-[1]">{t("nav.letsTalk")}</p>
        <div className="z-0 absolute w-full h-full top-full left-0 duration-300 ease-out rounded-full bg-background-dark dark:bg-background-light text-white dark:text-black flex-center" />
      </Link>
    </motion.div>
  );
};

export default Email;
