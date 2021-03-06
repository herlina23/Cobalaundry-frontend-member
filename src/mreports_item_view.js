import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";
import axios from "axios";
import { Table, Container, Header } from "semantic-ui-react";

// resp.data = menampilkan data transaksi
// resp.repos = menampilkan data detail transaksi

function App() {
  // const username = "E3QOSmMbn";
  const [resp, setGitData] = useState({
    data: [],
    repos: [],
    masuk: [],
    salary: [],
    report: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const respGlobal = await axios(
        `https://laundry-microservice-users.herokuapp.com/api/v1/mreports_item/outcome/`
      );
      const respRepos = await axios(
        `https://laundry-microservice-users.herokuapp.com/api/v1/mreports_item/item/`
      );
      const respMasuk = await axios(
        `https://laundry-microservice-users.herokuapp.com/api/v1/mreports_item/pemasukan/`
      );
      const respSalary = await axios(
        `https://laundry-microservice-users.herokuapp.com/api/v1/mreports_item/salary/`
      );
      const respReport = await axios(
        `https://laundry-microservice-users.herokuapp.com/api/v1/mreports/`
      );

      setGitData({
        data: respGlobal.data,
        repos: respRepos.data,
        masuk: respMasuk.data,
        salary: respSalary.data,
        report: respReport.data
      });
    };

    fetchData();
  }, []);

  console.log("render");
  if (resp.data) {
    // console.log("d", resp.data, resp.repos, resp.masuk);
    console.log("a", resp.masuk);
    console.log("b", resp.repos);
    console.log("c", resp.data);
    console.log("d", resp.salary);
    console.log("e", resp.report);
  }
  return (
    <div>
      <br />
      <br />
      <Container text>
        <Header as="h2" textAlign="center">
          Laporan Bulanan
        </Header>

        <Table celled>
          {resp.repos.map(dt => (
            <Table.Row>
              <Table.Cell> Bulan : {dt.month} </Table.Cell>
              <Table.Cell>{"              "}</Table.Cell>
              <Table.Cell>{"              "}</Table.Cell>
              <Table.Cell>{"              "}</Table.Cell>
              <Table.Cell> Tahun :{dt.year}</Table.Cell>
            </Table.Row>
          ))}
        </Table>

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

            <Table.Body>
              <Table.Row>
                <Table.Cell>Transaksi</Table.Cell>
                <Table.Cell>
                  Rp{" "}
                  {new Intl.NumberFormat(["ban", "id"]).format(
                    resp.report.pemasukan
                  )}
                </Table.Cell>
                <Table.Cell />
                <Table.Cell>Penggajian</Table.Cell>
                <Table.Cell />
              </Table.Row>

              {resp.salary.map(dt => (
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell>{dt.user}</Table.Cell>
                  <Table.Cell>
                    Rp{" "}
                    {new Intl.NumberFormat(["ban", "id"]).format(dt.paysalary)}
                  </Table.Cell>
                </Table.Row>
              ))}

              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>Total</Table.Cell>
                <Table.Cell>
                  Rp{" "}
                  {new Intl.NumberFormat(["ban", "id"]).format(
                    resp.report.keluarSalary
                  )}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>Pembelian Barang</Table.Cell>
                <Table.Cell />
              </Table.Row>
              {resp.repos.map(dt => (
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell>{dt.item}</Table.Cell>
                  <Table.Cell>
                    Rp{" "}
                    {new Intl.NumberFormat(["ban", "id"]).format(
                      dt.bayar_barang
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>Total</Table.Cell>
                <Table.Cell>
                  Rp{" "}
                  {new Intl.NumberFormat(["ban", "id"]).format(
                    resp.report.keluarItem
                  )}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>Pembayaran lain-lain</Table.Cell>
                <Table.Cell />
              </Table.Row>
              {resp.data.map(dt => (
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell>{dt.outcomein}</Table.Cell>
                  <Table.Cell>
                    Rp {new Intl.NumberFormat(["ban", "id"]).format(dt.paybill)}
                  </Table.Cell>
                </Table.Row>
              ))}
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>Total</Table.Cell>
                <Table.Cell>
                  Rp{" "}
                  {new Intl.NumberFormat(["ban", "id"]).format(
                    resp.report.KeluarOutcome
                  )}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
              <Table.Row>
                <Table.Cell>Total</Table.Cell>
                <Table.Cell>
                  Rp{" "}
                  {new Intl.NumberFormat(["ban", "id"]).format(
                    resp.report.pemasukan
                  )}
                </Table.Cell>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>
                  Rp{" "}
                  {new Intl.NumberFormat(["ban", "id"]).format(
                    resp.report.keluar
                  )}
                </Table.Cell>
              </Table.Row>
              <Table.Row active>
                <Table.Cell>Laba</Table.Cell>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>
                  Rp{" "}
                  {new Intl.NumberFormat(["ban", "id"]).format(
                    resp.report.laba
                  )}
                </Table.Cell>
              </Table.Row>
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
