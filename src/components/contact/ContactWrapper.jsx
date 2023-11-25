import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const ContactWrapper = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-large mx-auto px-5 grid grid-cols-2 gap-10 tablet:grid-cols-1">
      <div>
        <h2 className="font-semibold text-2xl mb-3">
          {t("contact.contactDescription.0")}
        </h2>
        <p className="mb-2">{t("contact.contactDescription.1")}</p>
        <p className="mb-2">{t("contact.contactDescription.2")}</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactWrapper;
