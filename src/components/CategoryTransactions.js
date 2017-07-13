import React from 'react'
import {Table} from 'react-bootstrap'


const CategoryTransactions = (props) => (
        <div>
          <p>Transactions</p>
          <Table bordered striped hover responsive>
            <thead>
            <tr>
              <th>numer</th>
              <th>data</th>
              <th>wartość</th>
              <th>kategoria</th>
            </tr>
            </thead>
            <tbody>
            {
              props.transactions.map(
                transaction => (
                  <tr key={transaction.id}>
                    <td>
                      { transaction.id }
                    </td>
                    <td>
                      { transaction.date }
                    </td>
                    <td>
                      { transaction.value }
                    </td>
                    <td>
                      { transaction.category }
                    </td>
                  </tr>
                )
              )
            }
            </tbody>
          </Table>
        </div>
      )
export default CategoryTransactions