import {MigrationInterface, QueryRunner} from "typeorm";

export class deletedTeam1600798863328 implements MigrationInterface {
    name = 'deletedTeam1600798863328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1208ee1db5ddb64b48a86b46a61"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "team_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "team_id" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1208ee1db5ddb64b48a86b46a61" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
