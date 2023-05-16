import './App.css'

import {useState} from 'react'

import Header from './components/Header/Header'

import sampledata from './sample_data/sample_data'

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
    </div>
  )
}

function getPosts() {
  return sampledata;
}

