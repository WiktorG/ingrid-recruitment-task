export const CURRENCY_RATES_REQUEST = 'CURRENCY_RATES_REQUEST';
export const CURRENCY_RATES_SUCCESS = 'CURRENCY_RATES_SUCCESS';
export const CURRENCY_RATES_ERROR = 'CURRENCY_RATES_ERROR';

export const currencyRatesRequest = (currencySymbol) => ({
    type: CURRENCY_RATES_REQUEST,
    currencySymbol,
});
export const currencyRatesSuccess = (currencyRatesData) => ({
    type: CURRENCY_RATES_SUCCESS,
    currencyRatesData,
});
export const currencyRatesError = () => ({ type: CURRENCY_RATES_ERROR });
