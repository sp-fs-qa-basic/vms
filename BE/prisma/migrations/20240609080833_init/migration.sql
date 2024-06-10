-- CreateEnum
CREATE TYPE "Category" AS ENUM ('EDUCATION', 'MACHINERY', 'SOLUTION', 'E_COMMERCE');

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "accInvest" INTEGER NOT NULL,
    "revenue" INTEGER NOT NULL,
    "employee" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
