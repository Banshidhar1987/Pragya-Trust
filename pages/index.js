import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(56,161,105,0.18),transparent_50%),radial-gradient(circle_at_right,rgba(37,99,235,0.12),transparent_30%)] px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr_1fr] lg:items-center">
          <div className="section-card">
            <h2 className="mb-4 text-xl font-semibold text-brandgreen">Chairman Message</h2>
            <p className="text-slate-700">Our mission is to empower children through free education and raise environmental awareness through tree plantation.</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full border-8 border-brandgreen bg-white shadow-xl">
              <div className="text-center text-brandgreen">
                <div className="text-3xl font-bold">Logo</div>
                <div className="text-sm uppercase tracking-[0.3em]">Pragnya</div>
              </div>
            </div>
          </div>

          <div className="section-card">
            <h2 className="mb-4 text-xl font-semibold text-brandgreen">Managing Trustee Message</h2>
            <p className="text-slate-700">We build brighter futures by combining education with sustainable community action, one student and one tree at a time.</p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="section-card">
            <h2 className="mb-4 text-3xl font-semibold text-brandblue">About Pragnya Educational & Social Trust</h2>
            <p className="mb-4 text-slate-700">Pragnya Educational & Social Trust is based in Bhubaneswar and works to provide free education to underserved children while promoting tree plantation and community welfare.</p>
            <div className="space-y-4 text-slate-700">
              <p><strong>Free Education:</strong> Skill-building classes, study support, and mentorship for students.</p>
              <p><strong>Tree Plantation:</strong> Local environmental drives that involve students, volunteers, and the community.</p>
            </div>
          </div>

          <div className="glow-card">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-brandgreen">For Donation Scanner</h3>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center text-slate-500">
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-slate-400">UPI QR code placeholder</p>
                <div className="mx-auto h-36 w-36 rounded-3xl bg-white shadow-inner"></div>
              </div>
              <p className="mt-5 text-sm text-slate-600">Support our mission with a secure UPI donation. Your help fuels education, community outreach, and reforestation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <Link href="/register" className="section-card transition hover:-translate-y-1">
            <h3 className="mb-3 text-xl font-semibold text-brandgreen">Join as Member</h3>
            <p className="text-slate-700">Register your interest and become part of our education and environment programs.</p>
          </Link>

          <Link href="/gallery" className="section-card transition hover:-translate-y-1">
            <h3 className="mb-3 text-xl font-semibold text-brandgreen">Gallery</h3>
            <p className="text-slate-700">Explore photos from our events, plantation drives, and community outreach activities.</p>
          </Link>

          <Link href="/contact" className="section-card transition hover:-translate-y-1">
            <h3 className="mb-3 text-xl font-semibold text-brandgreen">Contact Us</h3>
            <p className="text-slate-700">Send us your questions or suggestions and help shape our next initiative.</p>
          </Link>
        </div>
      </section>

      <section id="videos" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="section-card">
          <h2 className="mb-4 text-3xl font-semibold text-brandblue">Share Our Story</h2>
          <p className="text-slate-700">We use videos, events, and social media to reach more families and volunteers. Capture the spirit of education and nature in every activity.</p>
        </div>
      </section>
    </Layout>
  );
}
