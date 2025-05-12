import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    goal: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://formspree.io/f/xvgawqwa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(res.ok ? 'Submitted!' : data.error);
  };

  return (
    <section id="contact" className="py-10 bg-white">
      <h3 className="text-2xl text-center font-semibold mb-6">Contact Us</h3>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
	  name="name"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border w-full p-2"
        />
        <input
          type="email"
	  name="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border w-full p-2"
        />
        <input
          type="tel"
	  name="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="border w-full p-2"
        />
        <input
          type="text"
	  name="zipCode"
          placeholder="ZIP Code"
          value={form.zipCode}
          onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
          className="border w-full p-2"
        />
        <textarea
          placeholder="What’s your goal?"
	  name="goal"
          value={form.goal}
          onChange={(e) => setForm({ ...form, goal: e.target.value })}
          className="border w-full p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
