import React from 'react'
import Followers from './Followers'
import Media from './Media'

const AboutDev = ({
    avatar, theme, 
    themes, repos, 
    followers, following, 
    name, userName, 
    location, company, 
    url, twitter, 
    dates, eachDay, 
    year, bio
}) => {
  return (
    <div className='about-dev-container' style={theme}>
        <section className='about-dev-header'>
            <div>
                <img src={avatar} alt="" className='avatar' /> 
            </div>
            <div className='about-dev'>
                <h3>{name}</h3>
                <p className='username'>@{userName}</p>
                <p>joined {eachDay} {dates} {year}</p>
            </div>
        </section>
        <p className='bio'>{bio == null ? <p className='no-bio'>This profile as no bio</p> : <p>{bio}</p> }</p>
        <Followers themes={themes} repos={repos} followers={followers} following={following}  />
        <Media location={location} twitter={twitter} theme={theme} url={url} company={company}  />
    </div>
  )
}

export default AboutDev