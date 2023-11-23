import { useTranslation } from "react-i18next";
import { IoMdArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const Work = ({ children }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 1.3, ease: "easeOut" }}
      className="max-w-large mx-auto px-5 mt-44 mb-10"
    >
      <div className="flex-between text-lg mb-10">
        <div>({t("work.myWork")})</div>
        <a href="#book" className="flex-center gap-1">
          <span>{t("work.discover")}</span>
          <span className="text-xl">
            <IoMdArrowDown />
          </span>
        </a>
      </div>
      {children}
    </motion.div>
  );
};

export default Work;
