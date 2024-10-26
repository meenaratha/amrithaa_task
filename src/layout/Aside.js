import React from 'react'
import logo from '../images/logo.png'; 
import { Link } from 'react-router-dom';


function Aside({ isSidebarOpen,toggleSidebar }) {
  return (
    <aside  className={`sidebar-cont container-bg ${isSidebarOpen ? 'sidebar-active' : ''}`}>
              <button type="" className='sidebar-close-btn d-center'  onClick={() => toggleSidebar(false)}  id='sidebar-close-btn'><span class="material-icons icon">close</span></button>
               <div className='sidebar-logo'>
                 <Link rel="" type="" to="/"><img src={logo} alt="" /></Link>
               </div>
               <ul className='sidebar-menus'>
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

               </ul>
              
            </aside>
            
  )
}

export default Aside
