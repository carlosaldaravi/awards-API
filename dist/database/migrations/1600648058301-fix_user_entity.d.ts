import { MigrationInterface, QueryRunner } from "typeorm";
export declare class fixUserEntity1600648058301 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
