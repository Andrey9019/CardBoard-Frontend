import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    title: "Замовлення та оплата",
    items: [
      {
        question: "Як оформити замовлення на сайті?",
        answer: "Як оформити замовлення на сайті?",
      },
      {
        question: "Які способи оплати доступні?",
        answer: "Які способи оплати доступні?",
      },
      {
        question:
          "Чи можу я змінити або скасувати замовлення після оформлення?",
        answer: "Чи можу я змінити або скасувати замовлення після оформлення?",
      },
    ],
  },
  {
    title: "Доставка та отримання",
    items: [
      {
        question: "Які способи доставки доступні?",
        answer: "Які способи доставки доступні?",
      },
      {
        question: "Скільки часу триває доставка?",
        answer: "Скільки часу триває доставка?",
      },
      {
        question: "Чи можна самостійно забрати замовлення?",
        answer: "Чи можна самостійно забрати замовлення?",
      },
    ],
  },
  {
    title: "Повернення та гарантія",
    items: [
      {
        question: "Чи можна повернути або обміняти товар?",
        answer: "Чи можна повернути або обміняти товар?",
      },
      {
        question: "Як оформити повернення?",
        answer: "Як оформити повернення?",
      },
      {
        question:
          "Що робити, якщо гра прийшла з дефектом або пошкодженою упаковкою?",
        answer:
          "Що робити, якщо гра прийшла з дефектом або пошкодженою упаковкою?",
      },
    ],
  },
];

export default function QuestionsAndAnswers() {
  return (
    <section className="mb-12 px-9 lg:mb-16 xl:px-[120px]">
      <h3 className="mb-9 text-center text-3xl font-bold">Q&A</h3>
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-lg bg-white p-6"
      >
        {faqData.map((section, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="mb-6 p-0 text-2xl font-bold">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="p-0 pl-7">
              <Accordion className="p-0" type="single" collapsible>
                {section.items.map((item, subIndex) => (
                  <AccordionItem
                    className="p-0"
                    key={subIndex}
                    value={`item-${index}-${subIndex}`}
                  >
                    <AccordionTrigger className="mb-4 p-0 text-lg font-bold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="mb-4 p-0 px-3">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
