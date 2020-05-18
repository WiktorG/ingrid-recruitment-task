import React from 'react';
import PropTypes from 'prop-types';

import {
    StyledInput,
} from './Input.styled';

const Input = ({
    className,
    placeholder,
    value,
    handleChange,
    type,
}) => (
    <StyledInput
        data-testid="Input"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={className}
        type={type}
    />
);

Input.propTypes = {
    className: PropTypes.string,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    value: PropTypes.string,
};

Input.defaultProps = {
    className: '',
    handleChange: () => {},
    placeholder: '',
    type: 'text',
    value: '',
};

export default Input;
