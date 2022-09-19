import React from 'react'
import { useSelector } from 'react-redux'

const PostsList = () => {
  // useSelector hook allows us to retrieve a value from the store
  const posts = useSelector(state => state.posts)

  // return JSX for each post element
  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList