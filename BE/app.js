import { Prisma, PrismaClient } from "@prisma/client";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

const prisma = new PrismaClient();

const app = express();
app.use(cors());
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
      view = "revenueDesc",
      search = "",
    } = req.query;

    let orderBy;
    switch (view) {
      case "accInvestDesc":
        orderBy = { accInvest: "desc" };
        break;
      case "accInvestAsc":
        orderBy = { accInvest: "asc" };
        break;
      case "revenueDesc":
        orderBy = { revenue: "desc" };
        break;
      case "revenueAsc":
        orderBy = { revenue: "asc" };
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

app.post(
  "/companies/:companyId/comparison",
  asyncHandler(async (req, res) => {
    const { view = "revenueDesc" } = req.query;
    const { companyId } = req.params;
    const { bodyCompanyIds } = req.body;

    if (!companyId || !bodyCompanyIds || !Array.isArray(bodyCompanyIds)) {
      return res.status(400).json({
        error:
          "companyId URL parameter and bodyCompanyIds array in the body are required",
      });
    }

    const companyIds = [companyId, ...bodyCompanyIds];

    const companies = await prisma.company.findMany({
      where: {
        companyId: { in: companyIds },
      },
      select: {
        companyId: true,
        name: true,
        description: true,
        category: true,
        accInvest: true,
        revenue: true,
        employee: true,
      },
    });

    if (companies.length === 0) {
      return res
        .status(404)
        .json({ error: "No companies found with the provided IDs" });
    }

    let sortedCompanies;
    switch (view) {
      case "accInvestAsc":
        sortedCompanies = companies.sort((a, b) => a.accInvest - b.accInvest);
        break;
      case "accInvestDesc":
        sortedCompanies = companies.sort((a, b) => b.accInvest - a.accInvest);
        break;
      case "revenueAsc":
        sortedCompanies = companies.sort((a, b) => a.revenue - b.revenue);
        break;
      case "revenueDesc":
        sortedCompanies = companies.sort((a, b) => b.revenue - a.revenue);
        break;
      case "employeeAsc":
        sortedCompanies = companies.sort((a, b) => a.employee - b.employee);
        break;
      case "employeeDesc":
        sortedCompanies = companies.sort((a, b) => b.employee - a.employee);
        break;
      default:
        sortedCompanies = companies; // 정렬 조건이 없을 경우 기본 정렬 (기존 순서)
    }

    res.json({ companies: sortedCompanies });
  })
);

app.get(
  "/companies/:companyId/rank",
  asyncHandler(async (req, res) => {
    const { companyId } = req.params;
    const { view } = req.query;

    if (!companyId || !view) {
      return res.status(400).json({
        error: "companyId URL parameter and sort query parameter are required",
      });
    }

    const companies = await prisma.company.findMany({
      select: {
        companyId: true,
        name: true,
        description: true,
        category: true,
        accInvest: true,
        revenue: true,
        employee: true,
      },
    });

    if (companies.length === 0) {
      return res.status(404).json({ error: "No companies found" });
    }

    let sortedCompanies;
    switch (view) {
      case "accInvestAsc":
        sortedCompanies = companies.sort((a, b) => a.accInvest - b.accInvest);
        break;
      case "accInvestDesc":
        sortedCompanies = companies.sort((a, b) => b.accInvest - a.accInvest);
        break;
      case "revenueAsc":
        sortedCompanies = companies.sort((a, b) => a.revenue - b.revenue);
        break;
      case "revenueDesc":
        sortedCompanies = companies.sort((a, b) => b.revenue - a.revenue);
        break;
      case "employeeAsc":
        sortedCompanies = companies.sort((a, b) => a.employee - b.employee);
        break;
      case "employeeDesc":
        sortedCompanies = companies.sort((a, b) => b.employee - a.employee);
        break;
      default:
        return res.status(400).json({ error: "Invalid sort parameter" });
    }

    // 해당 companyId를 가진 데이터의 인덱스 찾기
    const targetIndex = sortedCompanies.findIndex(
      (company) => company.companyId === companyId
    );
    if (targetIndex === -1) {
      return res
        .status(404)
        .json({ error: "Company with the provided companyId not found" });
    }

    let resultCompanies;
    if (targetIndex < 2) {
      resultCompanies = sortedCompanies.slice(0, 5);
    } else if (targetIndex > sortedCompanies.length - 3) {
      resultCompanies = sortedCompanies.slice(sortedCompanies.length - 5);
    } else {
      const startIndex = Math.max(0, targetIndex - 2);
      const endIndex = Math.min(sortedCompanies.length, targetIndex + 3);
      resultCompanies = sortedCompanies.slice(startIndex, endIndex);
    }

    res.json({
      rank: targetIndex + 1, // 순위는 0부터 시작하므로 +1
      companies: resultCompanies,
    });
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
