import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/companies", async (req, res) => {
  const companies = await prisma.startup.findMany();
  res.send(companies);
});

app.get("/companies/:id", async (req, res) => {
  const { id } = req.params;
  const company = await prisma.startup.findUnique({
    where: { id },
  });
  res.send(company);
});

app.listen(process.env.PORT || 3000, () => console.log('Server Started'));
