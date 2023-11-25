import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import mabrouk_first from "../../assets/images/mabrouk2.webp";

const WorkSection = ({ controls }) => {
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <div className="w-fit max-w-3xl leading-relaxed">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          variants={{ visible: { opacity: 1, y: 0 } }}
          animate={controls}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="text-xl font-semibold uppercase mb-3"
        >
          {t("about.careerHeader")}
        </motion.h2>
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            variants={{ visible: { opacity: 1, y: 0 } }}
            animate={controls}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.2,
              ease: "easeInOut",
            }}
            key={index}
            className={index <= 1 ? "mb-4" : ""}
          >
            {t(`about.career.${index + 1}`)}
          </motion.p>
        ))}
      </div>
      <div className="w-[400px] aspect-square tablet:w-[300px] mobile:w-full mobile:max-h-[500px]">
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          variants={{ visible: { opacity: 1, y: 0 } }}
          animate={controls}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeInOut",
          }}
          src={mabrouk_first}
          className="object-cover mobile:object-top w-full h-full "
          loading="lazy"
          alt="mabrouk"
        />
      </div>
    </>
  );
};

export default WorkSection;
