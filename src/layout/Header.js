import React from 'react'
import goldCoin from '../images/gold-coin.png'; 
import profilePic from '../images/profile_pic.jpeg'
import { Link } from 'react-router-dom';

function Header({ toggleSidebar, isSidebarOpen }) {

  return (
    <>
      <header className="header-wrapper ">
            <div className="sidebar-menuicon-cont container-bg" id='sidebar-open-btn' onClick={toggleSidebar}>
            <span className="material-icons-outlined">{isSidebarOpen ? 'close' : 'menu'}</span>
            </div>
            <div className="top-header-cont container-bg">
              <ul className="top-menu-list">
                <li className="top-menu ">
                  <Link className="menu-link menu-active" to="/">
                    Home
                  </Link>
                </li>
                <li className="top-menu">
                  <Link className="menu-link" to="/jobdetails">
                    job post
                  </Link>
                </li>
                <li className="top-menu">
                  <Link className="menu-link" to="/events">
                    events
                  </Link>
                </li>
                <li className="top-menu">
                  <Link className="menu-link" to="/">
                    tools
                  </Link>
                </li>
                <li className="top-menu">
                  <Link className="menu-link" to="/">
                    contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="coin-cont container-bg">
              <img src={goldCoin} alt="" />
              <span className="font-b">100</span>
            </div>
            <div className="notiification-cont container-bg">
              <span class="material-icons">notifications</span>
              <div className="notification-dot"></div>
            </div>
            <div className="profile-pic-cont container-bg">
              <img src={profilePic} alt="" />
            </div>

           
          </header>

           {/* mobile header */}
           <div className='mobile-header-cont'>
           <div className="sidebar-menuicon-cont container-bg " id='sidebar-open-btn' onClick={toggleSidebar}>
            <span className="material-icons-outlined">menu</span>
            </div>
            <div className="coin-cont container-bg">
              <img src={goldCoin} alt="" />
              <span className="font-b">100</span>
            </div>
            <div className="notiification-cont container-bg">
              <span class="material-icons">notifications</span>
              <div className="notification-dot"></div>
            </div>
            <div className="profile-pic-cont container-bg">
              <img src={profilePic} alt="" />
            </div>
            </div>

            {/* top mobile menus */}

            <ul className='top-mobile-menu-box'>
              <li className='top-mobile-menu'><Link to="/" className='top-mobile-menu-link d-center pink'><span className="material-icons">home</span></Link></li>
              <li className='top-mobile-menu'><Link to="/jobdetails" className='top-mobile-menu-link d-center lg-blue'><span className="material-icons">work</span></Link></li>
              <li className='top-mobile-menu'><Link to="/events" className='top-mobile-menu-link d-center sky'><span className="material-icons">calendar_month</span></Link></li>
              <li className='top-mobile-menu'><Link to="/" className='top-mobile-menu-link d-center lg-green'><span className="material-icons">construction</span></Link></li>
              <li className='top-mobile-menu'><Link to="/" className='top-mobile-menu-link d-center lg-navi'><span className="material-icons">map</span></Link></li>

            </ul>
    </>
    

  )
}

export default Header
