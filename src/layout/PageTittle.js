import React from 'react'

function PageTittle() {
  return (
    <div className="page-head-cont">
      <div className="page-title">
        <h2>list job post</h2>
      </div>
      <div className="search-box-cont">
        <input type="search" name="" placeholder="Search" value="" />
        <span class="material-icons  search-icon">search</span>

        <button type="" className="create-post-btn">
          create job post
        </button>
      </div>
    </div>
  );
}

export default PageTittle
