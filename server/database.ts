import { user } from './INTERFACES'

import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getUser(userId:number) {
    const [rows] = await pool.query(`
        SELECT * 
        FROM users
        WHERE userId = ?`, [userId])
    return rows[0]
}

export async function createUser(user:user) {
    const [result] = await pool.query(`
        INSERT INTO users (id, username, name)
        VALUES (?, ?)
    `, [user.id, user.username, user.name])
    return result
}

export async function getPost(id:string) {
    const [rows] = await pool.query(`
        SELECT *
        FROM posts
        WHERE id = ?
    `, [id])
    return rows[0]
}