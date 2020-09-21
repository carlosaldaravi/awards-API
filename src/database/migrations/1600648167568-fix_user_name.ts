import {MigrationInterface, QueryRunner} from "typeorm";

export class fixUserName1600648167568 implements MigrationInterface {
    name = 'fixUserName1600648167568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "firstname" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "firstname" SET NOT NULL`);
    }

}
