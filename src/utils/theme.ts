import {DefaultTheme} from "styled-components";

interface ThemeArray {
    [key: string]: DefaultTheme
}

export const base: DefaultTheme = {
    N0: '#FFFFFF',
    N100: '#f3f4f4',
    N200: '#dee1e1',
    N300: '#c8cccc',
    N400: '#b0b6b7',
    N500: '#929a9b',
    N600: '#6e797a',
    N700: '#515e5f',
    N800: '#364141',
    N900: '#273333',
    N1000: '#162020'
}

const palette: ThemeArray = {
    blue: {
        0: '#e9f8ff',
        100: '#dcf2ff',
        200: '#c7e4f9',
        300: '#a1d2f8',
        400: '#56adf5',
        500: '#3896e3',
        600: '#2b87d3',
        700: '#2079c3',
        800: '#116daa',
        900: '#0c5689',
    },
    green: {
        0: '#ebf9eb',
        100: '#d7f4d7',
        200: '#c2f2bd',
        300: '#98e58e',
        400: '#75dd66',
        500: '#59cb59',
        600: '#2bb656',
        700: '#0ca750',
        800: '#008b46',
        900: '#006b40',
    },
    aqua: {
        0: '#d9fcfb',
        100: '#c5f9f9',
        200: '#a5f2f2',
        300: '#76e5e2',
        400: '#33d6e2',
        500: '#17b8ce',
        600: '#0797ae',
        700: '#0b8599',
        800: '#0f6e84',
        900: '#035e73',
    },
    purple: {
        0: '#f2f2f9',
        100: '#eaeaf9',
        200: '#d8d7f9',
        300: '#c1c1f7',
        400: '#a193f2',
        500: '#9180f4',
        600: '#816fea',
        700: '#6f5ed3',
        800: '#5e4eba',
        900: '#483a9c',
    },
    teal: {
        0: '#e5f9f5',
        100: '#cdf7ef',
        200: '#b3f2e6',
        300: '#7dead5',
        400: '#24e0c5',
        500: '#08c4b2',
        600: '#00a99c',
        700: '#0b968f',
        800: '#067c7c',
        900: '#026661',
    }
}

export default palette;