"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixUserName1600648167568 = void 0;
class fixUserName1600648167568 {
    constructor() {
        this.name = 'fixUserName1600648167568';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "firstname" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "firstname" SET NOT NULL`);
    }
}
exports.fixUserName1600648167568 = fixUserName1600648167568;
//# sourceMappingURL=1600648167568-fix_user_name.js.map