import axios from "axios";

export default axios.create({
  baseURL:
    "https://laundry-microservice-transact.herokuapp.com/api/v1/transactions/"
});
