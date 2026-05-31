import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'members.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const json = await fs.readFile(filePath, 'utf8');
      const members = JSON.parse(json || '[]');
      return res.status(200).json(members);
    } catch (error) {
      return res.status(500).json({ error: 'Unable to read members.' });
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body;
      const json = await fs.readFile(filePath, 'utf8');
      const members = JSON.parse(json || '[]');
      const newMember = {
        ...data,
        createdAt: new Date().toISOString()
      };
      members.push(newMember);
      await fs.writeFile(filePath, JSON.stringify(members, null, 2));
      return res.status(201).json({ message: 'Member registered.' });
    } catch (error) {
      return res.status(500).json({ error: 'Unable to save member.' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
