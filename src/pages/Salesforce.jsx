import React from "react";

import Hero from "../components/common/Hero";
import productHeroImage from "../assets/hero-integrasi.webp";
import IntegrasiSalesforceTeaser from "../components/integrasisalesforce/IntegrasiSalesforceTeaser";
import IntegrasiSalesforceAccordion from "../components/integrasisalesforce/IntegrasiSalesforceAccordion";
import IntegrasiSalesforceCTA from "../components/integrasisalesforce/IntegrasiSalesforceCTA";

// ✅ STRING PATH KE PDF (DI /public)
const PDF_SALESFORCE = "/hubfs/Qmatic-Salesforce-Integration-Data-Sheet.pdf";

function Salesforce() {
  const productHeroProps = {
    welcomeText: "Integrasi",
    title: "Salesforce",
    subtitle: (
      <p>
        Atur <i>workflows</i> Anda, tingkatkan <i>customer flow</i>, dan
        tawarkan <i>personalized customer experiences</i>.
      </p>
    ),
    imageUrl: productHeroImage,
    textAlign: "text-center mx-auto",

    button1Text: "Permintaan Demo",
    button1Link: "/demo",

    button2Text: "Konsultasi",
    button2Link: "/kontak",

    button3Text: "Download PDF",
    button3Link: PDF_SALESFORCE,
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...productHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
        <IntegrasiSalesforceTeaser />
        <IntegrasiSalesforceAccordion />
      </div>
      <IntegrasiSalesforceCTA />
    </div>
  );
}

export default Salesforce;
