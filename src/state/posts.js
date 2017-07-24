import firebase from 'firebase'

const SYNC = 'posts/SYNC'

const syncPosts = posts => ({
  type: SYNC,
  posts
})

export const initPostsSync = () => dispatch => firebase.database().ref('posts').on(
  'value',
  snapshot => {
    const val = snapshot.val() || {}
    const posts = Object.keys(val).map(
      uid => ({...val[uid], uid})
    )
    dispatch(syncPosts(posts))
  }
)

export const createPost = data => dispatch => {
  const ref = firebase.database().ref('posts').push()
  ref.set({
    content: data.content,
    author: firebase.auth().currentUser.displayName
  })
}

export const updatePost = (uid, data) => dispatch => {
  const ref = firebase.database().ref('posts/' + uid)
  ref.update({
    content: data.content
  })
}

export const deletePost = uid => dispatch => {
  const ref = firebase.database().ref('/posts/' + uid)
  ref.remove()
}

const initialState = {
  data: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SYNC:
      return {
        ...state,
        data: action.posts
      }
    default:
      return state
  }
}

