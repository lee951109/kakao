import { Application, NextFunction, RequestHandler } from "express";
import { Server } from "net";
import { Socket } from "socket.io";

const SockectIO = require("socket.io");

const socket = (server: Server, app: Application, session: RequestHandler) => {
  const io = SockectIO(server, {
    path: "/socket.io",
    cors: {
      origin: "*",
    },
  });

  app.set("io", io);

  const chat = io.of("/chat"); // chatting에서만 socket을 사용함.

  io.use((socket: Socket, next: NextFunction) => {
    const req = socket.request;

    const res = socket.request.res || {};

    session(req, res, next);
  });

  chat.on("connection", async (req, res) => {
    socket.on("join", (rooId) => {
      socket.join(roomId);
    });

    socket.on("disconnect", (date) => {
      console.log("Disconnected to Chatting");
    });
  });
};

export default socket;
