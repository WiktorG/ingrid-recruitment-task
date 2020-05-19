import axios from './axios';

const api = {
    currencies: {
        latest: async (symbol) => axios.get(`/latest?base=${symbol}`),
        history: async ({
            dateFrom,
            dateTo,
            against,
            base,
        }) => axios.get(`/history?start_at=${dateFrom}&end_at=${dateTo}&base=${against}&symbols=${base}`),
        // Docs say that it's "base" even though it's "against".
    },
};

export default api;
