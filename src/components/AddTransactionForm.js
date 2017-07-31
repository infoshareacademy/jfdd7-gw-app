import React from 'react'
import {FormControl, FormGroup, ControlLabel, Button, Grid} from 'react-bootstrap'
import {connect} from 'react-redux'
import moment from 'moment'
import Tour from 'react-user-tour'

import {updateTransaction, createTransaction} from '../state/posts'
const ulStyle = {
  backgroundColor: 'white',
  padding: 0,
  borderRadius: '0 0 4px 4px',
  border: '1px solid #ccc',
  borderBottomStyle: 'none'
}




//import {add} from '../state/transactions'


class AddTransactionForm extends React.Component {

  state = {
    uid: this.props.uid || null,
    date: this.props.date || moment().format('YYYY-MM-D'),
    value: this.props.value || '-',
    title: this.props.title || '',
    category: this.props.category || '',
    isTourActive: true,
    tourStep: 1,
  }

  handleSubmit = event => {
    const {uid, date, value, title, category} = this.state

    event.preventDefault()

    if (uid === null) {
      this.props.createTransaction({date, value, title, category})
      this.setState({
        date: '',
        value: '',
        title: '',
        category: ''
      })
    } else {
      this.props.updateTransaction(uid, {date, value, title, category})
    }
  }

  render() {

    const transactions = this.props.transactions === null ? [] : this.props.transactions

    const categories = transactions.map(
      transaction => transaction.category
    ).filter(
      (item, index, allItems) => allItems.indexOf(item) === index
    ).filter(
      category => (
        category.toLowerCase().includes(this.state.category) ? this.state.category.toLowerCase() : null
      )
    )
    return (
      <Grid>
        <Tour
          active={this.state.isTourActive}
          step={this.state.tourStep}
          onNext={(step) => this.setState({tourStep: step})}
          onBack={(step) => this.setState({tourStep: step})}
          onCancel={() => this.setState({isTourActive: false})}

          steps={[
            {
              step: 1,
              title: <h4 style={{color: "red", padding: '7px' }}>PRZECZYTAJ DOKŁADNIE TE WSKAZÓWKI, ZAJMIE TO TYLKO CHWILĘ.</h4>,
            },
            {
              step: 2,
              position: 'bottom',
              selector: "#dateInput",
              title: <h4 style={{color: "blue", padding: '7px'}}>KWOTA</h4>,
              body: <div style={{color: "green", padding: '7px'}}>Podaj kwotę transakcji. Użyj "-" (ustwienie domyślne) dla wydatków. Wyczyść polę dla wpływów ("-" jest zbędny).</div>

            },
            {
              step: 3,
              position: 'bottom',
              selector: "#amountInput",
              title: <h4 style={{color: "blue", padding: '7px'}}>TYTUŁ</h4>,
              body: <div style={{color: "green",padding: '7px'}}>Dodaj krótki opis, np. "miesięczne rachunki" lub "paliwo". </div>
            },
            {
              step: 4,
              position: 'top',
              selector: "#titleInput",
              title: <h4 style={{color: "blue", padding: '7px'}}>KATEGORIA</h4>,
              body: <div style={{color: "green", padding: '7px'}}>Dodaj kategorię by pogrupować swoje wydatki, np. jeśli dwie różne transakcje zatytułowałeś "paliwo" i "ubezpieczenie samochodu", użyj wspólnej kategorii "samochód" lub "transport"</div>
            },
            {
              step: 5,
              position: 'top',
              selector: "#categoryInput",
              title: <h4 style={{color: "blue", padding: '7px'}}>FILTRY</h4>,
              body: <div style={{color: "green", padding: '7px'}}>Filtruj ostatnie transakcje</div>
            },
          ]}
        />

        <div>
          <form onSubmit={this.handleSubmit}>
            <FormGroup bsSize="large">
              <ControlLabel>Data</ControlLabel>
              <FormControl
                id="dateInput"
                type="date"
                placeholder="Data"
                value={this.state.date}
                onChange={event => this.setState({
                  date: event.target.value || moment().format('YYYY-MM-D')
                })}
              />
            </FormGroup>
            <FormGroup bsSize="large">
              <ControlLabel>Kwota</ControlLabel>
              <FormControl required
                           id="amountInput"
                           type="text"
                           placeholder="Kwota"
                           value={this.state.value}
                           onChange={event => this.setState({
                             value: event.target.value
                           })}
              />
            </FormGroup>
            <FormGroup bsSize="large">
              <ControlLabel>Tytuł</ControlLabel>
              <FormControl required
                           id="titleInput"
                           type="text"
                           placeholder="Tytuł"
                           value={this.state.title}
                           onChange={event => this.setState({
                             title: event.target.value
                           })}
              />
            </FormGroup>

            <FormGroup style={{marginBottom: 0}} controlId="formControlsSelectMultiple">
              <ControlLabel>Kategoria</ControlLabel>
              <FormControl required
                           id="categoryInput"
                           autoComplete="off"
                           type="text"
                           placeholder="Kategoria"
                           value={this.state.category}
                           onChange={event => this.setState({
                             category: event.target.value
                           })}
                           style={{borderRadius: '4px 4px 0 0'}}
              />

            </FormGroup>
            <ul style={ulStyle}>
              {categories.map(category => <li style={{listStyleType: 'none', padding: '0 0 6px 12px'}}>{category}</li>)}
            </ul>
            <Button type="submit" className='left col-xs-12 col-md-5' bsStyle="success">Dodaj wpis</Button>
          </form>


        </div>
      </Grid>
    )
  }
}

export default connect(
  state => ({
    transactions: state.posts.data
  }),
  dispatch => ({
    createTransaction: data => dispatch(createTransaction(data)),
    updateTransaction: (uid, data) => dispatch(updateTransaction(uid, data))
  })
)(AddTransactionForm)