import { Router } from "express";
import Chat from "../schemas/chat";
import Room from "../schemas/room";
import User from "../schemas/user";

/* Chatting API */
const router = Router();

/* 채팅 목록 */
router.get("/:roomId", async (req, res) => {
  try {
    const chat = await Chat.findAll({
      where: {
        roomId: req.params.roomId,
      },
      include: [User, Room],
    });

    res.json(chat);
  } catch (e) {}
});

/* 채팅 전송 */
router.post("/:roomId", async (req, res) => {
  try {
    const chat = await Chat.create({
      sessionId: req.session.UserId,
      content: req.body.content,
      roomId: req.params.roomId,
    });

    /*TODO: socket*/
    res.json({ message: "OK" });
  } catch (error) {}
});

export default router;
