// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { insert } from '@/services/databases/mongodb'
import { OKResponse, ErrorResponse, HTTPOkResponse } from '@/types/HTTPResponse'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HTTPOkResponse<any>>
) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'get':
      res.json({result: true})
      break

    case 'post':
      const { body } = req
      
      try {
        const data = await insert("drafts", body)
        res.status(200).json(OKResponse({ _id: data }))
      } catch (error) {
        res.status(500).json(ErrorResponse(error as Error))
      }
      break

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(ErrorResponse(new Error(`Method ${method} Not Allowed`)));
  }
}