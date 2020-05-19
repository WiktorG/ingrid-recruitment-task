/* eslint-disable react/jsx-one-expression-per-line */
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
    StyledRate,
} from './CurrencyConverter.styled';

const CurrencyConverter = () => {
    const dispatch = useDispatch();
    const { rates, base, isPending } = useSelector(currentCurrencySelector);
    const currenciesSymbols = useSelector(currenciesSymbolsSelector);
    const [initialAmount, setInitialAmount] = useState(0); // initial value 0.00
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [convertedSymbol, setConvertedSymbol] = useState('EUR'); // initialSymbol is set in store :)

    useEffect(() => {
        dispatch(currencyRatesRequest('PLN'));
    }, [dispatch]);

    const parseMoney = (amount) => {
        if (parseFloat(amount) < 0 || amount === '') {
            return (0);
        }
        // if string has more numbers after dot or comma than 2 - I cut them off
        const [, afterComma] = amount.toString().split('.');
        if (afterComma && afterComma.length > 2) {
            return parseFloat(amount).toFixed(2);
        }
        return parseFloat(amount);
    };

    const handleBlur = (value, setter) => (value === '' ? setter(0) : null);

    const handleInitialAmountChange = (amount) => {
        setInitialAmount(amount === '' ? '' : parseMoney(amount));
        setConvertedAmount(parseMoney(amount) * rates[convertedSymbol]);
    };

    const handleConvertedAmountChange = (amount) => {
        setConvertedAmount(amount === '' ? '' : parseMoney(amount));
        setInitialAmount(parseMoney(amount) * (1 / rates[convertedSymbol]));
    };

    const handleInitialSymbolChange = ({ value }) => {
        dispatch(currencyRatesRequest(value));
        setConvertedAmount(initialAmount * rates[value]);
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
                        onBlur={() => handleBlur(initialAmount, setInitialAmount)}
                    />
                </StyledInputWrapper>
                <StyledArrowIcon />
                <StyledInputWrapper>
                    <StyledInput
                        type="number"
                        value={convertedAmount}
                        onChange={(e) => handleConvertedAmountChange(e.target.value)}
                        onBlur={(e) => handleBlur(e, setConvertedAmount)}
                    />
                    <Select
                        options={convertedSelectOptions}
                        onChange={handleConvertedSymbolChange}
                    />
                </StyledInputWrapper>
            </StyledForm>
            <StyledRate>
                Current rate: {currentRate}
            </StyledRate>
        </StyledCurrencyConverter>
    );
};

export default CurrencyConverter;
