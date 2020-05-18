import styled from 'styled-components';
import colors from '~/utilities/colors';

import Container from '~/components/Container/Container';

export const StyledCurrencyConverter = styled(Container)`
    margin-top: 100px;
`;

export const StyledTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 17px;
    font-size: 1.56em;
    color: ${colors.font}
`;
