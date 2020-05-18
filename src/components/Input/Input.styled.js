import styled from 'styled-components';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

export const StyledInput = styled.input`
    display: inline-block;
    border-radius: 0;
    border: none;
    min-height: 46px;
    padding-left: 19px;
    padding-right: 19px;
    -webkit-appearance: none;
    font-size: 1em;
    outline: none;
    &::placeholder {
        font-family: 'Montserrat';
        font-size: 1em;
        color: ${colors.font};
    }
    @media ${screens.md} {
        min-height: 43px;
        font-size: 0.93em;
    }
`;
