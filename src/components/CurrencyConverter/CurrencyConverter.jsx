import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { currencyRatesRequest } from '~/redux/actions/currenciesActions';
import {
    currentCurrency as currentCurrencySelector,
    currenciesSymbols as currenciesSymbolsSelector,
} from '~/redux/selectors/currenciesSelectors';

import Select from '~/components/Select/Select';

import {
    StyledCurrencyConverter,
    StyledTitle,
    StyledForm,
    StyledInputWrapper,
    StyledInput,
    StyledArrowIcon,
} from './CurrencyConverter.styled';

const CurrencyConverter = () => {
    const dispatch = useDispatch();
    const { rates, ...currentCurrency } = useSelector(currentCurrencySelector);
    const currenciesSymbols = useSelector(currenciesSymbolsSelector);
    // initialSymbol is set in store :)
    const [initialAmount, setInitialAmount] = useState(0);
    const [convertedSymbol, setConvertedSymbol] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        dispatch(currencyRatesRequest('PLN'));
    }, [dispatch]);

    const parseMoney = (amount) => {
        if (parseFloat(amount) < 0 || amount === '') {
            return 0;
        }
        if (amount.toString().split('.')[1] && amount.toString().split('.')[1].length > 2) {
            return parseFloat(amount).toFixed(2);
        }
        return parseFloat(amount);
    };

    const handleInitialSymbolChange = ({ value }) => {
        dispatch(currencyRatesRequest(value));
        setConvertedAmount(initialAmount * rates[value]);
    };

    const handleInitialAmountChange = (e) => {
        setInitialAmount(e.target.value === '' ? '' : parseMoney(e.target.value));
        setConvertedAmount((parseMoney(e.target.value) * rates[convertedSymbol]).toFixed(2));
    };

    const handleConvertedAmountChange = (e) => {
        setConvertedAmount(e.target.value === '' ? '' : parseMoney(e.target.value));
        setInitialAmount((parseMoney(e.target.value) * (1 / rates[convertedSymbol])).toFixed(2));
    };

    const handleConvertedSymbolChange = ({ value }) => {
        setConvertedSymbol(value);
        setInitialAmount(initialAmount * (1 / rates[value]));
    };

    const initialSelectOptions = currenciesSymbols
        .map((symbol) => ({
            label: symbol,
            value: symbol,
        }));
    const convertedSelectOptions = [...initialSelectOptions]
        .filter(({ value }) => value !== currentCurrency.base);

    return (
        <StyledCurrencyConverter>
            <StyledTitle>Currency Converter</StyledTitle>
            <StyledForm>
                <StyledInputWrapper>
                    <Select
                        options={initialSelectOptions}
                        onChange={handleInitialSymbolChange}
                    />
                    <StyledInput
                        type="number"
                        value={initialAmount}
                        onChange={handleInitialAmountChange}
                    />
                </StyledInputWrapper>
                <StyledArrowIcon />
                <StyledInputWrapper>
                    <StyledInput
                        type="number"
                        value={convertedAmount}
                        onChange={handleConvertedAmountChange}
                    />
                    <Select
                        options={convertedSelectOptions}
                        onChange={handleConvertedSymbolChange}
                    />
                </StyledInputWrapper>
            </StyledForm>
        </StyledCurrencyConverter>
    );
};

export default CurrencyConverter;
