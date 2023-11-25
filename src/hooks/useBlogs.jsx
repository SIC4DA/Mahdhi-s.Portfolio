import { useState, useEffect } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/src/data/blogs.json");
      const data = await res.json();
      setBlogs(data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, isLoading, isError };
};

export default useBlogs;
