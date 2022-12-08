/*
  Warnings:

  - You are about to drop the `Accounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Accounts";

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account" TEXT NOT NULL,
    "usedUnits" INTEGER NOT NULL DEFAULT 0,
    "accountInfo" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "jobInfo" JSONB NOT NULL DEFAULT '{}',
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_account_key" ON "Account"("account");

-- CreateIndex
CREATE INDEX "accountId" ON "Job"("accountId");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
