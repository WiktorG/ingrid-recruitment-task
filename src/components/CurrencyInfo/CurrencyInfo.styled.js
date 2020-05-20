import styled, { keyframes } from 'styled-components';
import screens from '~/utilities/screens';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const StyledCurrencyInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    animation-name: ${({ isVisible }) => (isVisible ? fadeIn : 'none')};
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
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
