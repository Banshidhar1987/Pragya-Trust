import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending message...');
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setStatus('Thank you! We will get back to you soon.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatus('Unable to send your message. Please try again later.');
    }
  };

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="section-card">
          <h1 className="mb-4 text-3xl font-semibold text-brandblue">Contact / Feedback</h1>
          <p className="mb-8 text-slate-700">Send your questions, suggestions, or requests for collaboration.</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {['name', 'email', 'phone'].map((field) => (
              <div key={field}>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  name={field}
                  required
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  value={form[field]}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-brandgreen focus:ring-2 focus:ring-brandgreen/20"
                />
              </div>
            ))}

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-brandgreen focus:ring-2 focus:ring-brandgreen/20"
              />
            </div>

            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brandgreen px-6 py-3 text-white transition hover:bg-brandblue">
              Send Feedback
            </button>
            {status && <p className="text-sm text-brandblue">{status}</p>}
          </form>
        </div>
      </section>
    </Layout>
  );
}
