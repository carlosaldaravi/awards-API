"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDateborn1600719972811 = void 0;
class addDateborn1600719972811 {
    constructor() {
        this.name = 'addDateborn1600719972811';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "date_born" TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_born"`);
    }
}
exports.addDateborn1600719972811 = addDateborn1600719972811;
//# sourceMappingURL=1600719972811-add_dateborn.js.map