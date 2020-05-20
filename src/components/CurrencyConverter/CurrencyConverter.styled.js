import styled from 'styled-components';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';
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
    text-align: center;
    font-size: 1.4em;
    color: ${colors.font};
    @media ${screens.tablet} {
        margin-right: auto;
        text-align: left;
        font-size: 1.56em;
    }
`;

// I decided not to use Formik in this app, but on my github
// in repo "polskietechno.pl" you can see the way I implemeted it :)
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    max-width: 585px;
    width: 100%;
    @media ${screens.mobileXL} {
        flex-direction: row;
    }
`;

export const StyledInputWrapper = styled.span`
    display: flex;
    align-items: center;
    width: 100%;
    @media ${screens.mobileXL} {
        &:nth-last-of-type(1) {
            flex-direction: row-reverse;
        }
    }
`;

export const StyledInput = styled(Input)`
    width: 100%;
    @media ${screens.mobileXL} {
        max-width: 187px;
    }
`;

export const StyledArrowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin-left: 7px;
    margin-right: 7px;
    font-size: 1.2em;
    color: ${colors.font};
    @media ${screens.mobileXL} {
        flex-direction: column;
        justify-content: center;
        width: auto;
    }
`;

export const StyledArrowRight = styled(IoMdArrowRoundForward)`
    transition: all 0.3s ease;
    transform: rotate(90deg);
    @media ${screens.mobileXL} {
        transform: none;
    }
`;

export const StyledArrowLeft = styled(IoMdArrowRoundBack)`
    transition: all 0.3s ease;
    transform: rotate(90deg);
    @media ${screens.mobileXL} {
        transform: none;
        margin: 0;
    }
`;

export const StyledInfoWrapper = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    max-width: 585px;
    min-height: 19px;
    font-size: 0.86em;
    margin-top: 5px;
    @media ${screens.mobileXL} {
        font-size: 0.95em;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const StyledError = styled.span`
    text-align: center;
    font-weight: bold;
    color: ${colors.red};
    margin-top: 5px;
    @media ${screens.mobileXL} {
        margin-top: 0;
        text-align: left;
    }
`;

export const StyledRate = styled.span`
    text-align: center;
    font-weight: bold;
    margin-top: 5px;
    @media ${screens.mobileXL} {
        margin-top: 0;
        margin-left: auto;
        text-align: right;
    }
`;
