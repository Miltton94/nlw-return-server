import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(routes);

Headers;

app.listen(process.env.PORT || 3333, () => {
  console.log("Servidor rodando na porta 3333");
});
