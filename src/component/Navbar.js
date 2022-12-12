import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-light bg-white border-bottom fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/images/logo.png" />
        </a>
        <ul className="navbar-nav me-2 menu">
          <li className="nav-item">
            <a className='logIn' aria-current="page" href="#">Log in</a>
          </li>
          <li className="nav-item">
            <a className='join' aria-current="page" href="#">Join for free</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}