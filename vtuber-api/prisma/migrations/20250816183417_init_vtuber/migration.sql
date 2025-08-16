-- CreateTable
CREATE TABLE "public"."Vtuber" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "group" TEXT,
    "followers" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Vtuber_pkey" PRIMARY KEY ("id")
);
