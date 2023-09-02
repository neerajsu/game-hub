import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'baf8c6f2dd5748b5a494a9b0a5ba245e'
    }
})