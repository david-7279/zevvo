import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestionIcon } from "lucide-react";

import Heading from "@/app/(default)/components/heading";

const Faq = () => {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Heading
              icon={MessageCircleQuestionIcon}
              title="Perguntas Frequentes"
              heading="Este é o início de algo novo!"
              paragraph="Descrição sobre as perguntas frequentes"
            />
          </div>

          <div className="max-w-3xl w-full mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {Array.from({ length: 8 }).map((_, index) => (
                <AccordionItem key={index} value={"index-" + index}>
                  <AccordionTrigger>
                    This is the start of something new
                  </AccordionTrigger>
                  <AccordionContent>
                    Managing a small business today is already tough. Avoid
                    further complications by ditching outdated, tedious trade
                    methods. Our goal is to streamline SMB trade, making it easier
                    and faster than ever.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq