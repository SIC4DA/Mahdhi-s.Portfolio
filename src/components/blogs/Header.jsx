import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        height: "calc(100vh - 200px)",
      }}
      className="pt-40 sticky top-[75px] mid:!h-fit mid:pt-0 mid:static"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
        className="text-6xl font-bold mb-4 mobile:text-3xl"
      >
        {t("blogs.blogs")}
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
        className="text-lg mobile:text-base text-grey-light dark:text-grey"
      >
        {t("blogs.description")}
      </motion.p>
    </div>
  );
};

export default Header;
