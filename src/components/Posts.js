import React from 'react'
import { connect } from 'react-redux'
import { deleteTransaction } from '../state/posts'
//import { favPost } from '../state/favs'

import PostForm from './PostForm'

const Transactions = ({ transactions, favedTransactionIds, handleDeleteTransactionClick, handleFavTransactionClick }) => (
  <div>
    <h2>Transactions</h2>
    {
      transactions.data === null ?
        <p>Loading transactions...</p> :
        transactions.data.length === 0 ?
          <p>No transactions to display</p> :
          transactions.data.slice().reverse().map(
            transaction => (
              <div key={transaction.uid}>
                <p>{transaction.title}: {transaction.value} {transaction.category}</p>
                <p>
                  <strong>{transaction.author}:</strong> {transaction.content}
                </p>

                <PostForm uid={transaction.uid} content={transaction.content} label="Update"/>

                <button data-uid={transaction.uid} onClick={handleDeleteTransactionClick}>
                  Delete
                </button>

                {/*<button data-uid={transaction.uid} onClick={handleFavTransactionClick}>*/}
                  {/*{*/}
                    {/*favedTransactionIds === null ?*/}
                      {/*'...' :*/}
                      {/*favedTransactionIds[transaction.uid] === true ?*/}
                        {/*<span>&hearts;</span> : ''*/}
                  {/*} Fav*/}
                {/*</button>*/}
                <hr />
              </div>
            )
          )
    }
  </div>
)

export default connect(
  state => ({
    transactions: state.posts,
    favedTransactionIds: state.favs.transactionIds
  }),
  dispatch => ({
    handleDeleteTransactionClick: event => dispatch(deleteTransaction(event.target.dataset.uid))
    // handleFavTransactionClick: event => dispatch(favTransaction(event.target.dataset.uid))
  })
)(Transactions)