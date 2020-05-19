import {
    CURRENCY_RATES_REQUEST,
    CURRENCY_RATES_SUCCESS,
    CURRENCY_RATES_ERROR,
    SET_CONVERT_TO_CURRENCY,
    SET_CURRENCIES_SYMBOLS,
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
    timeline: {
        isPending: false,
        error: false,
        dateFrom: '',
        dateTo: '',
        base: 'PLN',
        against: 'EUR',
        rates: {},
    },
};

/*
    Currencies in Timeline are taken from Converter, eg.
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
            timeline: {
                ...state.timeline,
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
            timeline: {
                ...state.timeline,
                against: action.symbol,
            },
        };
    case SET_CURRENCIES_SYMBOLS:
        return {
            ...state,
            symbols: [...action.symbols],
        };
    default:
        return state;
    }
};

export default currenciesReducer;
