import React from 'react'

export const Header = () => {
  return (
    <div className='mt-5 header-bg'>
        <div className='container row'>
            <div className='col-xl-6'>
                <h2>Discover scientific knowledge and stay connected to the world of science</h2>
            </div>
            <div className='col-xl-6'>
            <img src="/images/header-logo.jpg" style={{height:"700px"}} className="pt-5 pb-5"/>
            </div>
        </div>
    </div>
  )
}
