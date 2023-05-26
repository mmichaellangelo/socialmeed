import { RowDataPacket } from "mysql2";

export interface userAuth {
    username: string;
    password: string;
}

export interface IUser extends RowDataPacket {
    username: string;
    password: string;
}