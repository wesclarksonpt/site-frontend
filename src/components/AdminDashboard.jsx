import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [prospects, setProspects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/admin/prospects')
      .then(res => res.json())
      .then(data => setProspects(data));
  }, []);

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Prospective Clients</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">ZIP</th>
            <th className="border p-2">Goal</th>
            <th className="border p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {prospects.map(p => (
            <tr key={p.id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.email}</td>
              <td className="border p-2">{p.phone}</td>
              <td className="border p-2">{p.zipCode}</td>
              <td className="border p-2">{p.goal}</td>
              <td className="border p-2">{new Date(p.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
