/*
  Warnings:

  - Made the column `companyId` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "companyId" SET NOT NULL;
