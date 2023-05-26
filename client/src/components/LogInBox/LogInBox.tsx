import { useState } from 'react'

import styles from './LogInBox.module.css'


export default function LogInBox() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className={styles.LogInBox}>
            <div className={styles.login_box_container}>
                <div className={styles.header}>
                    <h2>Log In</h2>
                </div>
                <div className={styles.body}>
                    <label htmlFor="username_input" className={styles.username_input_label}>username</label>
                    <input type="text" name="username_input" className={styles.username_input_box}value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <label htmlFor="password_input" className={styles.password_input_label}>password</label>
                    <input type="password" name="password_input" className={styles.password_input_box} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type="submit" className={styles.login_button}>Log In</button>
                </div>
            </div>
        </div>
    )
}