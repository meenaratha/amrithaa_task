import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const JobListItems = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const menuRefs = useRef([]);
  const menuContainerRef = useRef(null);

  const toggleMenu = (index) => {
    if (activeMenuIndex === index) {
      setActiveMenuIndex(null); // Close if the same menu is clicked
    } else {
      setActiveMenuIndex(index); // Open the selected menu
    }
  };

  const handleClickOutside = (event) => {
    if (menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
      setActiveMenuIndex(null); // Hide menu if clicked outside
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const jobPosts = [
    { id: 1, title: 'UX Design' },
    { id: 2, title: 'Web Development' },
    { id: 3, title: 'Data Analysis' },
    { id: 4, title: 'Ner Analysis' },
    { id: 5, title: 'Cyber Security' },
    { id: 6, title: 'chemistry' },

    // Add more job posts as needed
  ];

  return (
    <div ref={menuContainerRef} className='grid-container'>
      {jobPosts.map((job, index) => (
        <div className="grid-item job-post-item" key={job.id}>
          <div className="box-item-top-nav d-corner">
            <h3 className="box-item-sub-head d-center">
              {/* SVG Icon Here */}
              <svg style={{ marginRight:"15px" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="#1DA1F2">
    <path d="M23.953 4.57c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.57 2.165-2.723-.95.56-2.003.977-3.127 1.195-.895-.955-2.167-1.55-3.595-1.55-2.72 0-4.927 2.207-4.927 4.927 0 .387.044.765.127 1.126-4.092-.205-7.72-2.164-10.148-5.144-.426.731-.666 1.577-.666 2.476 0 1.71.869 3.213 2.188 4.096-.806-.025-1.564-.247-2.229-.616v.062c0 2.392 1.698 4.39 3.946 4.843-.414.112-.848.171-1.296.171-.316 0-.624-.031-.928-.086.629 1.963 2.445 3.391 4.6 3.429-1.684 1.319-3.808 2.107-6.096 2.107-.396 0-.787-.023-1.176-.067 2.176 1.393 4.768 2.207 7.548 2.207 9.056 0 14.002-7.498 14.002-13.986 0-.213 0-.426-.015-.639.961-.693 1.8-1.56 2.463-2.548z"/>
</svg>

              {job.title}
            </h3>
            <div className="actions-cont">
              <button
                className="more-action-btn d-center"
                onClick={() => toggleMenu(index)}
              >
                <span className="material-icons">more_vert</span>
              </button>
              <ul className={`action-menus-cont ${activeMenuIndex === index ? 'active' : ''}`} ref={el => menuRefs.current[index] = el}>
                <li className="action-menu">
                  <a href="#" className="action-menu-link d-start">
                    <span className="material-icons">group</span>Candidate list
                  </a>
                </li>
                <li className="action-menu">
                  <Link to="/jobdetails" className="action-menu-link d-start">
                    <span className="material-icons">visibility</span>View Post
                  </Link>
                </li>
                <li className="action-menu">
                  <a href="#" className="action-menu-link d-start">
                    <span className="material-icons">edit_document</span>Edit
                  </a>
                </li>
                <li className="action-menu">
                  <a href="#" className="action-menu-link d-start">
                    <span className="material-icons">delete</span>Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h2>{job.title}</h2>
          <div className="item-detail-cont">
            <span className="boxitem-detail-item">full time</span>
            <span className="boxitem-detail-item">no vacancy: 100</span>
            <span className="boxitem-detail-item">15,000 monthly</span>
            <span className="boxitem-detail-item">BCOM, MBA, BCA</span>
          </div>
          {/* Job description */}
          <div className="job-description-cont">
            <h3>Job Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="short-notes-cont">
            <h3>No of Candidate: 90</h3>
            <div className="item-detail-cont">
              <span className="boxitem-detail-item navi-btn">full time</span>
              <span className="boxitem-detail-item skyblue-btn">no vacancy: 100</span>
              <span className="boxitem-detail-item red-btn">15,000 monthly</span>
              <span className="boxitem-detail-item green-btn">BCOM, MBA, BCA</span>
              <span className="boxitem-detail-item blue-btn">BCOM, MBA, BCA</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobListItems;
