
// style
import '../css/Event.css'
// components
import Aside from '../layout/Aside'; 
import Header from '../layout/Header';
import EventTable from '../layout/EventTable';
import React, { useState } from 'react';
function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {/* body wrapper */}
      <div className="body-wrapper">
      <div className={`overlay ${isSidebarOpen ? 'overlay-active' : ''}`}></div>
        <div className="container">
          {/* main content start */}
          <section className="layout-wrapper">
            {/* sidebar start */}
            <Aside isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
            {/* sidebar end */}

            {/* main content start */}
            <main className="right-content">
              {/* header start */}
              <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
              {/* header end */}

              <section
                className="page-content container-bg"
                style={{ padding: "20px 10px" }}
              >
                {/* page title start */}
                <div className="page-head-cont" style={{ marginLeft: "10px" }}>
                  <div className="page-title">
                    <h2>Candidate Submission</h2>
                  </div>
                  <div className="search-box-cont" >
                  <input type="search" name="" placeholder="Search" value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)} />
                  <span class="material-icons  search-icon">search</span>
                  <div className='d-center' >
                  <button type="" className="create-post-btn" style={{ marginRight:"10px" }}>
                      Publish Result
                    </button>
                    <div className="icon-bg d-center">
                      <span class="material-icons ">keyboard_arrow_down</span>
                    </div>
                  </div>
                    
                  </div>
                </div>
                {/* page title end */}

                {/* Events table start */}
                <EventTable  searchTerm={searchTerm}/>
                {/* Events table end */}
              </section>
            </main>
            {/* main content end */}
          </section>
        </div>
      </div>
      {/* body wrapper end */}
    </div>
  );
}

export default Events
