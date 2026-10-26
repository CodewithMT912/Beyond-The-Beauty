"use client";

import { useEffect, useMemo, useState } from "react";

type FAQ = {
  question: string;
  answer: string;
  category: string;
};

const sectionLinks = [
  { id: "faqs", label: "FAQs" },
  { id: "shipping", label: "Shipping Policy" },
  { id: "returns", label: "Return & Refund Policy" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms & Conditions" },
];

export function PolicySectionNav() {
  const [activeSection, setActiveSection] = useState("faqs");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.4] },
    );

    sectionLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Policies and FAQs sections" className="policy-section-nav">
      {sectionLinks.map((section) => (
        <a
          aria-current={activeSection === section.id ? "location" : undefined}
          className={activeSection === section.id ? "active" : ""}
          href={`#${section.id}`}
          key={section.id}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}

export function PoliciesFAQBrowser({
  categories,
  questions,
}: {
  categories: string[];
  questions: FAQ[];
}) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const visibleQuestions = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return questions.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch = !query
        || `${item.question} ${item.answer}`.toLocaleLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [category, questions, search]);

  return (
    <div className="policy-faq-browser">
      <div aria-label="Filter FAQs by category" className="faq-category-pills">
        {categories.map((item) => (
          <button
            aria-pressed={category === item}
            className={category === item ? "active" : ""}
            key={item}
            onClick={() => setCategory(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <label className="policy-faq-search">
        <span className="sr-only">Search frequently asked questions</span>
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 4 4" />
        </svg>
        <input
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search a question..."
          type="search"
          value={search}
        />
      </label>
      <div className="policy-faq-list">
        {visibleQuestions.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>
              <span>{item.question}</span>
              <span aria-hidden="true" className="faq-toggle" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
        {visibleQuestions.length === 0 && (
          <p className="policy-faq-empty">No matching questions. Try another search or category.</p>
        )}
      </div>
    </div>
  );
}
