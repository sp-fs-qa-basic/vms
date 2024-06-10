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
    const { offset = 0, limit = 10, view = "", search = "" } = req.query;

    let orderBy;
    switch (view) {
      case "accInvestDesc":
        orderBy = { accInvest: "desc" };
        break;
      case "revenueDesc":
        orderBy = { revenue: "desc" };
        break;
      case "employeeDesc":
        orderBy = { employee: "desc" };
        break;
      case "employeeAsc":
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

app.get(
  "/selections",
  asyncHandler(async (req, res) => {
    const { view = "" } = req.query;

    let orderBy;
    switch (view) {
      case "selectionAsc":
        orderBy = { selectionCount: "asc" };
        break;
      case "selectionDesc":
        orderBy = { selectionCount: "desc" };
        break;
      default:
        orderBy = { id: "asc" };
        break;
    }

    const companies = await prisma.company.findMany({
      select: {
        id: true,
        companyId: true,
        selectionCount: true,
      },
      orderBy,
    });
    res.send(companies);
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
