import React from "react";

import Hero from "../components/common/Hero";
import ProductTeaser from "../components/product/ProductTeaser";
import ProductFeature from "../components/product/ProductFeature";
import ProductAccordion from "../components/product/ProductAccordion";

import productHeroImage from "../assets/hero-product.webp";
import ProductCTA from "../components/product/ProductCTA";

function Product() {
  const productHeroProps = {
    welcomeText: "Produk",
    title: "Qmatic Orchestra 7",
    subtitle:
      "Terapkan struktur pada operasional Anda dengan solusi manajemen antrian untuk perusahaan.",
    imageUrl: productHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...productHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
        <ProductTeaser />
        <ProductFeature />
        <ProductAccordion />
      </div>
      <ProductCTA />
    </div>
  );
}

export default Product;
