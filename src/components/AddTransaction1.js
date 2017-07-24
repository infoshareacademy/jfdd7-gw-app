import React from 'react'
import PostForm from './PostForm'
import Posts from './Posts'

export default class AddTransaction1 extends React.Component {
  render() {
    return (
      <div>
        <PostForm label="Create"/>
        <Posts/>
      </div>
    )
  }
}