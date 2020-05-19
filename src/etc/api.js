import axios from './axios';

const api = {
    currencies: {
        latest: async () => axios.get('/latest?base=PLN'),
    },
};

export default api;
