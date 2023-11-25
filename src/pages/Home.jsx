import About from "../components/home/About";
import BlogsSection from "../components/home/BlogsSection";
import Book from "../components/home/Book";
import BookInfo from "../components/home/BookInfo";
import BookSectionWrapper from "../components/home/BookSectionWrapper";
import Hero from "../components/home/Hero";
import Work from "../components/home/Work";
import useBlogs from "../hooks/useBlogs";
import "../styles/home.css";

export default function Home() {
  const { blogs, isLoading, isError } = useBlogs();

  return (
    <section>
      <Hero />
      <Work>
        <BookSectionWrapper>
          <BookInfo />
          <Book />
        </BookSectionWrapper>
      </Work>
      <About />
      {blogs?.length > 0 && !isLoading && !isError && (
        <BlogsSection blogs={blogs} />
      )}
    </section>
  );
}
