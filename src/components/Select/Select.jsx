import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    StyledSelect,
} from './Select.styled';

const Select = ({
    options,
    handleChange,
    placeholder,
    defaultValue,
}) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue || null);

    const preHandleChange = (newOption) => {
        setSelectedOption(newOption);
        handleChange(newOption);
    };

    return (
        <StyledSelect
            className="react-select"
            classNamePrefix="react-select"
            placeholder={placeholder}
            options={options}
            onChange={preHandleChange}
            value={selectedOption}
        />
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
};

Select.defaultProps = {
    options: [],
    handleChange: () => {},
    placeholder: 'PLN',
    defaultValue: '',
};


export default Select;
