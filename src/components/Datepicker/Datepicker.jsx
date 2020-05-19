import React from 'react';
import PropTypes from 'prop-types';

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
}) => (
    <StyledWrapper
        className={className}
    >
        <StyledPlaceholder>
            {placeholder}
        </StyledPlaceholder>
        <StyledDatePicker
            className="custom-date-picker"
            calendarClassName="custom-calendar"
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            minDate={minDate}
            maxDate={maxDate}
            dayPlaceholder="dd"
            monthPlaceholder="mm"
            yearPlaceholder="yyyy"
            showLeadingZeros
            clearIcon={null}
        />
    </StyledWrapper>

);

DatePicker.propTypes = {
    className: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
