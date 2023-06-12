import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/api", async (_req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: `Welcome to the API! Endpoints available at http://localhost:${port}/api/`,
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
