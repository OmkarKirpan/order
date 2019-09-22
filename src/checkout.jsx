import React from "react";
import { Form, Button } from "react-bootstrap";
import Billing from "./billing";
import AddressConfirmation from "./order/addressConfirmation";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDone: false, order: "" };
  }

  handlechange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleorder = (flag, data) => {
    if (flag) {
      this.setState({
        isDone: true,
        order: data
      });
    }
  };

  render() {
    const { isDone } = this.state;
    return (
      <div>
        {!isDone ? (
          <Billing order={this.handleorder} />
        ) : (
          <div>
            <h1>Thanks for your order.</h1>
            <AddressConfirmation />
            {JSON.stringify(this.state)}
          </div>
        )}
      </div>
    );
  }
}

export default Checkout;
