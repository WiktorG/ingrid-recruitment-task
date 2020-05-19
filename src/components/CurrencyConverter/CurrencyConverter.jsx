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
    const currentCurrency = useSelector(currentCurrencySelector);
    const currenciesSymbols = useSelector(currenciesSymbolsSelector);
    const [initialAmount, setInitialAmount] = useState(0);

    useEffect(() => {
        dispatch(currencyRatesRequest('PLN'));
    }, [dispatch]);

    console.log(currentCurrency, currenciesSymbols);


    return (
        <StyledCurrencyConverter>
            <StyledTitle>Currency Converter</StyledTitle>
            <StyledForm>
                <StyledInputWrapper>
                    <Select
                        options={[{
                            label: 'PLN',
                            value: 1,
                        }]}
                    />
                    <StyledInput
                        value={initialAmount}
                        onChange={(e) => setInitialAmount(e.target.value)}
                    />
                </StyledInputWrapper>
                <StyledArrowIcon />
                <StyledInputWrapper>
                    <StyledInput
                        value={initialAmount}
                        onChange={(e) => setInitialAmount(e.target.value)}
                    />
                    <Select
                        options={[{
                            label: 'EUR',
                            value: 4,
                        }]}
                    />
                </StyledInputWrapper>
            </StyledForm>
        </StyledCurrencyConverter>
    );
};

export default CurrencyConverter;
