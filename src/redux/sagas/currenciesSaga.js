import { put, call } from 'redux-saga/effects';
import api from '~/etc/api';

import {
    currencyRatesSuccess,
    currencyRatesError,
} from '~/redux/actions/currenciesActions';

export function* currencyRatesSaga({ currencySymbol }) {
    try {
        const { data } = yield call(api.currencies.latest, currencySymbol);
        yield put(currencyRatesSuccess(data));
    } catch (err) {
        yield put(currencyRatesError('Something went wrong - try again later'));
    }
}
