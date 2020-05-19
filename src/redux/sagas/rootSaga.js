import { all, takeLatest } from 'redux-saga/effects';

import {
    CURRENCY_RATES_REQUEST,
} from '~/redux/actions/currenciesActions';

import {
    currencyRatesSaga,
} from './currenciesSaga';

export default function* rootSaga() {
    yield all([
        takeLatest(CURRENCY_RATES_REQUEST, currencyRatesSaga),
    ]);
}
