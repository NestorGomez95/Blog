import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Lógica para crear una nueva publicación
    res.status(200).json({ message: 'Post created' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
