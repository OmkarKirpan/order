import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./addressConfirmation.styles.scss";

function AddressConfirmation({ BA, SA }) {
  // let { postalCode, country, city, add1 } = BA;
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="details_item">
              <h4>Billing Address</h4>
              <ul className="list">
                <li>
                  <a href="#">
                    <span>Street</span> : {BA.add1}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>City</span> : {BA.city}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Country</span> : {BA.country}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Postcode </span> : {BA.postalCode}
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="details_item">
              <h4>Shipping Address</h4>
              <ul className="list">
                <li>
                  <a href="#">
                    <span>Street</span> : {SA.add1}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>City</span> : {SA.city}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Country</span> : {SA.country}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Postcode </span> : {SA.postalCode}
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddressConfirmation;
