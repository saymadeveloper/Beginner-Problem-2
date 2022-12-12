import React from 'react'

export const Content = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-6 m-auto'>
                        <img src="/images/discover.jpg" className="pt-5 pb-5 discover-img" />
                    </div>
                    <div className='col-xl-6 m-auto'>
                        <h1>Discover research</h1>
                        <p className='mt-3'>Access over 135 million publication pages and stay up to date with what's happening in your field.</p>
                        <form className='mt-5'>
                            <input type="text" placeholder='Search here...' className="form-control" />
                        </form>
                    </div>
                </div>

                <div className='mt-5 row'>
                    <div className='col-xl-6'>
                        <h1>Connect with your scientific community</h1>
                        <p className='mt-5'>Share your research, collaborate with your peers, and get the support you need to advance your career.</p>
                    </div>
                    <div className='col-xl-6 mt-2'>
                        <div>
                        <h6 className='text-muted'><strong>Visit Topic Pages</strong></h6>
                        </div>
                        <div className='mt-5'>
                            <button className='visit-btn'>Engineering</button>
                            <button className='visit-btn'>Mathematics</button>
                            <button className='visit-btn'>Biology</button>
                        </div>
                        <div className='mt-3'>
                            <button className='visit-btn'>Computer Science</button>
                            <button className='visit-btn'>Climate Change</button>
                        </div>
                        <div className='mt-3'>
                            <button className='visit-btn'>Medicine</button>
                            <button className='visit-btn'>Physics</button>
                            <button className='visit-btn'>Social Science</button>
                        </div>
                        <div className='mt-3'>
                            <button className='visit-btn'>Astrophysics</button>
                            <button className='visit-btn'>Chemistry</button>
                        </div>
                    </div>
                </div>

                <div className='row border-bottom'>
                    <div className='col-xl-6 m-auto'>
                        <img src="/images/measure.jpg" className="pt-5 pb-5 discover-img" />
                    </div>
                    <div className='col-xl-6 m-auto'>
                        <h1>Measure your impact</h1>
                        <p className='mt-3'>Get in-depth stats on who's been reading your work and keep track of your citations.</p>
                    </div>
                </div>

                <div className='advance-research mt-5'>
                    <h1>Advance your research and join a community of 20 million scientists</h1>
                    <button className='header-btn mt-3'>Join for free</button>
                </div>
            </div>
        </div>
    )
}
