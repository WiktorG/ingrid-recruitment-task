import styled from 'styled-components';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

export const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
`;

export const StyledLink = styled.a`
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    color: ${colors.green};
    font-size: 2.5em;
    font-weight: bold;
    @media ${screens.sm} {
        font-size: 2em;
    }
    @media ${screens.xs} {
        font-size: 1.7em;
    }
`;

export const StyledCaption = styled.span`
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.8125em;
    line-height: 0.8125em;
    font-weight: bold;
`;
