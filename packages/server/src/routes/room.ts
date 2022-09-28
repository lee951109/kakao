import { Router } from "express";
import Room from "../schemas/room";
import User from "../schemas/user";

/* Chatting room API */
const router = Router();

/* 채팅방 목록 */
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.findAll({
      include: User,
    });
  } catch (e) {}
});

/* 채팅방 상세 */
router.get("/roomId", async (req, res) => {
  try {
    const room = await Room.findOne({
      where: {
        id: Number(req.params.roomId),
      },
      include: User,
    });

    res.json(room);
  } catch (e) {}
});

/* 채팅방 생성 */

router.post("/", async (req, res) => {
  try {
    const room = await Room.create({
      onpopstate: req.body.onpopstate,
    });

    res.json(room);
  } catch (e) {}
});

export default router;
