import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [members, setMembers] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [uploadForm, setUploadForm] = useState({ caption: '', file: null });

  useEffect(() => {
    if (isLoggedIn) {
      loadData();
    }
  }, [isLoggedIn]);

  const loadData = async () => {
    const [membersRes, feedbackRes, galleryRes] = await Promise.all([
      fetch('/api/members'),
      fetch('/api/feedback'),
      fetch('/api/gallery')
    ]);
    if (membersRes.ok) setMembers(await membersRes.json());
    if (feedbackRes.ok) setFeedback(await feedbackRes.json());
    if (galleryRes.ok) setGallery((await galleryRes.json()).gallery || []);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    const res = await fetch('/api/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    });

    if (res.ok) {
      setIsLoggedIn(true);
      setLoginData({ username: '', password: '' });
    } else {
      setLoginError('Invalid admin credentials.');
    }
  };

  const handleUploadChange = (e) => {
    const { name, value, files } = e.target;
    setUploadForm({ ...uploadForm, [name]: files ? files[0] : value });
  };

  const handleGalleryUpload = async (e) => {
    e.preventDefault();
    if (!uploadForm.file || !uploadForm.caption) {
      setUploadStatus('Please add both image and caption.');
      return;
    }
    setUploadStatus('Uploading...');
    const formData = new FormData();
    formData.append('image', uploadForm.file);
    formData.append('caption', uploadForm.caption);

    const res = await fetch('/api/gallery', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      setUploadStatus('Image uploaded successfully.');
      setUploadForm({ caption: '', file: null });
      loadData();
    } else {
      setUploadStatus('Upload failed.');
    }
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <section className="mx-auto max-w-xl px-5 py-12 sm:px-8 lg:px-12">
          <div className="section-card">
            <h1 className="mb-4 text-3xl font-semibold text-brandblue">Admin Login</h1>
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Username</label>
                <input
                  name="username"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-brandgreen focus:ring-2 focus:ring-brandgreen/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-brandgreen focus:ring-2 focus:ring-brandgreen/20"
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brandgreen px-6 py-3 text-white hover:bg-brandblue">
                Log In
              </button>
              {loginError && <p className="mt-3 text-sm text-red-600">{loginError}</p>}
            </form>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <div className="section-card">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-brandblue">Admin Dashboard</h1>
                <p className="text-slate-700">Manage gallery uploads and review registration / feedback data stored locally.</p>
              </div>
              <button onClick={() => setIsLoggedIn(false)} className="rounded-full bg-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-300">
                Log Out
              </button>
            </div>
          </div>

          <div className="section-card">
            <h2 className="mb-4 text-2xl font-semibold text-brandgreen">Gallery Management</h2>
            <form className="space-y-4" onSubmit={handleGalleryUpload}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Caption</label>
                <input
                  name="caption"
                  value={uploadForm.caption}
                  onChange={handleUploadChange}
                  className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-brandgreen focus:ring-2 focus:ring-brandgreen/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Image File</label>
                <input name="file" type="file" accept="image/*" onChange={handleUploadChange} className="w-full text-slate-700" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brandgreen px-6 py-3 text-white hover:bg-brandblue">
                Upload Image
              </button>
            </form>
            {uploadStatus && <p className="mt-3 text-sm text-brandblue">{uploadStatus}</p>}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="section-card overflow-x-auto">
              <h2 className="mb-4 text-2xl font-semibold text-brandblue">Members</h2>
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="py-3 pr-4">Name</th>
                    <th className="py-3 pr-4">Email</th>
                    <th className="py-3 pr-4">Phone</th>
                    <th className="py-3 pr-4">Interest</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {members.length > 0 ? members.map((member, idx) => (
                    <tr key={idx} className="text-slate-700">
                      <td className="py-3 pr-4">{member.name}</td>
                      <td className="py-3 pr-4">{member.email}</td>
                      <td className="py-3 pr-4">{member.phone}</td>
                      <td className="py-3 pr-4">{member.interest}</td>
                    </tr>
                  )) : <tr><td colSpan="4" className="py-4 text-slate-500">No members yet.</td></tr>}
                </tbody>
              </table>
            </div>

            <div className="section-card overflow-x-auto">
              <h2 className="mb-4 text-2xl font-semibold text-brandblue">Feedback</h2>
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="py-3 pr-4">Name</th>
                    <th className="py-3 pr-4">Email</th>
                    <th className="py-3 pr-4">Phone</th>
                    <th className="py-3 pr-4">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {feedback.length > 0 ? feedback.map((item, idx) => (
                    <tr key={idx} className="text-slate-700">
                      <td className="py-3 pr-4">{item.name}</td>
                      <td className="py-3 pr-4">{item.email}</td>
                      <td className="py-3 pr-4">{item.phone}</td>
                      <td className="py-3 pr-4">{item.message}</td>
                    </tr>
                  )) : <tr><td colSpan="4" className="py-4 text-slate-500">No feedback yet.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-card">
            <h2 className="mb-4 text-2xl font-semibold text-brandgreen">Current Gallery Items</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.length > 0 ? gallery.map((item, idx) => (
                <div key={idx} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                  <img src={item.path} alt={item.caption || 'Gallery image'} className="h-40 w-full object-cover" />
                  <div className="p-3">
                    <p className="text-sm font-semibold text-brandgreen">{item.caption}</p>
                  </div>
                </div>
              )) : <p className="text-slate-500">No gallery images uploaded yet.</p>}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
