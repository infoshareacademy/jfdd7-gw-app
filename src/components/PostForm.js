import React from 'react'
import { connect } from 'react-redux'

import { updateTransaction, createTransaction} from '../state/posts'

class PostForm extends React.Component {

  state = {
    uid: this.props.uid || null,
    content: this.props.content || ''
  }

  handleSubmit = event => {
    const { uid, content } = this.state

    event.preventDefault()

    if (uid === null) {
      this.props.createTransaction({ content })
      this.setState({ content: '' })
    } else {
      this.props.updateTransaction(uid, { content })
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
    createTransaction: data => dispatch(createTransaction(data)),
    updateTransaction: (uid, data) => dispatch(updateTransaction(uid, data))
  })
)(PostForm)