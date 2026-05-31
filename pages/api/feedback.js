import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'feedback.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const json = await fs.readFile(filePath, 'utf8');
      const feedback = JSON.parse(json || '[]');
      return res.status(200).json(feedback);
    } catch (error) {
      return res.status(500).json({ error: 'Unable to read feedback.' });
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body;
      const json = await fs.readFile(filePath, 'utf8');
      const feedback = JSON.parse(json || '[]');
      const newEntry = {
        ...data,
        createdAt: new Date().toISOString()
      };
      feedback.push(newEntry);
      await fs.writeFile(filePath, JSON.stringify(feedback, null, 2));
      return res.status(201).json({ message: 'Feedback submitted.' });
    } catch (error) {
      return res.status(500).json({ error: 'Unable to save feedback.' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
