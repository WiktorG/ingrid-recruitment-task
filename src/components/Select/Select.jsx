import React, { useState } from 'react';
import PropTypes from 'prop-types';
import colors from '~/utilities/colors';

import {
    StyledSelect,
} from './Select.styled';

const Select = ({
    options,
    onChange,
    placeholder,
    defaultValue,
    className
}) => {
    const [selected, setSelected] = useState(defaultValue || options[0]);

    const preHandleChange = (selectedOption) => {
        setSelected(selectedOption);
        onChange(selectedOption);
    };

    return (
        <StyledSelect
            className={`${className} react-select`}
            classNamePrefix="react-select"
            placeholder={placeholder}
            options={options}
            onChange={preHandleChange}
            value={selected}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    primary: colors.green,
                },
            })}
        />
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
    }),
    className: PropTypes.string,
};

Select.defaultProps = {
    options: [],
    onChange: () => {},
    placeholder: '$',
    defaultValue: null,
    className: '',
};


export default Select;
