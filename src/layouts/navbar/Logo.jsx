import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h2 className="text-center text-3xl font-thin">
        {"MabroukMahdhi".split("").map((child, i) => (
          <span className={`hoverText ${i > 6 ? "text-grey" : ""}`} key={i}>
            {child}
          </span>
        ))}
      </h2>
    </Link>
  );
};

export default Logo;
