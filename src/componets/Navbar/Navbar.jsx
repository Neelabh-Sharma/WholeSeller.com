import React from 'react'
import './Navbar.css'
function Navbar() {
  const handlesidebar = (e) =>{
    e.preventDefault();
    console.warn("clicked");
  }
  return (
    <React.Fragment>
      <nav>
        <div className='brand-name'>
          <i className="fa-solid fa-shop"></i>
          wholeSeller
        </div>
        <div className='nav-links'>
          <ul>
            <li>
              <a>Mens</a>
            </li>
            <li>
              <a >Womens</a>
            </li>
            <li>
              <a >Home&Living</a>
            </li>
            <li>
              <a >Beauty</a>
            </li>
          </ul>
        </div>
        <div className='nav-account'>
            <ul>
              <li>
                <a className='under-text'>
                  <i className="fa-solid fa-bag-shopping"></i>
                  <span>Bag</span>
                </a>
              </li>
              <li className='profile'>
                <a  className='under-text'>
                  <i className="fa-solid fa-user"></i>
                  <span>Profile</span>
                </a>
                <div className='nav-profile-dropdown'>
                  <ul>
                    <li className='drop-down-list'>
                      <a>Order</a>
                    </li>
                    <li className='drop-down-list'>
                      <a>Settings</a>
                    </li>
                    <li className='drop-down-list'>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
        </div>
        <div className='sidebar' onClick={(e) =>{handlesidebar(e)}}>
           <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
      {/* <div className='side-container'>
       
      </div> */}
    </React.Fragment>
  )
}

export default Navbar
