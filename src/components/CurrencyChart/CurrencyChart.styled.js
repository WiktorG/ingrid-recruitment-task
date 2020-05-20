import styled from 'styled-components';
import screens from '~/utilities/screens';

export const lineChartMargin = {
    right: 30,
    left: 30,
    top: 5,
    bottom: 5,
};

export const StyledCurrencyChart = styled.div`
    display: flex;
    margin-top: 30px;
    width: 110%;
    min-height: 150px;
    transform: translateX(-40px);
    & .recharts-cartesian-axis-tick-value {
        font-size: 0.9em;
    }
    @media ${screens.mobileL} {
        width: 100%;
        transform: translateX(-23px);

    }
    @media ${screens.mobileXL} {
        margin-top: 40px;
        width: 100%;
    }
    @media ${screens.laptop} {
        transform: translateX(-20px);
    }
`;
