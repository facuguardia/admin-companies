import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataAcoordionFaqs } from "./AccordionFaqs.data";

export function AccordionFaqs() {
  return (
    <Accordion type="single" collapsible>
      {/* TODO: change the array data in dataAcoordionFaqs */}
      {dataAcoordionFaqs.map(({ id, question, answer }) => (
        <AccordionItem key={id} value={question}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
