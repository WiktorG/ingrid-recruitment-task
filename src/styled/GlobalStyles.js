import { createGlobalStyle } from 'styled-components';
import colors from '~/utilities/colors';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
    * {
        box-sizing: border-box;
    }

    body {
        color: ${colors.font};
        font-size: 16px;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    input {
        &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        &[type=number] {
            -moz-appearance: textfield;
        }
        
        &::placeholder {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
    }
`;

export default GlobalStyle;
