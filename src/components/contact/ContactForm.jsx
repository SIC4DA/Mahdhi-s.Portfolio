import { useTranslation } from "react-i18next";
import useContact from "../../hooks/useContact";

const ContactForm = () => {
  const { t } = useTranslation();
  const { contactData, handleChange, handleSubmit } = useContact();

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">{t("contact.name")}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
          className="px-4 py-3 bg-transparent border-b border-border-light dark:border-border-dark"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">{t("contact.email")}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
          className="px-4 py-3 bg-transparent border-b border-border-light dark:border-border-dark"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">{t("contact.message")}</label>
        <textarea
          id="message"
          name="message"
          value={contactData.message}
          onChange={handleChange}
          className="px-4 py-3 bg-transparent resize-y border-b border-border-light dark:border-border-dark focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-black dark:bg-background-light text-white dark:text-black  font-semibold py-3 rounded-md duration-300 hover:bg-black/90 active:scale-95"
      >
        {t("contact.send")}
      </button>
    </form>
  );
};

export default ContactForm;
