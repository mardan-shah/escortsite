import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    title: "What is HornyNeighbor?",
    content:
      "HornyNeighbor is a premier online platform that connects clients with high-quality escort services. We provide a secure and discreet environment for both clients and escorts to interact and fulfill their needs.",
  },
  {
    title: "How do I create an account on HornyNeighbor?",
    content:
      "To create an account on HornyNeighbor, visit our website and click on the 'Sign Up' button. Fill in the required details, verify your email, and you're all set to start using our platform.",
  },
  {
    title: "Is my personal information secure on HornyNeighbor?",
    content:
      "Yes, we prioritize your privacy and security. All data is encrypted and stored securely to ensure your personal information remains confidential.",
  },
  {
    title: "Are there any fees to use HornyNeighbor?",
    content:
      "Creating an account on HornyNeighbor is free. However, additional fees may apply for certain premium services. Please check our pricing page for more details.",
  },
  {
    title: "How can I contact customer support?",
    content:
      "You can contact our customer support through the 'Contact Us' page on our website. We are available 24/7 to assist you with any queries or issues.",
  },
];

const FAQ = () => {
  return (
    <div className="flex flex-col items-center w-full py-10">
      <h1 className="text-primarypink text-4xl md:text-6xl font-bold mb-6">
        Frequently Asked Questions
      </h1>
      <div className="w-11/12 md:w-3/4">
        <Accordion type="single" collapsible>
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-700">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
