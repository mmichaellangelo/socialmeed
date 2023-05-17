import './PostTimelineCard.css'

interface PostTimelineCardProps {
    author_name: string,
    post_title: string,
    post_body: string
}

export default function PostTimelineCard(props:PostTimelineCardProps) {
    return (
        <div className="PostTimelineCard">
            <h3>{props.author_name}</h3>
            <h4>{props.post_title}</h4>
            <p>{props.post_body}</p>
        </div>
    )
}