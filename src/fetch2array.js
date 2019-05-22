import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";
import axios from "axios";
import { Table, Container, Header } from "semantic-ui-react";

// resp.data = menampilkan data transaksi
// resp.repos = menampilkan data detail transaksi

const username = "E3QOSmMbn";
function App() {
  const [resp, setGitData] = useState({ data: [], repos: [] });

  useEffect(() => {
    const fetchData = async () => {
      const respGlobal = await axios(
        `https://laundry-microservice-transact.herokuapp.com/api/v1/transactions/search/${username}`
      );
      const respRepos = await axios(
        `https://laundry-microservice-transact.herokuapp.com/api/v1/details/search/${username}`
      );

      setGitData({ data: respGlobal.data, repos: respRepos.data });
    };

    fetchData();
  }, []);

  console.log("render");
  if (resp.data) {
    console.log("d", resp.data, resp.repos);
  }
  return (
    <div>
      <h1>Hellooo</h1>

      <Container text>
        <Header as="h2" textAlign="center">
          Struk Laundry
        </Header>

        <p>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Invoice</Table.HeaderCell>
                <Table.HeaderCell>Nama</Table.HeaderCell>
                <Table.HeaderCell>Tanggal Masuk</Table.HeaderCell>
                <Table.HeaderCell>Tanggal Pengambilan</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {resp.data.map(dt => (
                <Table.Row key={dt._id}>
                  <Table.Cell>{dt.invoice}</Table.Cell>
                  <Table.Cell>{dt.member.member_name}</Table.Cell>
                  <Table.Cell>
                    {/* {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit"
                    }).format(dt.dateIn)} */}
                    {/* new Intl.DateTimeFormat(['ban', 'id']).format(date) */}
                    {dt.dateIn}
                  </Table.Cell>
                  <Table.Cell>{dt.dateOut}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            <h2>Detail</h2>

            <Table.Body>
              {resp.repos.map(rp => (
                <Table.Row key={rp._id}>
                  <Table.Cell>{rp.service.serviceName}</Table.Cell>
                  <Table.Cell>
                    {rp.qty} {rp.service.unit}
                  </Table.Cell>
                  <Table.Cell>
                    Rp{" "}
                    {new Intl.NumberFormat(["ban", "id"]).format(
                      rp.service.tarif
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    Rp{" "}
                    {new Intl.NumberFormat(["ban", "id"]).format(
                      resp.repos.reduce(
                        (sum, idx) => (sum = idx.qty * idx.service.tarif),
                        0
                      )
                    )}
                  </Table.Cell>
                  <Table.Cell>{rp.process.process_name}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Total</Table.HeaderCell>
                <Table.HeaderCell>Discount</Table.HeaderCell>
                <Table.HeaderCell>Grand Total</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {resp.data.map(dt => (
                <Table.Row key={dt._id}>
                  <Table.Cell>
                    Rp {new Intl.NumberFormat(["ban", "id"]).format(dt.total)}
                  </Table.Cell>
                  <Table.Cell>{dt.discount} %</Table.Cell>
                  <Table.Cell>
                    Rp{" "}
                    {new Intl.NumberFormat(["ban", "id"]).format(dt.grandTotal)}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </p>
      </Container>
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
