import {MigrationInterface, QueryRunner} from "typeorm";

export class addAvatarFix1600816341653 implements MigrationInterface {
    name = 'addAvatarFix1600816341653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar" character varying(50)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
    }

}
