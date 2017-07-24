import React from 'react'
import { connect } from 'react-redux'

import { updatePost, createPost} from '../state/posts'

class PostForm extends React.Component {

  state = {
    uid: this.props.uid || null,
    content: this.props.content || ''
  }

  handleSubmit = event => {
    const { uid, content } = this.state

    event.preventDefault()

    if (uid === null) {
      this.props.createPost({ content })
      this.setState({ content: '' })
    } else {
      this.props.updatePost(uid, { content })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.content}
            onChange={event => this.setState({
              content: event.target.value
            })}
          />
          <p>
            <button>{this.props.label}</button>
          </p>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    createPost: data => dispatch(createPost(data)),
    updatePost: (uid, data) => dispatch(updatePost(uid, data))
  })
)(PostForm)