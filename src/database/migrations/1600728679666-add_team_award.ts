import { MigrationInterface, QueryRunner } from "typeorm";

export class addTeamAward1600728679666 implements MigrationInterface {
  name = "addTeamAward1600728679666";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "awards" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" character varying, "points" integer NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_4de02418c46c4e59220e0c24603" UNIQUE ("name"), CONSTRAINT "PK_bc3f6adc548ff46c76c03e06377" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user_awards" ("user_id" integer NOT NULL, "award_id" integer NOT NULL, CONSTRAINT "PK_392ff870369e1135f84c205c343" PRIMARY KEY ("user_id", "award_id"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d2a357040e13c154cda530604a" ON "user_awards" ("user_id") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1d78ac2f8c82072cca72e76160" ON "user_awards" ("award_id") `
    );
    await queryRunner.query(
      `ALTER TABLE "user_awards" ADD CONSTRAINT "FK_d2a357040e13c154cda530604ae" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user_awards" ADD CONSTRAINT "FK_1d78ac2f8c82072cca72e761608" FOREIGN KEY ("award_id") REFERENCES "awards"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_awards" DROP CONSTRAINT "FK_1d78ac2f8c82072cca72e761608"`
    );
    await queryRunner.query(
      `ALTER TABLE "user_awards" DROP CONSTRAINT "FK_d2a357040e13c154cda530604ae"`
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_1208ee1db5ddb64b48a86b46a61"`
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "team_id"`);
    await queryRunner.query(`DROP INDEX "IDX_1d78ac2f8c82072cca72e76160"`);
    await queryRunner.query(`DROP INDEX "IDX_d2a357040e13c154cda530604a"`);
    await queryRunner.query(`DROP TABLE "user_awards"`);
    await queryRunner.query(`DROP TABLE "awards"`);
  }
}
