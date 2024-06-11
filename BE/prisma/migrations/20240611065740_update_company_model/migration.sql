/*
  Warnings:

  - You are about to drop the column `selectionCount` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "selectionCount",
ADD COLUMN     "comparedSelectionCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "mySelectionCount" INTEGER NOT NULL DEFAULT 0;
