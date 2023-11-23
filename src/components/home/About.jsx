import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="max-w-medium mx-auto px-5 my-24 flex-between gap-10 flex-wrap">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        variants={{
          visible: { opacity: 1, y: 0 },
        }}
        animate={controls}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h3 className="font-bold text-6xl leading-tight tablet:text-3xl">
          {t("aboutSection.header")}
        </h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={controls}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
          ref={ref}
          className="text-grey-light dark:text-grey text-lg my-5 tablet:text-base"
        >
          {t("aboutSection.description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={controls}
          transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
        >
          <Link
            to="/about"
            className="flex-center gap-2 w-fit  hover:gap-4 hover:bg-background-dark hover:text-white hover:dark:bg-background-light hover:dark:text-black d duration-300 border border-black dark:border-white px-6 py-4 tablet:text-sm tablet:py-2   rounded-full font-semibold"
          >
            <span>{t("aboutSection.aboutMe")}</span>
            <span className="text-xl">
              <IoMdArrowForward />
            </span>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, gap: 0 }}
        variants={{
          visible: { opacity: 1, gap: "28px" },
        }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        className="flex flex-col flex-wrap self-end text-grey-light dark:text-grey experience-list"
        dir="rtl"
      >
        <span>C#</span>
        <span>NET Core.</span>
        <span>ASP.NET MVC</span>
        <span>NET-Framework.</span>
      </motion.div>
    </div>
  );
};

export default About;
