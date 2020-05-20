import styled from 'styled-components';

export const StyledCurrencyGraph = styled.div`
    display: flex;
    margin-top: 40px;
    width: calc(100% - 50px);
    min-height: 150px;
    transform: translateX(-10px);
    & .recharts-cartesian-axis-tick-value {
        font-size: 0.9em;
    }
`;
