import { IndexType, findOne } from '@/services/databases/mongodb'
import DraftSession from '@/types/DraftSession'
import { Server } from 'Socket.IO'
import type { NextApiRequest, NextApiResponse } from 'next'

type SocketNextApi = NextApiResponse & { socket: any }

const SocketHandler = (req: NextApiRequest, res: SocketNextApi) => {

  const { query } = req
  const { socket } = res

  if (socket.server) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(socket.server, {path: `/api/draft/${query.sessionId}/socket`})

    io.on('connection', (socketInstance: any) => {
      // Listening for a connection
      console.log('Connected');
    });

    socket.server.io = io

    // socket.on('create', async function (sessionId: string) {
    //   socket.join(sessionId);
    //   console.log(`joined on ${sessionId}`)

    //   const query = {_id: new IndexType(sessionId)}
    //   const draftSessionResponse = await findOne<DraftSession>("drafts", query)

    //   socket.in(sessionId).emit("draft-update", {draftSessionResponse})
    // });

    // socket.on('pokemon-selected', (msg: any) => {
    //   const { sessionId, pick } = msg
    //   // socket.in(sessionId).emit("draft-update", {draftSessionResponse})
    // })
  }

  res.send({id: socket.server.id})
  res.end()
}

export const config = {
  api: {
    bodyParser: false
  }
}

export default SocketHandler