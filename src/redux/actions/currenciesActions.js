export const CURRENCY_RATES_REQUEST = 'CURRENCY_RATES_REQUEST';
export const CURRENCY_RATES_SUCCESS = 'CURRENCY_RATES_SUCCESS';
export const CURRENCY_RATES_ERROR = 'CURRENCY_RATES_ERROR';
export const SET_CURRENCIES_SYMBOLS = 'SET_CURRENCIES_SYMBOLS';

export const currencyRatesRequest = (currencySymbol) => ({
    type: CURRENCY_RATES_REQUEST,
    currencySymbol,
});
export const currencyRatesSuccess = (currencyRatesData) => ({
    type: CURRENCY_RATES_SUCCESS,
    currencyRatesData,
});
export const currencyRatesError = (error) => ({ type: CURRENCY_RATES_ERROR, error });

export const setCurrenciesSymbols = (symbols) => ({ type: SET_CURRENCIES_SYMBOLS, symbols });
