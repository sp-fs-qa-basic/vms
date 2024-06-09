import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/companies", async (req, res) => {
  const {
    offset = 0,
    limit = 10,
    view = "accInvest_desc",
    search = "",
  } = req.query;

  let orderBy;
  switch (view) {
    case "accInvest_desc":
      orderBy = { accInvest: "desc" };
      break;
    case "revenue_desc":
      orderBy = { revenue: "desc" };
      break;
    case "employee_desc":
      orderBy = { employee: "desc" };
      break;
    case "employee_asc":
      orderBy = { employee: "asc" };
      break;
    default:
      orderBy = { id: "asc" };
      break;
  }

  const companies = await prisma.company.findMany({
    where: search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
          ],
        }
      : {},
    skip: parseInt(offset),
    take: parseInt(limit),
    orderBy,
  });
  res.send(companies);
});

app.get("/companies/:id", async (req, res) => {
  const companyId = parseInt(req.params.id);
  const company = await prisma.company.findUnique({
    where: { id: companyId },
  });
  res.send(company);
});

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
