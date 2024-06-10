// updateCompanyId.js
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

async function updateCompanyIds() {
  const companies = await prisma.company.findMany();

  for (const company of companies) {
    await prisma.company.update({
      where: { id: company.id },
      data: { companyId: uuidv4() },
    });
  }

  console.log("Company IDs updated");
}

updateCompanyIds()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
