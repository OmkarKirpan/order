import React from "react";
import { Form, Button } from "react-bootstrap";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "India",
      region: "Delhi",
      firstName: "",
      lastName: "",
      city: "",
      phoneNumber: "",
      emailID: "",
      add1: "",
      add2: "",
      postalCode: ""
    };
  }
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  handlechange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    // alert('A name was submitted: ' + this.state.value);

    console.log(this.state);
    this.props.address(this.state);
    //Send Data to Firebase
    e.preventDefault();
  };

  render() {
    const {
      country,
      region,
      firstName,
      lastName,
      city,
      phoneNumber,
      emailID,
      add1,
      add2,
      postalCode
    } = this.state;

    // console.log("state", this.state);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGroupName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={firstName}
              name="firstName"
              onChange={this.handlechange}
              type="text"
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={lastName}
              name="lastName"
              onChange={this.handlechange}
              type="text"
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={phoneNumber}
              name="phoneNumber"
              onChange={this.handlechange}
              type="text"
              placeholder="Phone Number"
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              value={emailID}
              name="emailID"
              onChange={this.handlechange}
              type="text"
              placeholder="Email Address"
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Address line 01</Form.Label>
            <Form.Control
              value={add1}
              name="add1"
              onChange={this.handlechange}
              type="text"
              placeholder="Address line 01"
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Address line 02</Form.Label>
            <Form.Control
              value={add2}
              name="add2"
              onChange={this.handlechange}
              type="text"
              placeholder="Address line 02"
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Town/City</Form.Label>
            <Form.Control
              value={city}
              name="city"
              onChange={this.handlechange}
              type="text"
              placeholder="Town/City"
            />
          </Form.Group>

          <div>
            Country:
            <CountryDropdown
              value={country}
              onChange={val => this.selectCountry(val)}
              className="form-control"
            />
            <br />
            State:
            <RegionDropdown
              country={country}
              value={region}
              onChange={val => this.selectRegion(val)}
              className="form-control"
            />
          </div>
          {/* 
          <Form.Group controlId="formGroupName">
            <Form.Label>State</Form.Label>
            <Form.Control
              name="title"
              onChange={this.handlechange}
              type="text"
              placeholder="State"
            />
          </Form.Group> */}
          <br />
          <Form.Group controlId="formGroupName">
            <Form.Label>Postal Code/ZIP</Form.Label>
            <Form.Control
              value={postalCode}
              name="postalCode"
              onChange={this.handlechange}
              type="text"
              placeholder="Postal Code/ZIP"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Address
          </Button>
        </Form>
      </div>
    );
  }
}

export default Address;
