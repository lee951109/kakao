import { Sequelize } from "sequelize";

// 시퀄 라이즈(Sequelize)는 DB 작업을 쉽게 할 수 있도록 도와주는 ORM 라이브러리이다.
// * ORM(Object-Relational Mapping)의 약자이다.즉, ORM은 자바스크립트 객체와 관계형 데이터베이스를 서로 연결해주는 도구다.

const sequelize = new Sequelize("sqlite::memory:");

export default sequelize;
