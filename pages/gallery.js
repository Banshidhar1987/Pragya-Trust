import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const loadGallery = async () => {
      const res = await fetch('/api/gallery');
      if (res.ok) {
        const data = await res.json();
        setGallery(data.gallery || []);
      }
    };
    loadGallery();
  }, []);

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="section-card">
          <h1 className="mb-6 text-3xl font-semibold text-brandblue">Photo Gallery</h1>
          <p className="mb-8 text-slate-700">Browse pictures from our education sessions, plantation drives, and community events.</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.length > 0 ? (
              gallery.map((item, index) => (
                <div key={index} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                  <img src={item.path} alt={item.caption || 'Gallery'} className="h-72 w-full object-cover" />
                  <div className="p-4">
                    <p className="text-sm font-semibold text-brandgreen">{item.caption || 'Community Event'}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="section-card text-slate-700">No gallery images yet. Add images from the admin dashboard.</div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
