import React from 'react'
import {Table} from 'react-bootstrap'


const CategoryTransactions = (props) => (
        <div>
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
            <tr >
              <td>

              </td>
              <td >
                SUMA:
              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
            </tbody>
          </Table>
        </div>
      )
export default CategoryTransactions