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
    this.state = { value: "", struks: [], method: "phone" };

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
        `https://laundry-microservice-users.herokuapp.com/api/v1/struks/${
          this.state.value
        }`
      )
      .then(response => this.setState({ details: response.data }));
  }

  render() {
    console.log(this.state.struks);
    return (
      <div>
        <br />
        <br />
        <Container text>
          <Header as="h2" textAlign="center">
            Lihat Transaksi
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
                  <Table.HeaderCell>datein</Table.HeaderCell>
                  <Table.HeaderCell>dateout</Table.HeaderCell>
                  <Table.HeaderCell>member</Table.HeaderCell>
                  <Table.HeaderCell>phone</Table.HeaderCell>
                  <Table.HeaderCell>Grand Total</Table.HeaderCell>
                  <Table.HeaderCell>status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.state.struks.map((struk, index) => (
                  <Table.Row key={struk._id}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{struk.invoice}</Table.Cell>
                    <Table.Cell>{struk.dateIn}</Table.Cell>
                    <Table.Cell>{struk.dateOut}</Table.Cell>
                    <Table.Cell>{struk.service}</Table.Cell>
                    <Table.Cell>{struk.qty}</Table.Cell>
                    <Table.Cell>{struk.unit}</Table.Cell>
                    <Table.Cell>{struk.process}</Table.Cell>
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
