import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { currencyRatesRequest } from '~/redux/actions/currenciesActions';

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
    const [initialAmount, setInitialAmount] = useState(0);

    useEffect(() => {
        dispatch(currencyRatesRequest('PLN'));
    }, [dispatch]);

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
