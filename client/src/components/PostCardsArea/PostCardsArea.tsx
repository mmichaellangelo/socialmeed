import { useState } from 'react'

import PostTimelineCard from '../PostTimelineCard/PostTimelineCard'

import { sampledata } from '../../sample_data/sample_data'

interface post {
    author_name: string,
    post_title: string,
    post_body: string,
    post_id: number,
}

function getPosts() {
    return sampledata;
}

export default function PostCardsArea() {

    const [posts, setPosts] = useState<null | post[]>(null)

    if (posts == null) {
        setPosts(getPosts());
    }

    return (
        <div id="PostCardsArea">
            {
            posts ?
                posts.map(post => {
                    return <PostTimelineCard key={post.post_id} author_name={post.author_name} post_title={post.post_title} post_body={post.post_body} />
                })
                : 
                <p>Loading posts</p>
                }
            </div>
    )


}

