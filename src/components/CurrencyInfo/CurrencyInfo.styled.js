import styled, { keyframes } from 'styled-components';
import screens from '~/utilities/screens';

const slideDown = keyframes`
    from {
        height: 0;
    }
    to {
        height: 220px;
    }
`;

export const StyledCurrencyInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
    animation-name: ${({ isVisible }) => (isVisible ? slideDown : 'none')};
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
