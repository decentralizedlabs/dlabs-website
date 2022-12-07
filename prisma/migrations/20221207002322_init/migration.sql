-- CreateTable
CREATE TABLE "Credits" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account" TEXT NOT NULL,
    "usedUnits" INTEGER NOT NULL DEFAULT 0,
    "accountInfo" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "Credits_pkey" PRIMARY KEY ("id")
);
