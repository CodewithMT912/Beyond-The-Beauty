type FAQ = {
  question: string;
  answer: string;
};

export function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
}: {
  items: FAQ[];
  title?: string;
}) {
  return (
    <div className="faq-section">
      {title && <h3>{title}</h3>}
      <div className="faq-list">
        {items.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>
              <span>{item.question}</span>
              <span aria-hidden="true" className="faq-toggle" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
