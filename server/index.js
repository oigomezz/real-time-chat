import express from "express";
import logger from "morgan";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT ?? 3000;

const app = express();
const server = createServer(app);

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
