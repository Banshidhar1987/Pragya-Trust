import { useState } from 'react';
import Layout from '../components/Layout';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', interest: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    const res = await fetch('/api/members', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setStatus('Registration submitted successfully. Thank you!');
      setForm({ name: '', email: '', phone: '', address: '', interest: '' });
    } else {
      setStatus('Submission failed. Please try again.');
    }
  };

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="section-card">
          <h1 className="mb-4 text-3xl font-semibold text-brandblue">Member Registration</h1>
          <p className="mb-8 text-slate-700">Join our trust and share your interest in education, volunteering, and environmental work.</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {['name', 'email', 'phone', 'address', 'interest'].map((field) => (
              <div key={field}>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor={field}>
                  {field === 'interest' ? 'Interest / Program' : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === 'interest' ? (
                  <textarea
                    id={field}
                    name={field}
                    required
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-brandgreen focus:ring-2 focus:ring-brandgreen/20"
                    rows="4"
                  />
                ) : (
                  <input
                    id={field}
                    name={field}
                    required
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-brandgreen focus:ring-2 focus:ring-brandgreen/20"
                  />
                )}
              </div>
            ))}

            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brandgreen px-6 py-3 text-white transition hover:bg-brandblue">
              Submit Registration
            </button>
            {status && <p className="text-sm text-brandblue">{status}</p>}
          </form>
        </div>
      </section>
    </Layout>
  );
}
