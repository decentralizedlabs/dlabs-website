/*
  Warnings:

  - You are about to drop the column `usedUnits` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_accountId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "usedUnits";

-- DropTable
DROP TABLE "Job";
