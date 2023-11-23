import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { IoLogoAmazon } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { motion, useInView, useAnimation } from "framer-motion";

const BookInfo = () => {
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      variants={{
        visible: { opacity: 1, y: 0 },
      }}
      animate={controls}
      transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
      className="px-10 mid:pr-[410px] tablet:pr-0 tablet:px-5 tablet:mx-auto tablet:text-center tablet:pt-10"
    >
      <p className="px-4 py-2 text-grey-light dark:text-grey border border-border-light dark:border-border-dark rounded-full w-fit tablet:mx-auto">
        {t("work.myBook")}
      </p>
      <h3 className="text-6xl tablet:text-4xl max-w-3xl font-medium leading-tight my-4">
        <span>{t("work.bookHeader.1")}</span>{" "}
        <span className="book-text-gradient">{t("work.bookHeader.2")}</span>
      </h3>
      <p className="text-lg tablet:text-base text-grey-light dark:text-grey max-w-2xl line-clamp-2 overflow-hidden text-ellipsis mb-7 tablet:mx-auto">
        {t("work.bookDescription")}
      </p>
      <a
        href="https://www.amazon.de/dp/B0CMC5MSR4?ref_=cm_sw_r_cp_ud_dp_8QR1SEX70ZWV9B297KKF"
        target="_blank"
        rel="noreferrer"
        className="flex-center gap-10 bg-background-dark dark:bg-background-light text-white dark:text-black px-4 py-2 rounded-full w-fit tablet:mx-auto"
      >
        <div className="flex-center gap-2 hover:gap-3 duration-300">
          <div className="flex-center gap-2">
            <span className="text-xl">
              <IoLogoAmazon />
            </span>
            <span>{t("work.getYourCopy")}</span>
          </div>
          <span>
            <IoMdArrowForward />
          </span>
        </div>
      </a>
    </motion.div>
  );
};

export default BookInfo;
