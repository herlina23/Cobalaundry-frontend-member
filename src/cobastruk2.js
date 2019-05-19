import React, { Component } from "react";
import axios from "axios";
const API_URL = "https://laundry-microservice-users.herokuapp.com";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    const url = `${API_URL}/api/v1/struks/`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>React Axios Example</h1>
          {this.state.users.map(user => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.invoice}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {user.grandtotal}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
