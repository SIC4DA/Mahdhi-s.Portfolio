const BookSectionWrapper = ({ children }) => {
  return (
    <div
      id="book"
      className="min-h-[700px] border border-border-light dark:border-border-dark rounded-xl p-2 grid items-center gap-5 tablet:gap-32 overflow-hidden book-section-wrapper"
    >
      {children}
    </div>
  );
};

export default BookSectionWrapper;
