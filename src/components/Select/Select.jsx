import React from 'react';
import PropTypes from 'prop-types';

import {
    StyledSelect,
} from './Select.styled';

const Select = ({
    options,
    handleChange,
    placeholder,
    value,
}) => (
    <StyledSelect
        className="react-select"
        classNamePrefix="react-select"
        placeholder={placeholder}
        options={options}
        handleChange={handleChange}
        value={value}
    />
);

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

Select.defaultProps = {
    options: [],
    handleChange: () => {},
    placeholder: 'PLN',
    value: '',
};


export default Select;
