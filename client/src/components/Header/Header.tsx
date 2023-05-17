import './Header.css'

interface HeaderProps {
    site_title: string,
    site_tagline: string,
    logged_in: boolean
}

export default function Header(props:HeaderProps) {
    return (
        <div id="Header">
            <h1 id="site_title">{props.site_title}</h1>
            <p id="site_tagline">{props.site_tagline}</p>
            {
                props.logged_in ?
                    <p id="is_logged_in">logged in</p>
                :   
                    <p id="is_logged_in">logged out</p>
            }
        </div>
    )
}
