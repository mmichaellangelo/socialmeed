import './App.css'

import {useState} from 'react'

import Header from './components/Header/Header'
import PostTimelineCard from './components/PostTimelineCard/PostTimelineCard.tsx'

import { sampledata } from './sample_data/sample_data.ts'
import { useAppSelector } from './store/store.ts'

const site_title = "SocialMeed"
const site_tagline= "get social. get meed."

interface post {
    author_name: string,
    post_title: string,
    post_body: string,
    post_id: number,
}

interface user {
  username: string,
  first_name: string,
  last_name: string,
  age: number,
}

export default function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  const [posts, setPosts] = useState<null | post[]>(null)
  const userInfo = useAppSelector(
    (state) => state.user
  )
  
  if (posts == null) {
    setPosts(getPosts());
  }

  return (
    <div id="App">
      <Header site_title={site_title} site_tagline={site_tagline} />
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
    </div>
  )
}

function getPosts() {
  return sampledata;
}

