import About from "../components/home/About";
import BlogsSection from "../components/home/BlogsSection";
import Book from "../components/home/Book";
import BookInfo from "../components/home/BookInfo";
import BookSectionWrapper from "../components/home/BookSectionWrapper";
import Hero from "../components/home/Hero";
import Work from "../components/home/Work";
import "../styles/home.css";

export default function Home() {
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
      <BlogsSection />
    </section>
  );
}
