import express, { Application } from "express";
import router from "./routes";
import sequelize from "./sequelize";

const app: Application = express();

// request body 사용 가능 & routes 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true });

app.use("/", router);

app.listen(8000, () => {
  console.log("start");
});
