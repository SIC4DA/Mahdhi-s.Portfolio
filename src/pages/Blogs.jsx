import Header from "../components/blogs/Header";
import BlogsList from "../components/blogs/BlogsList";
import useBlogs from "../hooks/useBlogs";
import Loader from "../components/shared/Loader";
import RequestError from "../components/shared/RequestError";

export default function Blogs() {
  const { blogs, isLoading, isError } = useBlogs();

  return (
    <section>
      <div className="flex items-stretch mid:flex-col justify-between relative pt-20 pb-16 px-5 mx-auto max-w-[90rem] gap-16">
        <Header />
        {blogs?.length > 0 && !isLoading && <BlogsList blogs={blogs} />}
        {(isLoading || isError) && (
          <div className="relative w-full py-40 mid:pt-0 mid:pb-10 mx-auto">
            {isLoading && <Loader />}
            {isError && <RequestError />}
          </div>
        )}
      </div>
    </section>
  );
}
