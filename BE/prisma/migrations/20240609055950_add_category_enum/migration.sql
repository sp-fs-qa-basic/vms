/*
  Warnings:

  - Changed the type of `category` on the `Startup` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('EDUCATION', 'MACHINERY', 'SOLUTION', 'E_COMMERCE');

-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;
