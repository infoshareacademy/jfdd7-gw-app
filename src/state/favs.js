import firebase from 'firebase'

const SYNC = 'favs/SYNC'

const favsSync = favs => ({
  type: SYNC,
  favs
})

export const initFavsSync = () => dispatch => {
  const userUid = firebase.auth().currentUser.uid
  firebase.database().ref('favs/' + userUid).on(
    'value',
    snapshot => {
      const favs = snapshot.val() || {}
      dispatch(favsSync(favs))
    }
  )
}

export const favPost = postUid => dispatch => {
  const userUid = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('favs/' + userUid + '/postIds/' + postUid)
  ref.set(true)
}

const initialState = {
  postIds: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SYNC:
      return {
        ...state,
        postIds: action.favs.postIds || null
      }
    default:
      return state
  }
}