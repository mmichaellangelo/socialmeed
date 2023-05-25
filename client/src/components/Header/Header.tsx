import { useAppSelector, useAppDispatch } from '../../store/store'
import { logIn, logOut } from '../../store/features/userSlice'

import classes from './Header.module.css'

interface HeaderProps {
    site_title: string,
    site_tagline: string,
}

export default function Header(props:HeaderProps) {

    const userState = useAppSelector(
        (state) => state.user
    )

    return (
        <div className={classes.Header}>
            <h1 className={classes.site_title}>{props.site_title}</h1>
            <div className={classes.header_user_info_area}>
                {
                    userState.logged_in ?
                        <p className={classes.is_logged_in}>logged in as {userState.name}</p>
                    :   
                        <p className={classes.is_logged_in}>logged out</p>
                }
            </div>
        </div>
    )
}
