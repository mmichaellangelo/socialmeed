import { User } from '../../types/user';
import c from './UserProfilePage.module.css'


export default function UserProfilePage(props: User) {
    return(
        <div className="UserProfilePage">
            <div className={c.profile_page_container}>
                <h2 className={c.full_name}>{`${props.first_name} ${props.last_name}`}</h2>
                <h3 className={c.username}>{`@${props.username}`}</h3>
                <p className={c.bio}>{props.bio}</p>
            </div>
        </div>
    )
}