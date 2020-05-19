import styled from 'styled-components';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

import Container from '~/components/Container/Container';

export const StyledCurrencyTimeline = styled(Container)`
    align-items: center;
    transition: all 0.3s ease;
    margin-top: 10px;
    @media ${screens.laptop} {
        margin-top: 33px;
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
