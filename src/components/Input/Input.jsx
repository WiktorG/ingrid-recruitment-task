import React from 'react';
import PropTypes from 'prop-types';

import {
    StyledInput,
} from './Input.styled';

const Input = ({
    className,
    placeholder,
    value,
    onChange,
    type,
}) => (
    <StyledInput
        data-testid="Input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        type={type}
    />
);

Input.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
    className: '',
    onChange: () => {},
    placeholder: '',
    type: 'text',
    value: '',
};

export default Input;
