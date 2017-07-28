import React from 'react'
import {Table} from 'react-bootstrap'


const CategoryTransactions = (props) => (
        <div>
          <Table bordered striped hover responsive>
            <thead>
            <tr>
              <th>data</th>
              <th className="text-right">wartość</th>
              <th className="text-right">tytuł</th>
            </tr>
            </thead>
            <tbody>
            {
              props.transactions.map(
                transaction => (
                  <tr key={transaction.id}>
                    <td>
                      { transaction.date }
                    </td>
                    <td className="text-right" style={ transaction.value > 0 ? {color: 'green'} : {color: 'red'}}>
                      { (transaction.value) }
                    </td>
                    <td className="text-right">
                      { transaction.title }
                    </td>

                  </tr>
                )
              )
            }
            <tr >
              <td className="text-right" >
                SUMA:
              </td>
              <td>
                {
                  props.transactions.reduce((total, next) => total + (next.value || 0), 0).toFixed(2)
                }
              </td>
              <td>

              </td>
            </tr>
            </tbody>
          </Table>
        </div>
      )
export default CategoryTransactions