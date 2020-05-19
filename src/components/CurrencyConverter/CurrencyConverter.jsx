/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    currencyRatesRequest,
    currencyRatesError,
} from '~/redux/actions/currenciesActions';
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
    StyledInfoWrapper,
    StyledError,
    StyledRate,
} from './CurrencyConverter.styled';

const CurrencyConverter = () => {
    const dispatch = useDispatch();
    const {
        rates,
        base,
        isPending,
        error,
    } = useSelector(currentCurrencySelector);
    const currenciesSymbols = useSelector(currenciesSymbolsSelector);
    const [initialAmount, setInitialAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [convertedSymbol, setConvertedSymbol] = useState('EUR'); // initialSymbol is set in store :)

    useEffect(() => {
        dispatch(currencyRatesRequest('PLN'));
    }, [dispatch]);

    const parseMoney = (amount) => {
        dispatch(currencyRatesError(false));
        if (!parseFloat(amount) && amount !== 0) {
            dispatch(currencyRatesError('Incorrect data in fields.'));
            return 0;
        }
        if (parseFloat(amount) < 0 || amount === '') {
            return 0;
        }
        // if string has more numbers after dot or comma than 2 - I cut them off
        const [, afterComma] = amount.toString().split('.');
        if (afterComma && afterComma.length > 2) {
            return parseFloat(amount).toFixed(2);
        }
        return parseFloat(amount);
    };

    const handleBlur = (value, setter) => (value === '' ? setter(1) : null);

    const handleInitialAmountChange = (amount) => {
        setInitialAmount(amount === '' ? '' : parseMoney(amount));
        setConvertedAmount(parseMoney(amount * rates[convertedSymbol]));
    };

    const handleConvertedAmountChange = (amount) => {
        setConvertedAmount(amount === '' ? '' : parseMoney(amount));
        setInitialAmount(parseMoney(amount * (1 / rates[convertedSymbol])));
    };

    const handleInitialSymbolChange = ({ value }) => {
        dispatch(currencyRatesRequest(value));
        setConvertedAmount(parseMoney(initialAmount * rates[value]));
    };

    const handleConvertedSymbolChange = ({ value }) => {
        setConvertedSymbol(value);
        setInitialAmount(parseMoney(initialAmount * (1 / rates[value])));
    };

    const initialSelectOptions = currenciesSymbols
        .map((symbol) => ({
            label: symbol,
            value: symbol,
        }));

    const convertedSelectOptions = [...initialSelectOptions]
        .filter(({ value }) => value !== base);

    const currentRate = rates[convertedSymbol] || !isPending ? `${rates[convertedSymbol]} ${base}` : 'Loading..';

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
                        onChange={(e) => handleInitialAmountChange(e.target.value)}
                        onBlur={() => handleBlur(initialAmount, handleInitialAmountChange)}
                    />
                </StyledInputWrapper>
                <StyledArrowIcon />
                <StyledInputWrapper>
                    <StyledInput
                        type="number"
                        value={convertedAmount}
                        onChange={(e) => handleConvertedAmountChange(e.target.value)}
                        onBlur={() => handleBlur(convertedAmount, handleInitialAmountChange)}
                    />
                    <Select
                        options={convertedSelectOptions}
                        onChange={handleConvertedSymbolChange}
                    />
                </StyledInputWrapper>
            </StyledForm>
            <StyledInfoWrapper>
                {error && (
                    <StyledError>
                        {error}
                    </StyledError>
                )}
                <StyledRate>
                    Exact rate: {currentRate}
                </StyledRate>
            </StyledInfoWrapper>
        </StyledCurrencyConverter>
    );
};

export default CurrencyConverter;
