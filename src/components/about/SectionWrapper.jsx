import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const SectionWrapper = ({ children, isWork }) => {
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
    <div className="max-w-medium mx-auto px-5">
      <div className="h-[2px] w-full relative bg-background-dark dark:bg-background-light">
        <motion.span
          initial={{
            right: 0,
          }}
          variants={{
            visible: {
              right: isWork ? "33.333333%" : "66.666667%",
            },
          }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          className="bg-background-light dark:bg-background-dark absolute top-1/2 -translate-y-1/2 p-3 text-sm font-bold capitalize"
        >
          {isWork ? t("about.aboutMe") : t("about.myPersonal")}
        </motion.span>
        <span className="absolute -bottom-44" ref={ref} />
      </div>
      <div className="w-full flex justify-between gap-10 mt-10 mobile:flex-col mobile:gap-5 mobile:items-center">
        {React.cloneElement(children, { controls })}
      </div>
    </div>
  );
};

export default SectionWrapper;
