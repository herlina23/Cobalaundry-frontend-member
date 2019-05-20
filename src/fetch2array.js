import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// import "./styles.css";

const username = "E3QOSmMbn";
function App() {
  const [resp, setGitData] = useState({ data: null, repos: null });

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
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
