import { Router } from "express";
import { Op } from "sequelize";
import { v4 as uuid } from "uuid";

import User from "../schemas/user";

/* User API */
const router = Router();

/* 유저 목록 */
router.get("/", async (req, res) => {
  try {
    // findAndCountAll: 해당 조건에 해당하는 유저 목록들이 응답하고 카운트까지 응답에 포함
    const result = await User.findAndCountAll({
      where: {
        id: {
          [Op.ne]: req.session.userId, // Op.ne ==> !=
        },
      },
    });

    res.json(result);
  } catch (e) {}
});

/* 세션 조회 */
router.get("/me", async (req, res) => {
  try {
    res.json({
      username: req.session.username,
      userId: req.session.userId,
      isLogged: req.session.isLogged,
    });
  } catch (e) {}
});

/* 로그인 */
router.post("/login", async (req, res) => {
  try {
    const userId = uuid();
    const username = req.body.username;

    const user = await User.create({
      id: userId,
      username,
    });

    req.session.username = username;
    req.session.userId = userId;
    req.session.isLogged = true;

    req.session.save(() => {
      res.json({
        statusText: "OK",
        data: user,
      });
    });
  } catch (e) {}
});

/* 로그아웃 */
router.post("/logout", async (req, res) => {
  try {
    delete req.session.user;

    req.session.save(() => {
      res.redirect("/");
    });
  } catch (e) {}
});

export default router;
