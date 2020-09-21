export interface IJwtPayload {
    id: number;
    username: string;
    email: string;
    role: string;
    iat?: Date;
}
