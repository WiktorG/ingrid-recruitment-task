/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    currencyRatesRequest,
    setConvertToCurrency,
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
    StyledArrowWrapper,
    StyledArrowRight,
    StyledArrowLeft,
    StyledInfoWrapper,
    StyledError,
    StyledRate,
} from './CurrencyConverter.styled';

const CurrencyConverter = () => {
    const dispatch = useDispatch();
    const {
        rates,
        base, // currency to convert from
        convertTo, // currency to convert to
        isPending,
        error,
    } = useSelector(currentCurrencySelector);
    const currenciesSymbols = useSelector(currenciesSymbolsSelector);
    const [initialAmount, setInitialAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [formError, setFormError] = useState(false);

    useEffect(() => {
        dispatch(currencyRatesRequest(base));
    }, [dispatch, base]);

    const parseMoney = (amount) => {
        setFormError(false);
        if (!parseFloat(amount) && amount !== 0) {
            setFormError('Incorrect data in fields.');
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
        setConvertedAmount(parseMoney(amount * rates[convertTo]));
    };

    const handleConvertedAmountChange = (amount) => {
        setConvertedAmount(amount === '' ? '' : parseMoney(amount));
        setInitialAmount(parseMoney(amount * (1 / rates[convertTo])));
    };

    const handleInitialSymbolChange = ({ value }) => {
        dispatch(currencyRatesRequest(value));
        setConvertedAmount(parseMoney(initialAmount * rates[value]));
    };

    const handleConvertToSymbolChange = ({ value }) => {
        dispatch(setConvertToCurrency(value));
        setInitialAmount(parseMoney(initialAmount * (1 / rates[value])));
    };

    const initialSelectOptions = currenciesSymbols
        .map((symbol) => ({
            label: symbol,
            value: symbol,
        }));

    const convertedSelectOptions = [...initialSelectOptions]
        .filter(({ value }) => value !== base);

    const currentRate = rates[convertTo] || !isPending ? `${rates[convertTo]} ${base}` : 'Loading..';

    return (
        <StyledCurrencyConverter>
            <StyledTitle>Currency converter</StyledTitle>
            <StyledForm>
                <StyledInputWrapper>
                    <Select
                        defaultValue={{ label: base, value: base }}
                        options={initialSelectOptions}
                        onChange={handleInitialSymbolChange}
                    />
                    <StyledInput
                        type="number"
                        name="initial-amount"
                        value={initialAmount}
                        onChange={(e) => handleInitialAmountChange(e.target.value)}
                        onBlur={() => handleBlur(initialAmount, handleInitialAmountChange)}
                        customTestId="InitialInput"
                    />
                </StyledInputWrapper>
                <StyledArrowWrapper>
                    <StyledArrowRight />
                    <StyledArrowLeft />
                </StyledArrowWrapper>
                <StyledInputWrapper>
                    <Select
                        defaultValue={{ label: convertTo, value: convertTo }}
                        options={convertedSelectOptions}
                        onChange={handleConvertToSymbolChange}
                    />
                    <StyledInput
                        type="number"
                        name="converted-amount"
                        value={convertedAmount}
                        onChange={(e) => handleConvertedAmountChange(e.target.value)}
                        onBlur={() => handleBlur(convertedAmount, handleInitialAmountChange)}
                        customTestId="ConvertedInput"
                    />
                </StyledInputWrapper>
            </StyledForm>
            <StyledInfoWrapper>
                {(error || formError) && (
                    <StyledError data-testid="Error">
                        {error || formError}
                    </StyledError>
                )}
                {(!error && !formError) && (
                <StyledRate data-testid="Rate">
                    Exact rate: {currentRate}
                </StyledRate>
                )}
            </StyledInfoWrapper>
        </StyledCurrencyConverter>
    );
};

export default CurrencyConverter;
