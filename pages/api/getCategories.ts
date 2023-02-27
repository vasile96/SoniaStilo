// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { SanityClient } from 'next-sanity'

const query = groq'*[_type == "category"] {
  _id,
  slug,
  title
}';
type Data = {
  categories: Category[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await SanityClient.fetch(query);
  console.log(categories);
  res.status(200).json({ categories });}
