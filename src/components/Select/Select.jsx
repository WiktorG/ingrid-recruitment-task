import React, { useState } from 'react';
import PropTypes from 'prop-types';
import colors from '~/utilities/colors';

import {
    StyledSelect,
} from './Select.styled';

const Select = ({
    options,
    handleChange,
    placeholder,
    defaultValue,
}) => {
    const [selected, setSelected] = useState(defaultValue || options[0]);

    const preHandleChange = (selectedOption) => {
        setSelected(selectedOption);
        handleChange(selectedOption);
    };

    return (
        <StyledSelect
            className="react-select"
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
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.shape({
        value: PropTypes.number,
        label: PropTypes.string,
    }),
};

Select.defaultProps = {
    options: [],
    handleChange: () => {},
    placeholder: 'PLN',
    defaultValue: null,
};


export default Select;
