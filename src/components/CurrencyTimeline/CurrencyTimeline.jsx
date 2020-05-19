import React from 'react';

import Datepicker from '~/components/Datepicker/Datepicker';

import {
    StyledCurrencyTimeline,
    StyledTitle,
    StyledForm,
} from './CurrencyTimeline.styled';

const CurrencyUpdate = () => (
    <StyledCurrencyTimeline>
        <StyledTitle>Currency timeline</StyledTitle>
        <StyledForm>
            <Datepicker
                placeholder="Date from"
            />
        </StyledForm>
    </StyledCurrencyTimeline>
);


export default CurrencyUpdate;
