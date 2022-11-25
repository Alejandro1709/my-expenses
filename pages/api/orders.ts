// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const {
    name,
    description,
    date,
    brand,
    currency,
    price,
    quantity,
    category,
    image,
  } = req.body;

  try {
    const order = await prisma.order.create({
      data: {
        name,
        description,
        date,
        brand,
        currency,
        price,
        quantity,
        category,
        image,
      },
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
    return;
  }
}
