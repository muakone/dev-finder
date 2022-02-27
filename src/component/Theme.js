import React from 'react'
import sun from '../images/icon-sun.svg'
import moon from '../images/icon-moon.svg'
export const Themes = {
     Light: {
        background: '#F6F8FF',
        color: 'hsl(229, 57%, 11%)',
        Text: 'Dark',
        img: moon
     },
     Dark: {
        background: '#141D2F',
        color: 'white',
        Text: 'Light',
        img: sun
     }
    
}
export const ThemeContent = {
   Light: {
      background: '#FEFEFE',
      color: 'hsl(229, 57%, 11%)'
   },
   Dark: {
      background: '#1E2A47',
      color: 'white'
   }
}

const ThemeContext = React.createContext(Themes.Dark)
export const ThemeContainer = React.createContext(ThemeContent.Dark)

export default ThemeContext;