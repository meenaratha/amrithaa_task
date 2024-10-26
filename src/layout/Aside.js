import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png'; 
import { Link } from 'react-router-dom';


function Aside({ isSidebarOpen,toggleSidebar }) {
  const [activeMenu, setActiveMenu] = useState("");

    // Load active menu from localStorage on component mount
    useEffect(() => {
        const savedMenu = localStorage.getItem("activeMenu");
        if (savedMenu) {
            setActiveMenu(savedMenu);
        }
    }, []);

    // Function to handle menu click and save to localStorage
    const handleMenuClick = (menuName) => {
        setActiveMenu(menuName);
        localStorage.setItem("activeMenu", menuName); // Save to localStorage
    };
  
  return (
    <aside  className={`sidebar-cont container-bg ${isSidebarOpen ? 'sidebar-active' : ''}`}>
              <button type="" className='sidebar-close-btn d-center'  onClick={() => toggleSidebar(false)}  id='sidebar-close-btn'><span class="material-icons icon">close</span></button>
               <div className='sidebar-logo'>
                 <Link rel="" type="" to="/"><img src={logo} alt="" /></Link>
               </div>
               {/* <ul className='sidebar-menus'>
                 <li className='sidebar-menu'><Link to="/" className='sidebar-menu-link d-start'> <span className="material-icons">home</span><span>Home page</span></Link></li>
                 <li className='sidebar-menu'><Link to="/" className='sidebar-menu-link sidebar-menu-active d-start'> <span className="material-icons">person</span><span>sub user creation</span></Link>
                  <ul className='sub-menu-cont'>
                     <li className='sub-menu'><Link to="/" className='submenu-link submenu-link-active d-start'>create job post</Link></li>
                  </ul>
                 </li>
                 <li className='sidebar-menu'><Link to="/jobdetails" className='sidebar-menu-link  d-start'> <span className="material-icons">work</span><span>job post</span></Link></li>
                 <li className='sidebar-menu'><Link to="/" className='sidebar-menu-link d-start'> <span className="material-icons">construction</span><span>tools</span></Link></li>
                 <li className='sidebar-menu'><Link to="/events" className='sidebar-menu-link d-start'> <span className="material-icons">calendar_month</span><span>events</span></Link></li>
                 <li className='sidebar-menu'><Link to="/" className='sidebar-menu-link d-start'> <span className="material-icons">record_voice_over</span><span>speakers</span></Link></li>
                 <li className='sidebar-menu'><Link to="/" className='sidebar-menu-link d-start'> <span className="material-icons">factory</span><span>industrial visit</span></Link></li>
                 <li className='sidebar-menu'><Link to="/" className='sidebar-menu-link d-start'> <span className="material-icons">summarize</span><span>reports</span></Link></li>
                 <li className='sidebar-menu'><Link to="/" className='sidebar-menu-link d-start'> <span className="material-icons">settings</span><span>settings</span></Link></li>

               </ul> */}
               <ul className='sidebar-menus'>
            <li className="sidebar-menu">
                <Link to="/" onClick={() => handleMenuClick("home")} className={`sidebar-menu-link d-start ${activeMenu === "home" ? "sidebar-menu-active" : ""}`}>
                    <span className="material-icons">home</span>
                    <span>Home page</span>
                </Link>
            </li>
            <li className="sidebar-menu">
                <Link to="#" onClick={() => handleMenuClick("subUser")} className={`sidebar-menu-link d-start ${activeMenu === "subUser" ? "sidebar-menu-active" : ""}`}>
                    <span className="material-icons">person</span>
                    <span>sub user creation</span>
                </Link>
                <ul className='sub-menu-cont'>
                    <li className="sub-menu">
                        <Link to="/" onClick={() => handleMenuClick("createJobPost")} className={`submenu-link d-start ${activeMenu === "createJobPost" ? "submenu-link-active" : ""}`}>
                            create job post
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="sidebar-menu">
                <Link to="/jobdetails" onClick={() => handleMenuClick("jobDetails")} className={`sidebar-menu-link d-start ${activeMenu === "jobDetails" ? "sidebar-menu-active" : ""}`}>
                    <span className="material-icons">work</span>
                    <span>job post</span>
                </Link>
            </li>
            <li className="sidebar-menu">
                <Link to="/" onClick={() => handleMenuClick("tools")} className={`sidebar-menu-link d-start ${activeMenu === "tools" ? "sidebar-menu-active" : ""}`}>
                    <span className="material-icons">construction</span>
                    <span>tools</span>
                </Link>
            </li>
            <li className="sidebar-menu">
                <Link to="/events" onClick={() => handleMenuClick("events")} className={`sidebar-menu-link d-start ${activeMenu === "events" ? "sidebar-menu-active" : ""}`}>
                    <span className="material-icons">calendar_month</span>
                    <span>events</span>
                </Link>
            </li>
            <li className="sidebar-menu">
                <Link to="/" onClick={() => handleMenuClick("speakers")} className={`sidebar-menu-link d-start ${activeMenu === "speakers" ? "sidebar-menu-active" : ""}`}>
                    <span className="material-icons">record_voice_over</span>
                    <span>speakers</span>
                </Link>
            </li>
            <li className="sidebar-menu">
                <Link to="/" onClick={() => handleMenuClick("industrialVisit")} className={`sidebar-menu-link d-start ${activeMenu === "industrialVisit" ? "sidebar-menu-active" : ""}`}>
                    <span className="material-icons">factory</span>
                    <span>industrial visit</span>
                </Link>
            </li>
            <li className="sidebar-menu">
                <Link to="/" onClick={() => handleMenuClick("reports")} className={`sidebar-menu-link d-start ${activeMenu === "reports" ? "sidebar-menu-active" : ""}`}>
                    <span className="material-icons">summarize</span>
                    <span>reports</span>
                </Link>
            </li>
            <li className="sidebar-menu">
                <Link to="/" onClick={() => handleMenuClick("settings")} className={`sidebar-menu-link d-start ${activeMenu === "settings" ? "sidebar-menu-active" : ""}`}>
                    <span className="material-icons">settings</span>
                    <span>settings</span>
                </Link>
            </li>
        </ul>
              
            </aside>
            
  )
}

export default Aside
