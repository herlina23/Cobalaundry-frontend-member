import React from "react";
import "./App.css";
import axios from "axios";
import {
  Table,
  Form,
  Button,
  Input,
  // Select,
  Container,
  Header
} from "semantic-ui-react";

// const options = [
//   { key: "phone", text: "Phone", value: "phone" },
//   { key: "search", text: "Invoice", value: "search" }
// ];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", transactions: [], method: "phone" };

    this.changeValue = this.changeValue.bind(this);
    this.changeMethod = this.changeMethod.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeValue(event) {
    this.setState({ value: event.target.value });
  }

  changeMethod(event) {
    this.setState({ method: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        `https://laundry-microservice-transact.herokuapp.com/api/v1/transactions/${
          this.state.method
        }/${this.state.value}`
      )
      .then(response => this.setState({ transactions: response.data }));
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <Container text>
          <Header as="h2" textAlign="center">
            Lihat Riwayat Transaksi
          </Header>
          <p>
            <Form>
              <Input
                type="text"
                placeholder="Search..."
                action
                value={this.state.value}
                onChange={this.changeValue}
              >
                <input />
                {/* <Select compact options={options} /> */}
                <select onChange={this.changeMethod}>
                  <option
                    value="phone"
                    selected={this.state.method === "phone"}
                  >
                    telpon
                  </option>
                  <option
                    value="search"
                    selected={this.state.method === "search"}
                  >
                    invoice
                  </option>
                </select>
                <Button
                  type="submit"
                  value="Submit"
                  onClick={this.handleSubmit}
                >
                  Search
                </Button>
              </Input>
            </Form>
          </p>
          <p>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>No</Table.HeaderCell>
                  <Table.HeaderCell>Invoice</Table.HeaderCell>
                  <Table.HeaderCell>member</Table.HeaderCell>
                  <Table.HeaderCell>phone</Table.HeaderCell>
                  <Table.HeaderCell>Grand Total</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.state.transactions.map((transaction, index) => (
                  <Table.Row key={transaction._id}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{transaction.invoice}</Table.Cell>
                    <Table.Cell>{transaction.member.member_name}</Table.Cell>
                    <Table.Cell>{transaction.member.phone}</Table.Cell>
                    <Table.Cell>{transaction.grandTotal}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </p>
        </Container>
      </div>
    );
  }
}
export default App;
