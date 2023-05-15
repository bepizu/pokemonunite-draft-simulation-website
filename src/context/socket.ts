import environment from '@/config/environment'
import React from "react"
import io, { Socket } from "socket.io-client"

export const socket = io(`${environment.API}/`)
export const SocketContext = React.createContext<Socket | null>(null)

// socket.on("connect", () => console.log(`socket connected ${socket.id}`))