export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { username, password } = req.body;
  if (username === 'admin' && password === 'pragnya123') {
    return res.status(200).json({ authenticated: true });
  }

  return res.status(401).json({ authenticated: false, error: 'Invalid credentials' });
}
