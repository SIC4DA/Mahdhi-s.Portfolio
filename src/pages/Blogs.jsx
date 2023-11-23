// import React from "react";

import Header from "../components/blogs/Header";
import BlogsList from "../components/blogs/BlogsList";

export default function Blogs() {
  return (
    <section>
      <div className="flex items-stretch mid:flex-col justify-between relative pt-20 pb-16 px-5 mx-auto max-w-[90rem] gap-16">
        <Header />
        <BlogsList />
      </div>
    </section>
  );
}
