import React, { useState, useEffect } from 'react';
import api from '~/etc/api';

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
    const [initialAmount, setInitialAmount] = useState(0);

    useEffect(() => {
        api.currencies.latest().then((resp) => console.log(resp));
    }, []);

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
