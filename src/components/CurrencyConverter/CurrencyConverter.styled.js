import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

import Container from '~/components/Container/Container';
import Input from '~/components/Input/Input';

export const StyledCurrencyConverter = styled(Container)`
    align-items: center;
    transition: all 0.3s ease;
    margin-top: 10px;
    @media ${screens.laptop} {
        margin-top: 70px;
    }
`;

export const StyledTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 17px;
    margin-right: auto;
    font-size: 1.4em;
    color: ${colors.font};
    @media ${screens.tablet} {
        font-size: 1.56em;
    }
`;

// I decided not to use Formik in this app, but on my github
// in repo "polskietechno.pl" you can see the way I implemeted it :)
export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    max-width: 585px;
`;

export const StyledInputWrapper = styled.span`
    display: flex;
`;

export const StyledInput = styled(Input)`
    max-width: 187px;
    width: 100%;
`;

export const StyledArrowIcon = styled(IoMdArrowRoundForward)`
    font-size: 1.2em;
    color: ${colors.font};
    margin-left: 4px;
    margin-right: 4px;
`;

export const StyledInfoWrapper = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 585px;
    min-height: 19px;
    margin-top: 2px;
`;

export const StyledError = styled.span`
    text-align: left;
    font-weight: bold;
    color: ${colors.red};
`;

export const StyledRate = styled.span`
    margin-left: auto;
    text-align: right;
    font-weight: bold;
`;
