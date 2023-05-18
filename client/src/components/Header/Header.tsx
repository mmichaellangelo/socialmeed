import classes from './Header.module.css'

interface HeaderProps {
    site_title: string,
    site_tagline: string,
    logged_in: boolean
}

export default function Header(props:HeaderProps) {
    return (
        <div className={classes.Header}>
            <h1 className={classes.site_title}>{props.site_title}</h1>
            <div className={classes.header_user_info_area}>
                {
                    props.logged_in ?
                        <p className={classes.is_logged_in}>logged in as</p>
                    :   
                        <p className={classes.is_logged_in}>logged out</p>
                }
            </div>
        </div>
    )
}
