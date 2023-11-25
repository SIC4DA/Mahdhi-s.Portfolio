import { useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const useContact = () => {
  const { t } = useTranslation();
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const res = fetch("https://formspree.io/f/maylqkqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (res.status === 200) {
        toast.success(t("common.messageSuccess"));
        setContactData({ name: "", email: "", message: "" });
      } else {
        alert("Message failed to send.");
      }
    } catch (err) {
      toast.error(t("common.error"));
    }
  };

  return { contactData, handleChange, handleSubmit };
};

export default useContact;
