import bcrypt from 'bcrypt'
import mysql, { RowDataPacket } from 'mysql2'
import dotenv from 'dotenv'
import { userAuth, IUser } from './INTERFACES'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()

export async function createUser(username: string, password: string): Promise<IUser[] | null> {
    if (pool == null) {
        return null
    } else {
        try {
            const hashedPassword = await bcrypt.hash(password, 10)
            const [result] = await pool.query<IUser[]>(`
                INSERT INTO userAuth (username, password)
                VALUES (?, ?)
            `, [username, hashedPassword])
            return result
        } catch {
            return null
        }
        
    }
}

export async function getUserByUserName(username: string): Promise<IUser[]> {
    const [rows] = await pool.query<IUser[]>(`
        SELECT *
        FROM userAuth
        WHERE username=?
    `, [username])
    return rows
}