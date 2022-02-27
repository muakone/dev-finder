import React, { useState } from 'react';
import ThemeContext, { Themes } from './component/Theme';
import SearchDev from './component/SearchDev'
import Header from './component/Header';
import './App.css';
import { ThemeContainer, ThemeContent } from './component/Theme';

function App() {
  const [theme, setTheme] = useState(Themes.Dark)
  const [themebg, setThemebg] = useState(ThemeContent.Dark)

  const themeToggler = () => {
    theme === Themes.Dark
    ? setTheme(Themes.Light)
    : setTheme(Themes.Dark)
  }
  const themebgToggler = () => {
    themebg === ThemeContent.Dark
    ? setThemebg(ThemeContent.Light)
    : setThemebg(ThemeContent.Dark)
  }
  const themeClick = () => {
    themeToggler()
    themebgToggler()
  }
  return (
    <div className="App" style={theme}>
      <ThemeContext.Provider value={theme}>
        <div className='content-width'>
          <Header themes={theme} themeToggler={themeClick} />
          <ThemeContainer.Provider value={themebg}>
            <SearchDev theme={themebg} themes={theme} className='search-dev' />
          </ThemeContainer.Provider>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
