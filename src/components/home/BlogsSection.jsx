import blogs from "../../data/blogs.json";
import { useEffect, useRef } from "react";
import BlogsCarousel from "./BlogsCarousel";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const BlogsSection = () => {
  const { t } = useTranslation();
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const carousels = [
    {
      dir: "ltr",
      x: "100%",
      delay: 0.2,
      isRef: false,
      data: blogs?.slice(0, 6) || [],
    },
    {
      dir: "rtl",
      x: "-100%",
      delay: 0.3,
      isRef: true,
      data: blogs?.slice(7, 13) || [],
    },
  ];

  return (
    <div className="mt-60 mb-20 flex flex-col gap-5">
      <div className="max-w-large mx-auto w-full px-5">
        <h3 className="font-bold text-5xl leading-tight tablet:text-2xl">
          {t("blogsSection.myBlogs")}
        </h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={controls}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
          ref={ref}
          className="text-grey-light dark:text-grey text-lg mt-3 mb-5 tablet:text-base"
        >
          {t("blogsSection.description")}
        </motion.p>
      </div>
      {carousels.map((carousel, i) => (
        <motion.div
          key={i}
          dir={carousel.dir}
          ref={carousel.isRef ? ref : null}
          initial={{ opacity: 0, x: carousel.x }}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}
          animate={controls}
          transition={{ duration: 0.4, delay: carousel.delay, ease: "easeOut" }}
        >
          <BlogsCarousel blogs={carousel?.data} />
        </motion.div>
      ))}
    </div>
  );
};

export default BlogsSection;
