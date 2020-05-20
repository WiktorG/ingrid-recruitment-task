import styled from 'styled-components';
import fonts from '~/utilities/fonts';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

export const StyledInput = styled.input`
    display: inline-block;
    border-radius: 0;
    border: none;
    min-height: 42px;
    padding-left: 19px;
    padding-right: 19px;
    -webkit-appearance: none;
    font-size: 1em;
    font-size: 0.9em;
    outline: none;
    &::placeholder {
        font-family: ${fonts.default};
        font-size: 0.9em;
        color: ${colors.font};
        
    }
    @media ${screens.mobileXL} {
        &::placeholder {
            font-size: 1em;
        }
        min-height: 46px;
        font-size: 1em;
    }
`;
