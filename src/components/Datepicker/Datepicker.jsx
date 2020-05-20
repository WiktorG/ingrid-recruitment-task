import React from 'react';
import PropTypes from 'prop-types';

import { isValidDate } from '~/helpers/dateHelpers';

import {
    StyledWrapper,
    StyledPlaceholder,
    StyledDatePicker,
} from './DatePicker.styled';

const DatePicker = ({
    className,
    placeholder,
    value,
    onBlur,
    onChange,
    minDate,
    maxDate,
}) => {
    const validatedValue = isValidDate(new Date(value)) ? new Date(value) : undefined;
    return (
        <StyledWrapper
            className={className}
            data-testid="DatePicker"
        >
            <StyledPlaceholder>
                {placeholder}
            </StyledPlaceholder>
            <StyledDatePicker
                className="custom-date-picker"
                calendarClassName="custom-calendar"
                value={validatedValue}
                onBlur={onBlur}
                onChange={onChange}
                minDate={minDate}
                maxDate={maxDate}
                format="y/MM/dd"
                dayPlaceholder="dd"
                monthPlaceholder="mm"
                yearPlaceholder="yyyy"
                showLeadingZeros
                clearIcon={null}
            />
        </StyledWrapper>
    );
};

DatePicker.propTypes = {
    className: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
};

DatePicker.defaultProps = {
    className: '',
    onBlur: () => {},
    onChange: () => {},
    placeholder: '',
    value: '',
    minDate: new Date('1999-01-04'),
    maxDate: new Date(),
};

export default DatePicker;
