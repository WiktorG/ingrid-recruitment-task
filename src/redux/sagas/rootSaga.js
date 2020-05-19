import { all, takeLatest } from 'redux-saga/effects';

import {
    CURRENCY_RATES_REQUEST,
    CURRENCY_HISTORY_REQUEST,
} from '~/redux/actions/currenciesActions';

import {
    currencyRatesSaga,
    currencyHistorySaga,
} from './currenciesSaga';

export default function* rootSaga() {
    yield all([
        takeLatest(CURRENCY_RATES_REQUEST, currencyRatesSaga),
        takeLatest(CURRENCY_HISTORY_REQUEST, currencyHistorySaga),
    ]);
}
