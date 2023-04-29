// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { insert } from '@/services/databases/mongodb'
import HTTPResponse, { OK } from '@/types/HTTPResponse'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HTTPResponse>
) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'get':
      res.json({result: true})
      break

    case 'post':
      const { body } = req
      console.log({body})
      const data = await insert("drafts", body)

      res.status(200).json(OK({ _id: data }))
      break

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}