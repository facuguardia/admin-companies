import React from "react";
import { AccordionFaqs } from "./components/AccordionFaqs";

export default function PageFaqs() {
  return (
    <div className="max-w-4xl mx-auto bg-background shadow-md rounded-lg p-6 ">
      <h2 className="text-3xl mb-8">FAQs</h2>
      {/* TODO: change paragraph in component FAQs */}
      <div className="mb-5">
        <p>
          Our SaaS system simplifies business management and the analysis of
          digital interactions. From a single dashboard, you can monitor the
          bounce rate on social media and websites, manage each companys
          information, and schedule tasks or events assigned to them.
          Additionally, the Analytics panel offers a clear chart of events by
          company, facilitating effective tracking and data-driven
          decision-making. Everything is designed to optimize the organization
          and growth of your business.
        </p>
      </div>
      <AccordionFaqs />
    </div>
  );
}
