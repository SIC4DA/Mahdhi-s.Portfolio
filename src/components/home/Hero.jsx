import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Email from "./Email";
import mabrouk from "../../assets/images/mabrouk.webp";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-large mx-auto px-5 mt-16">
      <div className="text-8xl mid:text-6xl tablet:text-4xl mobile:text-[1.6rem] font-extrabold">
        <div className="flex items-center duration-300 mobile:flex-wrap">
          <motion.div
            initial={{ width: 0, opacity: 0, marginRight: 0 }}
            animate={{ width: 200, opacity: 1, marginRight: 10 }}
            transition={{ duration: 0.3, delay: 1.4, ease: "easeIn" }}
            className="h-[75px] tablet:h-[60px] mobile:h-[45px]  bg-grey duration-300 rounded-lg relative"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.7, ease: "easeIn" }}
              src={mabrouk}
              loading="lazy"
              draggable="false"
              alt="Mabrouk Mahdhi"
              className="absolute block  bottom-0 left-1/2 -translate-x-1/2 w-[100px] tablet:w-[80px] mobile:w-[60px]"
            />
          </motion.div>
          <div className="h-[96px] mid:h-[60px] tablet:h-[40px] mobile:h-[32px] w-full overflow-hidden relative">
            <motion.h1
              initial={{ top: 96 }}
              animate={{ top: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="absolute text-grey-light dark:text-grey uppercase"
            >
              Mabrouk Mahdhi
            </motion.h1>
          </div>
        </div>
        <div className="h-[96px] mid:h-[60px] tablet:h-[40px] mobile:h-[32px] w-full overflow-hidden relative">
          <motion.h2
            initial={{ top: 96 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            className="absolute"
          >
            {t("hero.role")}
          </motion.h2>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
        className="text-4xl mid:text-2xl tablet:text-lg mobile:text-base font-medium max-w-3xl my-10 mobile:my-7 leading-tight "
      >
        {t("hero.description")}
      </motion.p>
      <Email />
    </div>
  );
};

export default Hero;
