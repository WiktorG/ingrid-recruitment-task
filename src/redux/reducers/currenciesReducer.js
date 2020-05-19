import {
    CURRENCY_RATES_REQUEST,
    CURRENCY_RATES_SUCCESS,
    CURRENCY_RATES_ERROR,
    SET_CURRENCIES_SYMBOLS,
} from '~/redux/actions/currenciesActions';

const initialState = {
    current: {
        isPending: false,
        error: false,
        base: 'PLN',
        date: '',
        rates: {},
    },
    symbols: ['PLN', 'EUR'],
};

const currenciesReducer = (state = initialState, action) => {
    switch (action.type) {
    case CURRENCY_RATES_REQUEST:
        return {
            ...state,
            current: {
                ...state.currentCurrency,
                isPending: true,
            },
        };
    case CURRENCY_RATES_SUCCESS:
        return {
            ...state,
            current: {
                ...state.currentCurrency,
                ...action.currencyRatesData,
                isPending: false,
            },
        };
    case CURRENCY_RATES_ERROR:
        return {
            ...state,
            current: {
                ...state.currentCurrency,
                isPending: false,
                error: 'Something went wrong',
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
