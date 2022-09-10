import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3333`,
    headers: {
        Authorization: `Bearer ${localStorage.getItem(`__challenge_token`)}`
    }
});

export { api };