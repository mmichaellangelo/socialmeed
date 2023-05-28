import { RowDataPacket } from "mysql2";
import internal from "stream";


export interface User extends RowDataPacket {
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    bio?: string;
    profile_picture_url?: string;
}

// USER TYPE CHECKER
export function isUser(user: any): user is User {
    return (
        user.hasOwnProperty('username') &&
        user.hasOwnProperty('email') &&
        user.hasOwnProperty('password') &&
        user.hasOwnProperty('first_name') &&
        user.hasOwnProperty('last_name')
    ) 
    
}  

export interface Post extends RowDataPacket {
    id: number;
    user_id: number;
    date_created: Date;
    body: string;
}