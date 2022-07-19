import React, { createContext, useState } from 'react';
const themes = {
    dark: {
        backgroundColor:"#191A1F",
            textTitle:'#fff',
            textTitle2:'#fff',
        appColor: "#16B1F4",
    appColorDarker: "#0385BC",
    text: "#311944",
    darkGreen: "#32655c",
   
    lightGreen:'#f1f5ec',
    gray:'#E8EAE6',
    white:'#fff',
    topRowBack:'#111',
    iconWhite:'#fff',
    cardBack:'#f1f5ec',
    borderB:'#192434',
    menuTitle:'#fff',
    greenBack:'#303135',
    borderColor:"#192434",
    },
    light: {
        textTitle2:'#32655c',
        borderColor:"#cacaca",
        greenBack:'#f1f5ec',
        menuTitle:'#32655c',
        borderB:'#E8EAE6',
        // cardBack:'#f1f5ec',
        cardBack:'#ffffff',
        iconWhite:'#111',
        topRowBack:'#fff',
        textTitle:'#111',
        // backgroundColor:"#fcfcfc",
        // backgroundColor:"#f0fff0",
        backgroundColor:"#f0fff0",
        appColor: "#16B1F4",
        appColorDarker: "#0385BC",
        text: "#311944",
        darkGreen: "#f1f5ec",
        borderColor:"#cacaca",
        lightGreen:'#f1f5ec',
        gray:'#E8EAE6',
        white:'#111',
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
}
const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false) // Default theme is light

    // To toggle between dark and light modes
    const toggle = () => {
        setDark(!dark)
        console.log('toggled');
    }

    // Filter the styles based on the theme selected
    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{ dark, theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }