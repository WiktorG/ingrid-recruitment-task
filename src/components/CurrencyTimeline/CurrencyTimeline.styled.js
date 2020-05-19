import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

import Container from '~/components/Container/Container';
import DatePicker from '~/components/DatePicker/DatePicker';

export const StyledCurrencyTimeline = styled(Container)`
    align-items: center;
    transition: all 0.3s ease;
    margin-top: 10px;
    @media ${screens.laptop} {
        margin-top: 33px;
        padding-bottom: 30px;
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

export const StyledForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    max-width: 585px;
    width: 100%;
    margin-top: 10px;
    @media ${screens.mobileXL} {
        flex-direction: row;
    }
`;

export const StyledDatePicker = styled(DatePicker)`
    max-width: unset;
    width: 100%;
    @media ${screens.mobileXL} {
        margin-top: 0;
    }
`;

export const StyledIconHolder = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: auto;
    min-width: 19px;
    margin-left: 7px;
    margin-right: 7px;
`;


export const StyledArrow = styled(IoMdArrowRoundForward)`
    margin-top: 3px;
    transform: rotate(90deg) translateX(-1.5px);
    font-size: 1.2em;
    @media ${screens.mobileXL} {
        margin-top: 0;
        transform: rotate(0deg);
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
