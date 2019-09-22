import React from "react";
import { Form, Button } from "react-bootstrap";
import Address from "./address";

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDiff: false, BA: "", SA: "" };
  }

  handlechange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handlesubmit = event => {
    if (!this.state.isDiff) {
      this.setState({ SA: this.state.BA });
    }
    this.props.order(true, {
      Address: { Billing: this.state.BA, Shipping: this.state.BA }
    });
  };

  render() {
    const { isDiff } = this.state;
    return (
      <div>
        <div>
          <h1>Billing Address</h1>
          <Address
            address={item =>
              this.setState({
                BA: item
              })
            }
          />
        </div>
        <div>
          <h1>Shipping Address</h1>
          <Form.Group controlId="formShippings">
            <Form.Check
              value={isDiff}
              name="isDiff"
              onChange={this.handlechange}
              type="checkbox"
              label="Ship to a different address?"
            />
          </Form.Group>
          {isDiff ? (
            <Address
              address={item =>
                this.setState({
                  SA: item
                })
              }
            />
          ) : null}
        </div>
        <br />
        <Button variant="primary" onClick={this.handlesubmit}>
          Submit
        </Button>
        <br />
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default Billing;
