import styled from 'styled-components';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 780px;
    width: calc(100% - 20px);
    padding: 27px 40px;
    background-color: ${colors.containerBackground};
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
`;
