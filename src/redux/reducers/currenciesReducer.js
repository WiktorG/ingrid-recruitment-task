import {
    CURRENCY_RATES_REQUEST,
    CURRENCY_RATES_SUCCESS,
    CURRENCY_RATES_ERROR,
    SET_CONVERT_TO_CURRENCY,
    SET_CURRENCIES_SYMBOLS,
    CURRENCY_HISTORY_REQUEST,
    CURRENCY_HISTORY_SUCCESS,
    CURRENCY_HISTORY_ERROR,
} from '~/redux/actions/currenciesActions';

const initialState = {
    current: {
        isPending: false,
        error: false,
        base: 'PLN',
        convertTo: 'EUR',
        date: '',
        rates: {},
    },
    symbols: ['PLN', 'EUR'],
    history: {
        isPending: false,
        isGraphVisible: false,
        error: false,
        dateFrom: '',
        dateTo: '',
        base: 'PLN',
        against: 'EUR',
        rates: [],
    },
};

/*
    Currencies in history are taken from Converter, eg.
    I select PLN and EUR then I show graph for course of PLN against EUR
    See CURRENCY_RATES_SUCCESS and SET_CONVERT_TO_CURRENCY
*/

const currenciesReducer = (state = initialState, action) => {
    switch (action.type) {
    case CURRENCY_RATES_REQUEST:
        return {
            ...state,
            current: {
                ...state.current,
                isPending: true,
            },
        };
    case CURRENCY_RATES_SUCCESS:
        return {
            ...state,
            current: {
                ...state.current,
                ...action.currencyRatesData,
                isPending: false,
            },
            history: {
                ...state.history,
                base: action.currencyRatesData.base,
            },
        };
    case CURRENCY_RATES_ERROR:
        return {
            ...state,
            current: {
                ...state.current,
                isPending: false,
                error: action.error,
            },
        };
    case SET_CONVERT_TO_CURRENCY:
        return {
            ...state,
            current: {
                ...state.current,
                convertTo: action.symbol,
            },
            history: {
                ...state.history,
                against: action.symbol,
            },
        };
    case SET_CURRENCIES_SYMBOLS:
        return {
            ...state,
            symbols: [...action.symbols],
        };
    case CURRENCY_HISTORY_REQUEST:
        return {
            ...state,
            history: {
                ...state.history,
                isPending: true,
                dateFrom: action.dateFrom,
                dateTo: action.dateTo,
            },
        };
    case CURRENCY_HISTORY_SUCCESS:
        return {
            ...state,
            history: {
                ...state.history,
                isPending: false,
                isGraphVisible: true,
                rates: [...action.rates],
            },
        };
    case CURRENCY_HISTORY_ERROR:
        return {
            ...state,
            history: {
                ...state.history,
                isPending: false,
                isGraphVisible: false,
                rates: [],
                error: action.error,
            },
        };
    default:
        return state;
    }
};

export default currenciesReducer;
