import axios from './axios';

const api = {
    currencies: {
        latest: async (symbol) => axios.get(`/latest?base=${symbol}`),
    },
};

export default api;
