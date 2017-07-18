/**
 * Created by tomaszmoroz on 17.07.17.
 */
import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'

export default class FirstPage extends React.Component {

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4} lg={3}>
              <LinkContainer to="/categories" className="custom">
                <Button bsStyle="primary" bsSize="large" >Kategorie</Button>
              </LinkContainer>
            </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}
