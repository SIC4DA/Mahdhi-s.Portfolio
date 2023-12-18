import Card from "../home/Card";
import { useMemo } from "react";
import { motion } from "framer-motion";

const BlogsList = ({ blogs }) => {
  const blogsHalf = useMemo(
    () =>
      blogs &&
      blogs?.reduce(
        (acc, cur, i) => {
          if (i % 2 === 0) {
            acc[0].push(cur);
          } else {
            acc[1].push(cur);
          }
          return acc;
        },
        [[], []]
      ),
    [blogs]
  );

  return (
    <div className="pb-40 mid:pt-0 mid:pb-10">
      <div
        style={{
          gridAutoColumns: "1fr",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
        }}
        className="grid gap-6  mid:w-fit mid:mx-auto mobile:!grid-cols-1"
      >
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-6 items-center"
        >
          {blogs &&
            blogsHalf[0]?.map((blog, i) => <Card key={i} card={blog} />)}
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-6 items-center"
        >
          {blogs &&
            blogsHalf[1]?.map((blog, i) => <Card key={i} card={blog} />)}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogsList;
