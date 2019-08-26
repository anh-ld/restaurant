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
    orange: {
        0: '#ffede3',
        100: '#fcdccc',
        200: '#ffc6a4',
        300: '#ffb180',
        400: '#ff9c5d',
        500: '#fc8943',
        600: '#f57d33',
        700: '#ed7024',
        800: '#ce5511',
        900: '#962c0b',
    },
    red: {
        0: '#ffeae9',
        100: '#ffd5d2',
        200: '#ffb8b1',
        300: '#ff9c8f',
        400: '#ff7f6e',
        500: '#f76054',
        600: '#ed4c42',
        700: '#db3e3e',
        800: '#c63434',
        900: '#992222',
    },
    yellow: {
        0: '#fff8e2',
        100: '#fdefcd',
        200: '#ffe99a',
        300: '#ffe16e',
        400: '#ffd943',
        500: '#ffcd1c',
        600: '#ffbc00',
        700: '#dd9903',
        800: '#ba7506',
        900: '#944c0c',
    }
}

export default palette;