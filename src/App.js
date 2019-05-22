import React, { Component } from "react";
import axios from "axios";
import { Table, Container, Header } from "semantic-ui-react";
const API_URL = "https://laundry-microservice-users.herokuapp.com";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    const url = `${API_URL}/api/v1/mreports_item/`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }

  render() {
    console.log(this.state.users.pengeluaran);
    return (
      <div>
        <br />
        <br />
        <Container text>
          <Header as="h2" textAlign="center">
            Laporan Bulanan
          </Header>
          <p />
          <p>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pemasukan</Table.HeaderCell>
                  <Table.HeaderCell />

                  <Table.HeaderCell />
                  <Table.HeaderCell>Pengeluaran</Table.HeaderCell>
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>
              <p>cek cek</p>

              {this.state.users.pengeluaran.map(item => console.log(item))}

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Transaksi</Table.Cell>
                  <Table.Cell>{this.state.users.pemasukan}</Table.Cell>
                  <Table.Cell />
                  <Table.Cell>Penggajian</Table.Cell>
                  <Table.Cell>{this.state.users.keluarSalary}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell>Pembelian Barang</Table.Cell>
                  <Table.Cell>{this.state.users.keluarItem}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell>Pembayaran lain-lain</Table.Cell>
                  <Table.Cell>{this.state.users.KeluarOutcome}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Total</Table.Cell>
                  <Table.Cell>{this.state.users.pemasukan}</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell>{this.state.users.keluar}</Table.Cell>
                </Table.Row>
                <Table.Row active>
                  <Table.Cell>Laba</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell>{this.state.users.laba}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </p>
        </Container>
      </div>
    );
  }
}
export default App;
