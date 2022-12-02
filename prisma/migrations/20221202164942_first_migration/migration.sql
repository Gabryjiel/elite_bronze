-- CreateEnum
CREATE TYPE "Side" AS ENUM ('BLUE', 'RED', 'NONE');

-- CreateEnum
CREATE TYPE "Waywin" AS ENUM ('KILL', 'CS', 'TOWER', 'SURRENDER');

-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('UNKNOWN', 'IRON_4', 'IRON_3', 'IRON_2', 'IRON_1', 'BRONZE_5', 'BRONZE_4', 'BRONZE_3', 'BRONZE_2', 'BRONZE_1', 'SILVER_5', 'SILVER_4', 'SILVER_3', 'SILVER_2', 'SILVER_1', 'GOLD_5', 'GOLD_4', 'GOLD_3', 'GOLD_2', 'GOLD_1', 'PLATINUM_5', 'PLATINUM_4', 'PLATINUM_3', 'PLATINUM_2', 'PLATINUM_1', 'DIAMOND_5', 'DIAMOND_4', 'DIAMOND_3', 'DIAMOND_2', 'DIAMOND_1', 'MASTER', 'GRANDMASTER', 'CHALLENGER');

-- CreateEnum
CREATE TYPE "Stage" AS ENUM ('FINAL', 'SEMIFINAL', 'THIRD_PLACE_MATCH', 'QUARTERFINAL', 'ONE_8_FINAL', 'ONE_16_FINAL', 'ONE_32_FINAL', 'ONE_64_FINAL', 'GROUP_A', 'GROUP_B', 'GROUP_C', 'GROUP_D', 'GROUP_E', 'GROUP_F', 'GROUP_G', 'GROUP_H');

-- CreateTable
CREATE TABLE "users" (
    "usr_id" SERIAL NOT NULL,
    "usr_name" VARCHAR(64) NOT NULL,
    "usr_password" VARCHAR(128),
    "usr_email" VARCHAR(128),

    CONSTRAINT "users_pkey" PRIMARY KEY ("usr_id")
);

-- CreateTable
CREATE TABLE "tournaments" (
    "tou_id" SERIAL NOT NULL,
    "tou_name" VARCHAR(64) NOT NULL,
    "tou_description" VARCHAR(512),
    "tou_start_date" TIMESTAMP(3) NOT NULL,
    "tou_end_date" TIMESTAMP(4) NOT NULL,
    "tou_created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tou_updated_at" TIMESTAMP(1) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tournaments_pkey" PRIMARY KEY ("tou_id")
);

-- CreateTable
CREATE TABLE "matches" (
    "mat_id" SERIAL NOT NULL,
    "mat_tou_id" INTEGER NOT NULL,
    "stage" "Stage" NOT NULL,
    "mat_created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mat_updated_at" TIMESTAMP(1) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("mat_id")
);

-- CreateTable
CREATE TABLE "champions" (
    "cha_id" SERIAL NOT NULL,
    "cha_name" VARCHAR(32) NOT NULL,
    "cha_slug" VARCHAR(16) NOT NULL,
    "cha_created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cha_updated_at" TIMESTAMP(1) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "champions_pkey" PRIMARY KEY ("cha_id")
);

-- CreateTable
CREATE TABLE "games" (
    "gam_id" SERIAL NOT NULL,
    "gam_mat_id" INTEGER NOT NULL,
    "gam_way_id" "Waywin" NOT NULL,
    "gam_winside" "Side" NOT NULL,
    "gam_duration" INTEGER,
    "gam_video_url" TEXT,
    "gam_created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gam_updated_at" TIMESTAMP(1) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "games_pkey" PRIMARY KEY ("gam_id")
);

-- CreateTable
CREATE TABLE "players" (
    "pla_id" SERIAL NOT NULL,
    "pla_name" VARCHAR(32),
    "rank" "Rank" NOT NULL,
    "pla_usr_id" INTEGER NOT NULL,
    "pla_tou_id" INTEGER NOT NULL,
    "pla_placement" INTEGER,
    "pla_created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pla_updated_at" TIMESTAMP(1) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "players_pkey" PRIMARY KEY ("pla_id")
);

-- CreateTable
CREATE TABLE "players_games" (
    "plg_id" SERIAL NOT NULL,
    "plg_gam_id" INTEGER NOT NULL,
    "plg_pla_id" INTEGER NOT NULL,
    "plg_cha_id" INTEGER,
    "plg_cs" INTEGER,
    "plg_side" "Side" NOT NULL,
    "plg_created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "plg_updated_at" TIMESTAMP(1) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "players_games_pkey" PRIMARY KEY ("plg_id")
);

-- CreateTable
CREATE TABLE "bans" (
    "ban_id" SERIAL NOT NULL,
    "ban_plm_id" INTEGER NOT NULL,
    "ban_cha_id" INTEGER NOT NULL,
    "ban_created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ban_updated_at" TIMESTAMP(1) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bans_pkey" PRIMARY KEY ("ban_id")
);

-- CreateTable
CREATE TABLE "_MatchToPlayer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MatchToPlayer_AB_unique" ON "_MatchToPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_MatchToPlayer_B_index" ON "_MatchToPlayer"("B");

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_mat_tou_id_fkey" FOREIGN KEY ("mat_tou_id") REFERENCES "tournaments"("tou_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_gam_mat_id_fkey" FOREIGN KEY ("gam_mat_id") REFERENCES "matches"("mat_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_pla_usr_id_fkey" FOREIGN KEY ("pla_usr_id") REFERENCES "users"("usr_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_pla_tou_id_fkey" FOREIGN KEY ("pla_tou_id") REFERENCES "tournaments"("tou_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "players_games" ADD CONSTRAINT "players_games_plg_cha_id_fkey" FOREIGN KEY ("plg_cha_id") REFERENCES "champions"("cha_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players_games" ADD CONSTRAINT "players_games_plg_pla_id_fkey" FOREIGN KEY ("plg_pla_id") REFERENCES "players"("pla_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players_games" ADD CONSTRAINT "players_games_plg_gam_id_fkey" FOREIGN KEY ("plg_gam_id") REFERENCES "games"("gam_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bans" ADD CONSTRAINT "bans_ban_cha_id_fkey" FOREIGN KEY ("ban_cha_id") REFERENCES "champions"("cha_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bans" ADD CONSTRAINT "bans_ban_plm_id_fkey" FOREIGN KEY ("ban_plm_id") REFERENCES "players_games"("plg_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_MatchToPlayer" ADD CONSTRAINT "_MatchToPlayer_A_fkey" FOREIGN KEY ("A") REFERENCES "matches"("mat_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MatchToPlayer" ADD CONSTRAINT "_MatchToPlayer_B_fkey" FOREIGN KEY ("B") REFERENCES "players"("pla_id") ON DELETE CASCADE ON UPDATE CASCADE;
