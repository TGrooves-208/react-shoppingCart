import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button 
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({open: !this.state.open})}
        >
        { this.state.open === false ? `See` : `Hide `} item details
        { this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                  width={100}
                  height={100}
                  alt="thumbnail"
                  src="https://i5.walmartimages.com/asr/66fae1aa-d8bc-4089-8554-c1b1fc0c6d92_1.a18ee650ed91efecab34d94b75a5ba0a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                   />
                </Media.Left>
                <Media.Body>
                  <p>
                    Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Black
                  </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong> {`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike"> {`$${this.props.price}`}</strong>
                    </Col>
                    <Col md={6}> Qty: 1 </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}