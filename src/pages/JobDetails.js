
// css
import '../css/jobdetails.css'

// components
import Aside from '../layout/Aside'; 
import Header from '../layout/Header';
import React, { useState } from 'react';

function JobDetails() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {/* body wrapper  */}
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

              <section className="page-content container-bg" style={{ padding:"20px 0px" }}>
                {/* page title start */}
                <div
                  className="page-head-cont "
                  style={{ justifyContent: "center" }}
                >
                  <div className="page-title">
                    <h2>job details</h2>
                  </div>
                </div>
                {/* page title end */}

                {/* job details start */}
                <section className="job-details-container">
                  <div className="job-detail-box">
                    <h3>Job Type</h3>
                    <p>Freasher</p>
                  </div>
                  <div className="job-detail-box">
                    <h3>Job Sub Type</h3>
                    <p>Internships</p>
                  </div>
                  <div className="job-detail-box">
                    <h3>Select Department</h3>
                    <p>BCOM</p>
                  </div>
                  <div className="job-detail-box">
                    <h3>Internship Position</h3>
                    <p>Designer</p>
                  </div>

                  <div className="job-detail-box">
                    <h3>No Of Vacancy</h3>
                    <p>02</p>
                  </div>

                  <div className="job-detail-box">
                    <h3>Qualification for Internship</h3>
                    <p>BCOM</p>
                  </div>

                  <div className="job-detail-box">
                    <h3>Duration of Internship in weeks</h3>
                    <p>8 Weeks</p>
                  </div>

                  <div className="job-detail-box">
                    <h3>Stipend</h3>
                    <p>Yes</p>
                  </div>
                </section>
                {/* job details end */}
                <div className='statement-cont'>
                    <h3>Learning Outcome</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco"</p>
                </div>

                {/* job details start */}
                <section className="job-details-container">
                  <div className="job-detail-box">
                    <h3>Job Work Type</h3>
                    <p>Full Time</p>
                  </div>
                  <div className="job-detail-box">
                    <h3>Year of passed out</h3>
                    <p>2018</p>
                  </div>
                  <div className="job-detail-box">
                    <h3>Working time</h3>
                    <p>Mon - Fri (6.00AM - 4.00PM)</p>
                  </div>
                  <div className="job-detail-box">
                    <h3>Type of Internship </h3>
                    <p>Offline</p>
                  </div>
                  
                </section>
                {/* job details end */}

                {/* two grid section */}
                <div className='grid-two-cont'>
                    <div className='job-detail-box'>
                    <h3>Pre placement offer/ Offer Intent Letter applicable? </h3>
                    <p>Yes</p>
                    </div>

                    <div className='job-detail-box'>
                    <h3>Pre placement offer/ Offer Intent Letter applicable? </h3>
                    <p>Yes</p>
                    </div>

                    <div className='job-detail-box'>
                    <h3>Pre placement offer/ Offer Intent Letter applicable? </h3>
                    <p>Yes</p>
                    </div>
                </div>
                <p className='job-post-alert'>"This job post valid for 90 days only. After this period the post will be automatically expired"</p>
              
              <section className='qus-ans-cont'>
                {/* page title start */}
                <div
                  className="page-head-cont "
                  style={{ justifyContent: "start" , marginLeft:"10px"}}
                >
                  <div className="page-title">
                    <h2>MCQ / One word Answer</h2>
                  </div>
                </div>
                {/* page title end */}
                {/* two grid section */}
                <div className='grid-two-qus'>
                    <div className='job-detail-box'>
                    <h3>What is MS Word ?</h3>
                    </div>

                    <div className='job-detail-box'>
                    <h3>What is MS Word ?</h3>
                    </div>

                </div>
              {/* job details start */}
              <section className="job-ans-container" style={{ paddingTop:"0px" }}>
                 
                  <div className="job-detail-box">
                    <p>A) Word Processing</p>
                  </div>
                  <div className="job-detail-box">
                  <p>B) Word Processing</p>

                  </div>
                  <div className="job-detail-box">
                  <p>A) Word Processing</p>

                  </div>
                  <div className="job-detail-box">
                  <p>B) Word Processing</p>

                  </div>
                  
                  <div className="job-detail-box">
                    <p>C) Spreadsheet</p>
                  </div>
                  <div className="job-detail-box">
                  <p>D) none</p>

                  </div>
                  <div className="job-detail-box">
                  <p>C)Spreadsheet</p>

                  </div>
                  <div className="job-detail-box">
                  <p>D) none</p>

                  </div>
                  
                </section>
                {/* job details end */}

              </section>
              
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

export default JobDetails
