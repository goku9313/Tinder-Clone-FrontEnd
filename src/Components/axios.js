import axios from "axios";

const instance = axios.create({
    baseURL: "https://sahil-tinder-clone.herokuapp.com/"
});

export default instance;

