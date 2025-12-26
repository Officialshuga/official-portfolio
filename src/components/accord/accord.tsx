// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

// export function AccordionDemo() {
//   return (
//     <Accordion
//       type="single"
//       collapsible
//       className="w-full"
//       defaultValue="item-1"
//     >
//       <AccordionItem value="item-1">
//         <AccordionTrigger>How long does it take to complete a project?</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           <p>
//             Depending on the project size, it can take anywhere from a few days to several weeks. We always set clear timelines from the start.
//           </p>
//           {/* <p>
//             Key features include advanced processing capabilities, and an
//             intuitive user interface designed for both beginners and experts.
//           </p> */}
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Do you provide website maintenance?</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           <p>Yes, we provide ongoing maintenance to ensure your website stays updated, secure, and running smoothly.</p>
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Can you redesign my existing website?</AccordionTrigger>
//         <AccordionContent className="flex flex-col gap-4 text-balance">
//           <p>Yes, we can help you revamp your existing website with a modern, responsive design that matches your brand and goals.</p>
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   )
// }

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
    //   defaultValue="item-1"
      className="w-full max-w-3xl mx-auto"
    >
      <AccordionItem
        value="item-1"
        className="border-b border-muted px-4"
      >
        <AccordionTrigger className="text-left text-xl">
          How long does it take to complete a project?
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden">
          <p className="pt-2 text-lg text-muted-foreground">
            Depending on the project size, it can take anywhere from a few days
            to several weeks. We always set clear timelines from the start.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        className="border-b border-muted px-4"
      >
        <AccordionTrigger className="text-left text-xl">
          Do you provide website maintenance?
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden">
          <p className="pt-2 text-muted-foreground text-xl">
            Yes, we provide ongoing maintenance to ensure your website stays
            updated, secure, and running smoothly.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-3"
        className="border-b border-muted px-4"
      >
        <AccordionTrigger className="text-left text-xl">
          Can you redesign my existing website?
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden">
          <p className="pt-2 text-xl text-muted-foreground">
            Yes, we can help you revamp your existing website with a modern,
            responsive design that matches your brand and goals.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
