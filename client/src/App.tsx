import './App.css'

import {useState} from 'react'

import Header from './components/Header/Header'
import PostTimelineCard from './components/PostTimelineCard/PostTimelineCard.tsx'

import {sampledata} from './sample_data/sample_data.ts'

const site_title = "SocialMeed"
const site_tagline= "get social. get meed."

interface post {
    author_name: string,
    post_title: string,
    post_body: string
}

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [posts, setPosts] = useState<null | post[]>(null)

  if (posts == null) {
    setPosts(getPosts());
  }

  return (
    <div id="App">
      <Header site_title={site_title} site_tagline={site_tagline} logged_in={loggedIn} />
      <div id="PostCardsArea">
        {
        posts ?
          posts.map(post => {
            return <PostTimelineCard author_name={post.author_name} post_title={post.post_title} post_body={post.post_body} />
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

