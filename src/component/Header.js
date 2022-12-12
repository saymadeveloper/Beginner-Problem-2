import React from 'react'

export const Header = () => {
  return (
    <div className='mt-5 header-bg'>
        <div className='container d-flex flex-wrap justify-content-between'>
            <div className='header-title m-auto'>
                <h1>Discover scientific knowledge and stay connected to the world of science</h1>
                <button className='header-btn mt-2'>Join for free</button>
            </div>
            <div className='header-content-title'>
            <img src="/images/header-logo.jpg"  className="pt-5 pb-5 header-logo"/>
            </div>
        </div>
    </div>
  )
}
