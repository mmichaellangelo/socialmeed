import bcrypt from 'bcrypt'
import mysql, { RowDataPacket } from 'mysql2'
import dotenv from 'dotenv'
import { User, Post } from './INTERFACES'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()


export async function createUser(userData: User): Promise<User | unknown> {
    try {
        const hashedPassword = await bcrypt.hash(userData.password, 10)

        const user = {
            username: userData.username,
            email: userData.email,
            password: hashedPassword,
            first_name: userData.first_name,
            last_name: userData.last_name,
            bio: userData.bio ? userData.bio : "",
            profile_picture_url: userData.profile_picture_url ? userData.profile_picture_url : "",
        }

        const [result] = await pool.query<User[]>(`
            INSERT INTO users 
            (username, email, password, first_name, last_name,
                bio, profile_picture_url)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [user.username, user.email, user.password,
            user.first_name, user.last_name, user.bio, user.profile_picture_url])
        return result[0]
    } catch (error) {
        return error
    }
        
}


export async function getUserByUserName(username: string): Promise<User | null> {
    try {
        const [rows] = await pool.query<User[]>(`
            SELECT *
            FROM users
            WHERE username=?
        `, [username])
        return rows[0]
    } catch {
        return null
    }
}

export async function getPostById(postId: number): Promise<Post | null> {
    try {
        const [rows] = await pool.query<Post[]>(`
        SELECT * FROM posts
        WHERE id=?
        `, [postId])
        return rows[0]
    } catch {
        return null
    }
}