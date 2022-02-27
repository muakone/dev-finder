import React from 'react'
import Company from '../images/icon-company.svg'
import Location from '../images/icon-location.svg'
import Twitter from '../images/icon-twitter.svg'
import Website from '../images/icon-website.svg'
const Media = ({theme, location, twitter, url, company}) => {
  return (
    <section className='social-media'>
            <div className='medias'>
                <div className='media'>
                    {
                        location == null ? 
                        <div className='media-flex'>
                            <img className='img-media media-notAvailable' src={Location} alt="" />
                            <p className='no-bio'>Not Available</p>
                        </div>
                        :
                        <div className='media-flex'>
                            <img className='img-media' src={Location} alt="" />
                            <p className=''>{location}</p>
                        </div>
                    }
                </div>
                <div className='media'>
                    {
                        twitter == null ? 
                        <div className='media-flex'>
                            <img className='img-media media-notAvailable' src={Twitter} alt="" />
                            <p className='no-bio'>Not Available</p>
                        </div>
                        :
                        <div className='media-flex'>
                            <img className='img-media' src={Twitter} alt="" />
                            <p className=''>{twitter}</p>
                        </div>
                    }
                </div>  
            </div>
            <div className='medias'>
                <div className='media'>
                    {
                        url == null ? 
                        <div className='media-flex'>
                            <img className='img-media media-notAvailable' src={Website} alt="" />
                            <p className='no-bio'>Not Available</p>
                        </div>
                        :
                        <div className='media-flex'>
                            <img className='img-media' src={Website} alt="" />
                            <a href={url} style={theme} className='link-width'>{url}</a>
                        </div>
                    }
                </div>
                <div className='media'>
                {
                        company == null ? 
                        <div className='media-flex'>
                            <img className='img-media media-notAvailable' src={Company} alt="" />
                            <p className='no-bio'>Not Available</p>
                        </div>
                        :
                        <div className='media-flex'>
                            <img className='img-media' src={Company} alt="" />
                            <p className=''>{company}</p>
                        </div>
                    }
                </div>
            </div>
        </section>
  )
}

export default Media