import express from "express";
import { prisma } from "./lib/prisma.js";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", async (req, res) => {
  const select = await prisma.user.findMany();
  res.json(select);
});

app.listen(3000, () => {
  console.log("Server is Running");
});