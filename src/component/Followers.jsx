import React from 'react'

const Followers = ({themes, repos, followers, following}) => {
  return (
    <section className='followers-section'>
            <div style={themes} className="followers-number">
                <div>
                    <h4>repos</h4>
                    <h1>{repos}</h1>
                </div>
                <div>
                    <h4>followers</h4>
                    <h1>{followers}</h1>
                </div>
                <div>
                    <h4>following</h4>
                    <h1>{following}</h1>
                </div>
            </div>
        </section>
  )
}

export default Followers