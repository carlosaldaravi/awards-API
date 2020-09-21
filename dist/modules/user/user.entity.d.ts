import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    dateborn: Date;
    role: string;
    status: string;
    CreatedAt: Date;
    UpdatedAt: Date;
}
