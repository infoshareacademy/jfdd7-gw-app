import React from 'react'
import {Grid} from 'react-bootstrap'
import {connect} from 'react-redux'
import PieChart from 'react-svg-piechart'
import {expandedSector} from 'react-svg-piechart'


export default connect(
  state => ({
    transactions: state.transactions.data
  })
)(
  class StatsApplePieView extends React.Component {
    constructor() {
      super()

      this.state = {
        expandedSector: null,
      }

      this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
    }

    handleMouseEnterOnSector(sector) {
      this.setState({expandedSector: sector})
    }


    render() {
      const transactions = this.props.transactions === null ? [] : this.props.transactions
      const sumValuesOfOneCategory = category =>
        transactions.filter(
          transaction => transaction.category === category
        ).reduce(
          (total, next) => total + next.value,
          0
        ).toFixed(2)

      const colors = ['red', 'green', 'blue', 'lightblue', 'grey', 'yellow', 'pink', 'brown', 'black', 'white']

      const totals = transactions.filter(transaction => transaction.value < 0
      ).map(
        transaction => transaction.category
      ).filter(
        (item, index, allItems) => allItems.indexOf(item) === index
      ).map(
        (category, index) => ({
          value: Math.abs(parseFloat(sumValuesOfOneCategory(category))),
          category: category,
          label: category,
          color: colors[index % colors.length]
        })
      )

      return (

        <Grid>



          <div className="Pie" style={{maxHeight: 500, maxWidth: 500, margin: 'auto'}}>
            <PieChart
              data={ totals }
            />
            <div style={{lineHeight: 0.4}}>
              {
                totals.map((element, i) => (
                  <div key={i} style={{fontSize: 15, margin: 0, padding: 0}}>
                    <span style={{color: element.color, margin: 0, padding: 0, marginRight: 10, fontSize:50, position: 'relative', top: 10}}>&bull;</span>
                    <span style={{fontWeight: "bold", lineHeight: 1}}>
                                {element.label} : {element.value}
                    </span>
                  </div>
                ))
              }
            </div>
          </div>

          {/*https://rma-consulting.github.io/react-easy-chart/*/}
        </Grid>
      )
    }
  }
)