import React from "react";

import axios from "axios";

export default class TransactList extends React.Component {
  state = {
    transact: []
  };

  componentDidMount() {
    axios
      .get(
        "https://laundry-microservice-transact.herokuapp.com/api/v1/transactions/"
      )
      .then(res => {
        const transacts = res.data;
        this.setState({ transacts });
      });
  }

  render() {
    return (
      <ul>
        {this.state.transacts.map(transact => (
          <li>{transact.invoice}</li>
        ))}
      </ul>
    );
  }
}
