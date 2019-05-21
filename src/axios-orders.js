import axios from "axios";

const instance = axios.create({
  baseURL: "https://zee-react-my-burger.firebaseio.com/"
});

export default instance;
