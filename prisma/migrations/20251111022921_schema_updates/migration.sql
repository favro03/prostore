/*
  Warnings:

  - Added the required column `title` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `rating` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "title" TEXT NOT NULL,
DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL;
