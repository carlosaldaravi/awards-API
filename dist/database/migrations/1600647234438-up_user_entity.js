"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upUserEntity1600647234438 = void 0;
class upUserEntity1600647234438 {
    constructor() {
        this.name = 'upUserEntity1600647234438';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "firstname" character varying(25) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastname" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" character varying(10) NOT NULL DEFAULT 'ALUMNO'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "status" character varying(8) NOT NULL DEFAULT 'ACTIVE'`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying(25) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastname"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstname"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "active" character varying(8) NOT NULL DEFAULT 'ACTIVE'`);
    }
}
exports.upUserEntity1600647234438 = upUserEntity1600647234438;
//# sourceMappingURL=1600647234438-up_user_entity.js.map