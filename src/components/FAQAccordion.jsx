import { useState } from 'react';

const faqs = [
  { q: "What is your approach?", a: "Lift heavy weight... body grow... eat much steak and chicken... big muscles" },
  { q: "How do I start?", a: "You write now, fill form, be sure write down email or number for phone, I call phone, you work out twice a week until reach fitness goal" },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-10">
      <h3 className="text-2xl text-center font-semibold mb-6">FAQ</h3>
      <div className="max-w-xl mx-auto space-y-4">
        {faqs.map((item, idx) => (
          <div key={idx} className="border rounded">
            <button onClick={() => setOpenIndex(idx === openIndex ? null : idx)} className="w-full p-4 text-left">
              {item.q}
            </button>
            {openIndex === idx && <p className="p-4 border-t">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

