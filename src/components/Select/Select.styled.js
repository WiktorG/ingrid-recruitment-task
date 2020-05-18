import styled from 'styled-components';
import ReactSelect from 'react-select';

import colors from '~/utilities/colors';

// It throws warnings but fix is waiting to be merged to the library.
// I would create my own select but I'd rather focus on more important stuff :D
// TODO: Update package when issue is resolved
// I know this isn't the sexiest way.. But it was documented this way! :)
// I hope this doesn't hurt your eyes.
export const StyledSelect = styled(ReactSelect)`
    max-width: 96px;
    outline: none;

    & * { 
        outline: none;
    }

    .react-select__control {
        border-radius: 0;
        border: none;
        background-color: ${colors.green};
        height: 46px;
    }

    .react-select__control--is-focused {
        border-color: ${colors.green};
        box-shadow: none;
        &:hover {
            border-color: ${colors.green};
            box-shadow: none;
        }
    }

    .react-select__value-container {
        display: flex;
        justify-content: center;
        padding-left: 20px;
        padding-right: 0;
        & * {
        color: ${colors.white};
        }   
    }

    .react-select__input {
        width: 100%;
        margin-right: auto;
    }

    .react-select__control--is-focused .react-select__placeholder {
        display: none;
    }

    .react-select__control--menu-is-open .react-select__single-value {
        display: none;
    }

    .react-select__placeholder {
        color: ${colors.white};
        text-align: center;
        text-transform: uppercase;
        cursor: text;
    }

    .react-select__indicator-separator {
        display: none;
    }

    .react-select__indicator {
        padding: 0;
        padding-right: 17px;
        color: ${colors.white};
        &:hover {
            color: ${colors.white};
            cursor: pointer;
        }
    }
    
    .react-select__menu {
        border-radius: 0;
        border: none;
        margin-top: 0;
    }
`;
