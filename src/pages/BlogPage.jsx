import React from "react";
import Hero from "../components/common/Hero";
import BlogMainSection from "../components/informasi/BlogMainSection";

import heroBg from "../assets/hero-blog.webp";
function BlogPage() {
  const heroProps = {
    welcomeText: "Informasi",
    title: "Blog Exaque",
    subtitle:
      "Temukan wawasan, tren industri, dan praktik terbaik seputar Customer Journey Management dan optimalisasi layanan dari para ahli kami.",
    imageUrl: heroBg,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Kontak",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-white min-h-screen">
      <Hero {...heroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
        <BlogMainSection />
      </div>
    </div>
  );
}

export default BlogPage;
