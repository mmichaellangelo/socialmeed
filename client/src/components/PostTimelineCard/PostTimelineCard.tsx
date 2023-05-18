import classes from './PostTimelineCard.module.css'

interface PostTimelineCardProps {
    author_name: string,
    post_title: string,
    post_body: string
}

export default function PostTimelineCard(props:PostTimelineCardProps) {
    return (
        <div className={classes.PostTimelineCard}>
            <div className={classes.post_header_container}>
                <img src="https://www.cdbradshaw.com/wp-content/uploads/2021/07/generic-avatar.jpg" className={classes.profile_picture}></img>
                <div className={classes.post_author_info_container}>
                    <h2 className={classes.post_author}>{props.author_name}</h2>
                    <p className={classes.post_date_time}>18 May 2023, 4:16 PM</p>
                </div>
            </div>
            <p>{props.post_body}</p>
        </div>
    )
}