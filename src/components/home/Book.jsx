import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import bookCover from "../../assets/images/book.webp";

const Book = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="h-full">
      <div className="h-full w-[500px] mid:w-full mid:h-[400px] bg-primary rounded-xl book-gradient relative ">
        <div className="absolute bottom-0 -left-[50px] mid:left-[unset] mid:right-0 w-[400px] tablet:w-[300px] tablet:right-[unset] tablet:left-1/2 tablet:-translate-x-1/2 rounded-xl overflow-hidden">
          <motion.div
            initial={{
              transform: "perspective(1500px) rotateX(15deg)",
              opacity: 0.4,
            }}
            variants={{
              visible: {
                transform: "perspective(1500px) rotateX(0deg)",
                opacity: 1,
              },
            }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            ref={ref}
          >
            <img
              src={bookCover}
              draggable={false}
              alt="book cover"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Book;
