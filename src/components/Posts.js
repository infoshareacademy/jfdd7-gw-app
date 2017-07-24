import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../state/posts'
import { favPost } from '../state/favs'

import PostForm from '../../../jfdd7-gw-app/src/components/PostForm'

const Posts = ({ posts, favedPostIds, handleDeletePostClick, handleFavPostClick }) => (
  <div>
    <h2>Posts</h2>
    {
      posts.data === null ?
        <p>Loading posts...</p> :
        posts.data.length === 0 ?
          <p>No posts to display</p> :
          posts.data.slice().reverse().map(
            post => (
              <div key={post.uid}>
                <p>
                  <strong>{post.author}:</strong> {post.content}
                </p>

                <PostForm uid={post.uid} content={post.content} label="Update"/>

                <button data-uid={post.uid} onClick={handleDeletePostClick}>
                  Delete
                </button>

                <button data-uid={post.uid} onClick={handleFavPostClick}>
                  {
                    favedPostIds === null ?
                      '...' :
                      favedPostIds[post.uid] === true ?
                        <span>&hearts;</span> : ''
                  } Fav
                </button>
                <hr />
              </div>
            )
          )
    }
  </div>
)

export default connect(
  state => ({
    posts: state.posts,
    favedPostIds: state.favs.postIds
  }),
  dispatch => ({
    handleDeletePostClick: event => dispatch(deletePost(event.target.dataset.uid)),
    handleFavPostClick: event => dispatch(favPost(event.target.dataset.uid))
  })
)(Posts)