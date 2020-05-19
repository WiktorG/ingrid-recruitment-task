export const CURRENCY_RATES_REQUEST = 'CURRENCY_RATES_REQUEST';
export const CURRENCY_RATES_SUCCESS = 'CURRENCY_RATES_SUCCESS';
export const CURRENCY_RATES_ERROR = 'CURRENCY_RATES_ERROR';
export const CURRENCY_HISTORY_REQUEST = 'CURRENCY_HISTORY_REQUEST';
export const CURRENCY_HISTORY_SUCCESS = 'CURRENCY_HISTORY_SUCCESS';
export const CURRENCY_HISTORY_ERROR = 'CURRENCY_HISTORY_ERROR';
export const SET_CURRENCIES_SYMBOLS = 'SET_CURRENCIES_SYMBOLS';
export const SET_CONVERT_TO_CURRENCY = 'SET_CONVERT_TO_CURRENCY';

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

export const setConvertToCurrency = (symbol) => ({ type: SET_CONVERT_TO_CURRENCY, symbol });

export const currencyHistoryRequest = ({
    dateFrom,
    dateTo,
    base,
    against,
}) => ({
    type: CURRENCY_HISTORY_REQUEST,
    dateFrom,
    dateTo,
    base,
    against,
});
