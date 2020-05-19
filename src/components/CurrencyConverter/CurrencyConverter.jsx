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

    const handleInitialSymbolChange = ({ value }) => {
        dispatch(currencyRatesRequest(value));
        setConvertedAmount(initialAmount * rates[value]);
    };

    const handleInitialAmountChange = (e) => {
        setInitialAmount(e.target.value);
        setConvertedAmount(parseFloat(e.target.value) * rates[convertedSymbol]);
    };

    const handleConvertedAmountChange = (e) => {
        setConvertedAmount(e.target.value);
        setInitialAmount(parseFloat(e.target.value) * (1 / rates[convertedSymbol]));
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
                        value={initialAmount}
                        onChange={handleInitialAmountChange}
                    />
                </StyledInputWrapper>
                <StyledArrowIcon />
                <StyledInputWrapper>
                    <StyledInput
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
