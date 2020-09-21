import {MigrationInterface, QueryRunner} from "typeorm";

export class addDateborn1600719972811 implements MigrationInterface {
    name = 'addDateborn1600719972811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "date_born" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_born"`);
    }

}
