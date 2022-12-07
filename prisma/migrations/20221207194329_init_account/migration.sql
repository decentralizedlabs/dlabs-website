/*
  Warnings:

  - You are about to drop the `Credits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Credits";

-- CreateTable
CREATE TABLE "Accounts" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account" TEXT NOT NULL,
    "usedUnits" INTEGER NOT NULL DEFAULT 0,
    "accountInfo" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "Accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Accounts_account_key" ON "Accounts"("account");
