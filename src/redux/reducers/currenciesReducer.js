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
        dateFrom: '',
        dateTo: '',
        rates: {},
    },
};

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
