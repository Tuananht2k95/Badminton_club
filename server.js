import "./loadEnvironment.js";
import app from "./app.js";
import connectMongoDB from "./database/mongo.js";
import { createServer } from "http";

connectMongoDB.then(() => {
  console.log("connect to MongoDB success");
});

const httpSever = createServer(app);

httpSever.listen(process.env.PORT, () => {
  console.log(`Server is runing at ${process.env.PORT}`);
});
