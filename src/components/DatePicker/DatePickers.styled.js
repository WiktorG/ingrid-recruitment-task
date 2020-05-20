import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import fonts from '~/utilities/fonts';
import screens from '~/utilities/screens';
import colors from '~/utilities/colors';

export const StyledWrapper = styled.div`
    position: relative;
    width: 100%;
    @media ${screens.mobileXL} {
        margin-top: 0;
        max-width: 207px;
    }
`;

export const StyledPlaceholder = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-100%);
    font-size: 0.8em;
`;

// Again not the sexiest way :(
export const StyledDatePicker = styled(DatePicker)`
    display: inline-block;
    border-radius: 0;
    border: none;
    -webkit-appearance: none;
    font-size: 0.9em;
    outline: none;
    width: 100%;
    font-family: ${fonts.default};
    @media ${screens.mobileXL} {
        font-size: 1em;
    }
    & * {
        font-family: inherit;
        color: ${colors.font};
        outline: none;
    }

    & .react-date-picker__wrapper {
        min-height: 46px;
        width: 100%;
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

    & .custom-calendar .react-calendar__tile--now {
        background: ${colors.lightGreen};
        
    }

    & .react-calendar__tile--active, & .react-calendar__tile--hasActive {
        background: ${colors.green};
        &:hover {
            background: ${colors.green};
        }
    }
`;
