import React, { useState } from 'react';

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

    return (
        <StyledCurrencyConverter>
            <StyledTitle>Currency Converter</StyledTitle>
            <StyledForm>
                <StyledInputWrapper>
                    <Select
                        options={[{
                            label: 'PLN',
                            value: 123,
                        }, {
                            label: 'USD',
                            value: 22,
                        }, {
                            label: 'JPN',
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
                            label: 'PLN',
                            value: 123,
                        }, {
                            label: 'USD',
                            value: 22,
                        }, {
                            label: 'JPN',
                            value: 1,
                        }]}
                    />
                </StyledInputWrapper>
            </StyledForm>
        </StyledCurrencyConverter>
    );
};

export default CurrencyConverter;
