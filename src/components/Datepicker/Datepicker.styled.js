import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import colors from '~/utilities/colors';

export const StyledWrapper = styled.div`
    position: relative;
`;

export const StyledPlaceholder = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-100%);
    font-size: 0.8em;
`;

// Again not the sexiest way :(
export const StyledDatepicker = styled(DatePicker)`
    display: inline-block;
    border-radius: 0;
    border: none;
    -webkit-appearance: none;
    font-size: 1em;
    outline: none;
    font-family: 'Montserrat';

    & * {
        font-family: inherit;
        color: ${colors.font};
        outline: none;
    }

    & .react-date-picker__wrapper {
        font-family: 'Montserrat';
        min-height: 46px;
        min-width: 196px;
        background-color: ${colors.white};
        border: none;
        border-radius: none;
        padding-left: 14px;
        padding-right: 10px;
    }

    & .react-date-picker__inputGroup__input:invalid {
        background-color: rgba(0, 0, 0, 0);
        &::placeholder {
            color: ${colors.green};
        }
    }

    & .react-date-picker__button svg {
        width: 17px;
        height: 17px;
    }

    & .react-date-picker__button:enabled:hover .react-date-picker__button__icon, 
    & .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
        stroke: ${colors.green};
    }

    & .custom-calendar, & .custom-calendar * {
        font-family: 'Montserrat';
    }

    & .custom-calendar .react-calendar__tile--now {
        background: ${colors.lightGreen};
        
    }
`;
