import { createGlobalStyle } from 'styled-components';
import fonts from '~/utilities/fonts';
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
        font-family: ${fonts.default};
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
            font-family: ${fonts.default};
        }
    }

    #root {
        position: relative;
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 100px;
    }
`;

export default GlobalStyle;
