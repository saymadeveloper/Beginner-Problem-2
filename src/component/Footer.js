import React from 'react'

export const Footer = () => {
  return (
    <div className='mt-5 header-bg footer'>
      <div className='container footer-container'>
        <div>
          <p className='fs-4 footer-title'>ResearchGate Business Solutions</p>
        </div>
        <div className='row'>
          <div className='col-xl-6'>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="/images/footer-img-1.jpg" class="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="/images/footer-img-2.jpg" class="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row border-top pt-5'>
          <div className='col-xl-8'>
            <small>
              <ul class="list-inline">
                <li><a href="#">About us</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Copyright</a></li>
                <li><a href="#">Imprint</a></li>
              </ul>
            </small>
          </div>
          <div className='col-xl-4'>
          <small>
              <ul class="list-inline">
                <li><a href="#">Researchers</a></li>
                <li><a href="#">Q&A</a></li>
                <li><a href="#">Publications</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Recruiting</a></li>
              </ul>
              <small className='copy-right'>© 2008-2022 ResearchGate GmbH. All rights reserved.</small>
            </small>
            
          </div>
        </div>
      </div>
    </div>
  )
}
