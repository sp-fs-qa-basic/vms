-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "actualInvest" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "simInvest" DOUBLE PRECISION NOT NULL DEFAULT 0;