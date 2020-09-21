"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstMigration1600643105692 = void 0;
class firstMigration1600643105692 {
    constructor() {
        this.name = 'firstMigration1600643105692';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(25) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "active" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.firstMigration1600643105692 = firstMigration1600643105692;
//# sourceMappingURL=1600643105692-first_migration.js.map