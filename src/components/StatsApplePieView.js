import React from 'react'
import {Grid} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Doughnut} from 'react-chartjs'
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

      const totals = transactions.filter(transaction => transaction.value < 0
      ).map(
        transaction => transaction.category
      ).filter(
        (item, index, allItems) => allItems.indexOf(item) === index
      ).map(
        category => ({
          value: Math.abs(parseFloat(sumValuesOfOneCategory(category))),
          category: category,
          label: category
        })
      )

      return (

        <Grid>
//donat
          {/*<Doughnut data={totals} maxWidth={500}/>*/}
//pie
          {/*<div className="Pie" style={{maxHeight: 500, maxWidth: 500}}>*/}
            {/*<PieChart*/}
              {/*data={ totals }*/}
              {/*expandedSector={expandedSector}*/}
              {/*onSectorHover={this.handleMouseEnterOnSector}*/}
              {/*sectorStrokeWidth={2}*/}
              {/*expandOnHover*/}
              {/*shrinkOnTouchEnd*/}
            {/*/>*/}
            {/*<div>*/}
              {/*{*/}
                {/*totals.map((element, i) => (*/}
                  {/*<div key={i}>*/}
                    {/*<span style={{background: this.element}}></span>*/}
                    {/*<span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>*/}
                                {/*{element.label} : {element.value}*/}
                            {/*</span>*/}
                  {/*</div>*/}
                {/*))*/}
              {/*}*/}
            {/*</div>*/}
          {/*</div>*/}

          https://rma-consulting.github.io/react-easy-chart/
        </Grid>
      )
    }
  }
)