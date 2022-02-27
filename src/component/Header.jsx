import React from 'react'

const Header = ({themes, themeToggler, themebgToggler}) => {
  return (
    <div className='header-dev'>
      <div>
        <h2 className='dev-head'>devfinder</h2>
      </div>
        <div className='theme-changer' onClick={themeToggler} >
          <h5>{themes.Text}</h5>
          <img className='theme-img' src={themes.img} alt="theme-img" />
        </div>
    </div>
  )
}

export default Header
