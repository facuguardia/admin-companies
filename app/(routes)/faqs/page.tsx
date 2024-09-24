import React from "react";
import { AccordionFaqs } from "./components/AccordionFaqs";

export default function PageFaqs() {
  return (
    <div className="max-w-4xl mx-auto bg-background shadow-md rounded-lg p-6 ">
      <h2 className="text-3xl mb-8">FAQS</h2>
      {/* TODO: change paragraph in component FAQs */}
      <div className="mb-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          officiis asperiores tempora, atque qui ea dolorum, id obcaecati
          provident maiores eius consequuntur pariatur illo sed optio commodi?
          Labore, cupiditate eveniet! Aperiam sunt at soluta rerum numquam.
          Molestiae distinctio numquam, veniam totam impedit id nihil quasi
          pariatur rerum, asperiores labore porro, autem deleniti! Quo dicta
          illum molestias quisquam sunt iure veniam? Odio animi saepe
          voluptatum, dicta ducimus exercitationem fuga minima at excepturi
          expedita natus neque odit consequuntur sed modi recusandae omnis,
          assumenda facilis officiis fugit incidunt? Asperiores magnam quidem
          saepe rerum. Asperiores, exercitationem natus. Debitis repudiandae
          nemo ad vel. Quos ipsam hic consequuntur, adipisci corrupti
          voluptatibus nam eligendi saepe officiis recusandae unde soluta vel
          error inventore nihil odio doloribus sed! Nihil!
        </p>
      </div>
      <AccordionFaqs />
    </div>
  );
}
