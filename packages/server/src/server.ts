import express, { Application } from "express";
import session from "express-session"; //express 에서 session을 사용할 수 있도록 해주는 패키지
import router from "./routes";
import sequelize from "./sequelize";

const FileStore = require("session-file-store")(session);

const app: Application = express();

const sessionMiddleware = session({
  secret: "kakaoibs", // cookie를 의미로 변조하는 것을 방지하기 위함. => session을 암호화 하여 저장
  saveUninitialized: true, // session을 저장되기 전에 Uninitialize 상태로 미리 만들어서 저장하겠다
  cookie: { secure: false },
  resave: false,
  store: new FileStore(),
});

app.use(sessionMiddleware);
// request body 사용 가능 & routes 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true });

app.use("/", router);

app.listen(8000, () => {
  console.log("start");
});
