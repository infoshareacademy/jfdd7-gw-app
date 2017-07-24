import React from 'react'
import PostForm from './PostForm'
import Posts from './Posts'
import firebase from 'firebase'

export default class AddTransaction1 extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => firebase.auth().signOut()}>
          Sign Out
        </button>
        <PostForm label="Create"/>
        <Posts/>
      </div>
    )
  }
}