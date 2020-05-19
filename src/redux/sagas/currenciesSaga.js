import { put, call, select } from 'redux-saga/effects';
import api from '~/etc/api';

import {
    currenciesSymbols as currenciesSymbolsSelector,
} from '~/redux/selectors/currenciesSelectors';

import {
    currencyRatesSuccess,
    currencyRatesError,
    setCurrenciesSymbols,
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
        if (symbols.length === storedSymbols.length) {
            yield put(setCurrenciesSymbols(symbols));
        }
    } catch (err) {
        yield put(currencyRatesError('Something went wrong - try again later'));
    }
}
