import { useAppSelector, useAppDispatch } from '../../store/store'

import styles from './Header.module.css'

export default function Header() {

    const userState = useAppSelector(
        (state) => state.user
    )

    return (
        <div className={styles.Header}>
            <h1 className={styles.site_title}>SocialMeed</h1>
            <div className={styles.header_user_info_area}>
                {
                    userState.logged_in ?
                        <p className={styles.is_logged_in}>logged in as {userState.name}</p>
                    :   
                        <p className={styles.is_logged_in}>logged out</p>
                }
            </div>
        </div>
    )
}
