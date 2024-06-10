import { Prisma, PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

function asyncHandler(handler) {
  return async function (req, res) {
    try {
      await handler(req, res);
    } catch (e) {
      if (
        e.name === "StructError" ||
        e instanceof Prisma.PrismaClientValidationError
      ) {
        res.status(400).send({ message: e.message });
      } else if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2025"
      ) {
        res.sendStatus(404);
      } else {
        res.status(500).send({ message: e.message });
      }
    }
  };
}

app.get(
  "/companies",
  asyncHandler(async (req, res) => {
    const {
      offset = 0,
      limit = 10,
      view = "",
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
  })
);

app.get(
  "/companies/:id",
  asyncHandler(async (req, res) => {
    const companyId = parseInt(req.params.id);
    const company = await prisma.company.findUniqueOrThrow({
      where: { id: companyId },
    });
    res.send(company);
  })
);

app.post(
  "/selections/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const company = await prisma.company.update({
      where: { id: parseInt(id) },
      data: {
        selectionCount: {
          increment: 1,
        },
      },
    });
    res.send(company);
  })
);

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
