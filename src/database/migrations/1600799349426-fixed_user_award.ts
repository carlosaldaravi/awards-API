import {MigrationInterface, QueryRunner} from "typeorm";

export class fixedUserAward1600799349426 implements MigrationInterface {
    name = 'fixedUserAward1600799349426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "team" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "awards" ADD "type" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "awards" ADD "subtype" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "awards" ADD "order" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "awards" DROP COLUMN "order"`);
        await queryRunner.query(`ALTER TABLE "awards" DROP COLUMN "subtype"`);
        await queryRunner.query(`ALTER TABLE "awards" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "team"`);
    }

}
