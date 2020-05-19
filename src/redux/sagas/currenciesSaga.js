import { put, call } from 'redux-saga/effects';
import api from '~/etc/api';

import {
    currencyRatesSuccess,
    currencyRatesError,
    setCurrenciesSymbols,
} from '~/redux/actions/currenciesActions';

export function* currencyRatesSaga({ currencySymbol }) {
    try {
        const { data } = yield call(api.currencies.latest, currencySymbol);
        const symbols = Object.keys(data.rates).map((symbol) => symbol);
        yield put(setCurrenciesSymbols(symbols));
        yield put(currencyRatesSuccess(data));
    } catch (err) {
        yield put(currencyRatesError('Something went wrong - try again later'));
    }
}
