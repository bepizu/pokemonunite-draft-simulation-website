// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { findOne, IndexType, update } from '@/services/databases/mongodb'
import DraftSession from '@/types/DraftSession'
import { OKResponse, ErrorResponse, HTTPErrorResponse, HTTPOkResponse } from '@/types/HTTPResponse'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HTTPOkResponse<DraftSession> | HTTPErrorResponse>
) {
  const { method, query: queryString, body } = req

  switch (method?.toLowerCase()) {
    case 'get':
      try {
        const query = {_id: new IndexType(queryString.sessionId as string)}
        const draftSessionResponse = await findOne<DraftSession>("drafts", query)

        if (draftSessionResponse) {
          res.status(200).json(OKResponse<DraftSession>(draftSessionResponse))
        } else {
          res.status(404).json(ErrorResponse(new Error("Draft Session not found")))
        }
      } catch (error) {
        res.status(500).json(ErrorResponse(error as Error))
      }
      break

    case 'put':
      try {
        const query = {_id: new IndexType(queryString.sessionId as string)}
        const draftSessionResponse = await update("drafts", query, body)

        if (draftSessionResponse) {
          res.status(200).json(OKResponse<DraftSession>())
        } else {
          res.status(409).json(ErrorResponse(new Error("Draft Session not updated")))
        }
      } catch (error) {
        res.status(500).json(ErrorResponse(error as Error))
      }
      break

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(ErrorResponse(new Error(`Method ${method} Not Allowed`)));
  }
}