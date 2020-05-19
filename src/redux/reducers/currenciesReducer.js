import {
    CURRENCY_RATES_REQUEST,
    CURRENCY_RATES_SUCCESS,
    CURRENCY_RATES_ERROR,
} from '~/redux/actions/currenciesActions';

const initialState = {
    currentCurrency: {
        isPending: true,
        error: false,
        base: 'PLN',
        date: '',
        rates: {},
    },
};

const currenciesReducer = (state = initialState, action) => {
    switch (action.type) {
    case CURRENCY_RATES_REQUEST:
        return {
            ...state,
            currentCurrency: {
                ...state.currentCurrency,
                isPending: true,
            },
        };
    case CURRENCY_RATES_SUCCESS:
        return {
            ...state,
            currentCurrency: {
                ...state.currentCurrency,
                isPending: false,
            },
        };
    case CURRENCY_RATES_ERROR:
        return {
            ...state,
            currentCurrency: {
                ...state.currentCurrency,
                isPending: false,
                error: 'Something went wrong',
            },
        };
    default:
        return state;
    }
};

export default currenciesReducer