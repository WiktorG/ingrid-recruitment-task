import React from 'react';


import {
    StyledCurrencyTimeline,
    StyledTitle,
    StyledForm,
    StyledDatePicker,
    StyledIconHolder,
    StyledArrow,
} from './CurrencyTimeline.styled';

const CurrencyUpdate = () => (
    <StyledCurrencyTimeline>
        <StyledTitle>Currency timeline</StyledTitle>
        <StyledForm>
            <StyledDatePicker
                placeholder="Date from"
            />
            <StyledIconHolder>
                <StyledArrow />
            </StyledIconHolder>
            <StyledDatePicker
                placeholder="Date to"
            />
        </StyledForm>
    </StyledCurrencyTimeline>
);


export default CurrencyUpdate;
