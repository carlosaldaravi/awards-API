import { MigrationInterface, QueryRunner } from "typeorm";
export declare class firstMigration1600643105692 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
