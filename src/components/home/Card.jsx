// import { useTranslation } from "react-i18next";

const Card = ({ card }) => {
  // const { t } = useTranslation(); h-[250px]

  return (
    <div
      dir="ltr"
      className="w-[385px] tablet:w-[310px]  rounded-xl overflow-hidden border border-border-light dark:border-border-dark select-none flex flex-col justify-between"
    >
      <a href={card.url} target="_blank" rel="noreferrer">
        <div className="h-[14em] w-full overflow-hidden rounded-b-xl">
          <img
            src={card?.image}
            alt="blog image"
            className="w-full h-full object-cover hover:scale-105 duration-300 rounded-xl hover:brightness-75"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <h3
            title={card?.title}
            className="font-semibold text-lg mb-3 line-clamp-2"
          >
            {card?.title}
          </h3>
          <p
            title={card?.description}
            className="text-sm text-grey-light dark:text-grey line-clamp-2"
          >
            {card?.description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
