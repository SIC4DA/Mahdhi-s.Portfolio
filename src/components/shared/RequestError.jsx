import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RequestError = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-fit text-center capitalize">
      <p className="mb-5 max-w-[430px] text-xl dark:text-white">
        {t("common.error")}
      </p>
      <Link
        to="/"
        className="bg-black dark:bg-background-light text-white dark:text-black  px-5 py-3 rounded-lg active:scale-90 hover:bg-black/80 duration-300"
      >
        {t("common.backToHome")}
      </Link>
    </div>
  );
};

export default RequestError;
