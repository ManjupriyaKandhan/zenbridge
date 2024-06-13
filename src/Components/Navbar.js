import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg fixed-top mx-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Zenbridge</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
          <a class="nav-link mx-lg-2" href="/">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="/products">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="/solutions">Solutions</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="/developers">Developers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="/resources">Resources</a>
          </li>
           </ul>
        
      </div>
    </div>
  </div>
  <button className='cont mx-3' >Contact Sales </button>
  <button className='log'>Login</button>
</nav>
    </div>
  )
}

export default Navbar