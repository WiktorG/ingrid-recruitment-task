import { put, call, select } from 'redux-saga/effects';
import api from '~/etc/api';

import {
    currenciesSymbols as currenciesSymbolsSelector,
} from '~/redux/selectors/currenciesSelectors';

import {
    currencyRatesSuccess,
    currencyRatesError,
    setCurrenciesSymbols,
    currencyHistorySuccess,
    currencyHistoryError,
} from '~/redux/actions/currenciesActions';

export function* currencyRatesSaga({ currencySymbol }) {
    try {
        const { data } = yield call(api.currencies.latest, currencySymbol);
        yield put(currencyRatesSuccess(data));
        /*
            If statement checks whether request returns different amount of
            symbols and if yes it updates store. I do this to avoid updating store
            everytime user selects different currency in initial select.
        */
        const symbols = Object.keys(data.rates).map((symbol) => symbol);
        const storedSymbols = yield select(currenciesSymbolsSelector);
        if (symbols.length !== storedSymbols.length) {
            yield put(setCurrenciesSymbols(symbols));
        }
    } catch (err) {
        yield put(currencyRatesError('Something went wrong - try again later'));
    }
}

export function* currencyHistorySaga({
    dateFrom,
    dateTo,
    base,
    against,
}) {
    try {
        const { data } = yield call(api.currencies.history, {
            dateFrom,
            dateTo,
            against,
            base,
        });
        const rates = yield Object.keys(data.rates).map((key) => ({
            date: key,
            rate: data.rates[key][base],
        }));
        const sortedRates = rates.slice().sort((a, b) => {
            if (a.date < b.date) {
                return -1;
            }
            if (a.date > b.date) {
                return 1;
            }
            return 0;
        });
        yield put(currencyHistorySuccess({ rates: sortedRates }));
    } catch (err) {
        yield put(currencyHistoryError('Something went wrong - try again later'));
    }
}
