import React from 'react';
import PropTypes from 'prop-types';

import {
    StyledInput,
} from './Input.styled';

const Input = ({
    className,
    placeholder,
    value,
    onBlur,
    onChange,
    type,
}) => (
    <StyledInput
        data-testid="Input"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        type={type}
    />
);

Input.propTypes = {
    className: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
    className: '',
    onBlur: () => {},
    onChange: () => {},
    placeholder: '',
    type: 'text',
    value: '',
};

export default Input;
