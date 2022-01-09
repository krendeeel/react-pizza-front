import axios from "axios";

export default axios.create({
    baseURL: "https://pizza-servernest.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});