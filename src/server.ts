import express, { Request, Response } from "express";
import cors from "cors";
import { CreateUserController } from "./controllers/create-controller";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.post("/api/create", async (request: Request, response: Response) => {
  const controller = new CreateUserController();

  const { statusCode, body } = await controller.execute(request);

  response.status(statusCode).send(body);
});

app.listen(3000, () => console.log("Rodando"));
