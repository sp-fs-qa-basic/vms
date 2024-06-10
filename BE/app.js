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

app.post(
  "/investments",
  asyncHandler(async (req, res) => {
    const { name, companyId, amount, comment, password } = req.body;

    const companyExists = await prisma.company.findUnique({
      where: {
        companyId,
      },
    });
    if (!companyExists) {
      return res
        .status(404)
        .json({ error: "No company exists for the provided companyId." });
    }

    const newInvestment = await prisma.investor.create({
      data: {
        name,
        amount,
        comment,
        password,
        company: { connect: { companyId } }, // 외래 키에 해당하는 회사와 연결
      },
    });
    res.send(newInvestment);
  })
);

app.get(
  "/investments/:companyId",
  asyncHandler(async (req, res) => {
    const { companyId } = req.query;

    const investors = await prisma.investor.findMany({
      where: {
        companyId,
      },
      select: {
        id: true,
        name: true,
        amount: true,
        comment: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        amount: "desc",
      },
    });
    res.json(investors);
  })
);

app.patch(
  "/investments/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, amount, comment, password } = req.body;

    const updatedInvestor = await prisma.investor.update({
      where: { id },
      data: {
        name,
        amount,
        comment,
        password,
      },
    });
    res.json(updatedInvestor);
  })
);

app.delete(
  "/investments/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    await prisma.investor.delete({
      where: { id },
    });
    res.json({ message: "성공적으로 삭제되었습니다." });
  })
);

app.post(
  "/investments/:id/userCheck",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;

    const investor = await prisma.investor.findUnique({
      where: { id },
    });

    if (!investor) {
      return res.status(404).json({ error: "비밀번호가 일치하지 않습니다" });
    }

    if (investor.password !== password) {
      return res.status(401).json({ error: "비밀번호가 일치하지 않습니다." });
    }

    res.json({ message: "비밀번호가 일치합니다." });
  })
);

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
