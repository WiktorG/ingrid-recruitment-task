import styled from 'styled-components';
import screens from '~/utilities/screens';

export const StyledCurrencyInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledInfoWrapper = styled.span`
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 0.86em;
    margin-top: 5px;
    @media ${screens.mobileXL} {
        font-size: 0.95em;
    }
`;
