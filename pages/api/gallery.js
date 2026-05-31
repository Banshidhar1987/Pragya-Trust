import formidable from 'formidable';
import { promises as fs } from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false
  }
};

const dataPath = path.join(process.cwd(), 'data', 'gallery.json');
const uploadDir = path.join(process.cwd(), 'public', 'uploads');

function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024,
      multiples: false
    });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const json = await fs.readFile(dataPath, 'utf8');
      const gallery = JSON.parse(json || '[]');
      return res.status(200).json({ gallery });
    } catch (error) {
      return res.status(500).json({ error: 'Unable to read gallery.' });
    }
  }

  if (req.method === 'POST') {
    try {
      await fs.mkdir(uploadDir, { recursive: true });
      const { fields, files } = await parseForm(req);
      const image = files.image || files.file;
      if (!image) {
        return res.status(400).json({ error: 'Image file is required.' });
      }
      const filePath = Array.isArray(image) ? image[0].filepath : image.filepath;
      const fileName = path.basename(filePath);
      const publicPath = `/uploads/${fileName}`;

      const json = await fs.readFile(dataPath, 'utf8');
      const gallery = JSON.parse(json || '[]');
      gallery.push({ caption: fields.caption || '', path: publicPath, uploadedAt: new Date().toISOString() });
      await fs.writeFile(dataPath, JSON.stringify(gallery, null, 2));
      return res.status(201).json({ message: 'Gallery item saved.', gallery });
    } catch (error) {
      return res.status(500).json({ error: 'Unable to upload image.' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
