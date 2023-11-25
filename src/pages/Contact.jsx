import { useTranslation } from "react-i18next";
import ContactWrapper from "../components/contact/ContactWrapper";
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-large text-center mx-auto px-5 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
          className="mb-0"
        >
          {t("contact.contactMe")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
          style={{
            fontSize: "clamp(2rem, 9vw, 7rem)",
          }}
          className="font-semibold uppercase"
        >
          {t("contact.getInTouch")}
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
      >
        <ContactWrapper />
      </motion.div>
    </section>
  );
};

export default Contact;
