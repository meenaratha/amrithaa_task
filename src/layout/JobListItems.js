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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
