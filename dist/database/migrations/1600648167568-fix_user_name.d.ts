import { MigrationInterface, QueryRunner } from "typeorm";
export declare class fixUserName1600648167568 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
