"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixUserEntity1600648058301 = void 0;
class fixUserEntity1600648058301 {
    constructor() {
        this.name = 'fixUserEntity1600648058301';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" DROP DEFAULT`);
    }
}
exports.fixUserEntity1600648058301 = fixUserEntity1600648058301;
//# sourceMappingURL=1600648058301-fix_user_entity.js.map