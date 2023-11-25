import { useTranslation } from "react-i18next";
import cover from "../../assets/images/mabrouk-cover.jpeg";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-large mx-auto px-5 w-full">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="font-bold text-6xl uppercase mb-5"
      >
        {t("about.learnAbout")}
      </motion.h1>
      <div className="w-full overflow-hidden rounded-xl h-[600px]">
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
            ease: "easeInOut",
          }}
          src={cover}
          alt="mabrouk cover"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutMe;
