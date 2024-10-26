// components
import Aside from '../layout/Aside'; 
import Header from '../layout/Header';
import PageTittle from '../layout/PageTittle';
import JobListItems from '../layout/JobListItems';
import React, { useState } from 'react';

function Home() {

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

              <section className="page-content container-bg">
                {/* page title start */}
                <PageTittle />
                {/* page title end */}

                {/* job list items start */}
                <JobListItems />
                {/* job list items end */}
              </section>
            </main>
            {/* main content end */}
          </section>
        </div>
      </div>
      {/* body wrapper end */}
    </div>
  )
}

export default Home
