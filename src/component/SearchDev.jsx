import React, { useEffect, useState } from 'react'
import Search from '../images/icon-search.svg'
import AboutDev from './AboutDev'

const SearchDev = ({theme, themes}) => {
  const [userName, setUserName] = useState('')
  const [name, setName] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [public_repo, setRepos] = useState('')
  const [avatar, setAvatar] = useState('')
  const [userInput, setUserInput] = useState('')
  const [location, setLocation] = useState('')
  const [company, setCompany] = useState('')
  const [twitter, setTwitter] = useState('')
  const [website, setWebsite] = useState('')
  const [date, seteDate] = useState("")
  const [show, setShow] = useState(false)
  const [error, setError] = useState(null)
  
  const [bio, setBio] = useState("")
  const  months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];
  const d = new Date(date);
  const monthName =  months[d.getMonth()]
  const year = [d.getFullYear()]
  const eachDay = [d.getDate()]
  
  useEffect(() => {
    fetch('https://api.github.com/users/example')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, [])

  const setData = ({
    name, 
    login, 
    followers, 
    following, 
    public_repos, 
    avatar_url, 
    location,
    company,
    twitter_username,
    html_url,
    created_at,
    bio
  }) => {
    setName(name)
    setUserName(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
    setLocation(location)
    setCompany(company)
    setTwitter(twitter_username)
    setWebsite(html_url)
    seteDate(created_at)
    setBio(bio)
  }

  const handleSearch = (e) => {
    setUserInput(e.target.value)
    setError("")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        setError(data.message)
        setData(data.prev)
      } else{
        setError('')
      }
      console.log(data)
      setData(data);
      setShow(false)
    })  
  }
  const handleDelete = () => {
    setUserInput("")
    setShow(false)
  }
  const handleShow = () => {
      setShow(true)
  }

  return (
    <>
        <div className='search-dev-box'>
            <form action="" style={theme} className='search-dev' onSubmit={handleSubmit} >
              <div className='search-flex'>
                <img src={Search} alt="search" className='img-search' />
                <input style={theme} type="text" placeholder='Search Github Username...' id="search-text-input" value={userInput} onChange={handleSearch} onInput={handleShow} /> 
              </div>
              <p className='error'>{error}</p>
              {show ? <b className='delete' style={theme} onClick={handleDelete}>X</b> : null}
              <button className='btn-search' onClick={handleSubmit}>Search</button>
            </form>
        </div>
          <AboutDev
           theme={theme} 
           themes={themes} 
           avatar={avatar} 
           repos={public_repo} 
           followers={followers} 
           following={following} 
           name={name} 
           userName={userName} 
           location={location} 
           company={company} 
           url={website} 
           twitter={twitter} 
           dates={monthName} 
           year={year} 
           eachDay={eachDay} 
           bio={bio} 
           />
    </>
  )
}

export default SearchDev