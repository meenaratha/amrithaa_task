import React, { useState, useEffect } from 'react';

function EventTable({searchTerm}) {
  const [candidates, setCandidates] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/candidates.json');
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
          console.error('Error fetching candidate data:', error);
      }
  };
    fetchData();
  }, []);

  const filteredCandidates = candidates.filter(candidate => {
    return (
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.candidateId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (candidate.rank && candidate.rank.toString().includes(searchTerm)) ||
        (candidate.mark && candidate.mark.toString().includes(searchTerm)) ||
        (candidate.date && candidate.date.includes(searchTerm))  // Assuming date is a string like 'YYYY-MM-DD'
    );
});


  const indexOfLastCandidate = currentPage * itemsPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - itemsPerPage;
  const currentCandidates = filteredCandidates.slice(indexOfFirstCandidate, indexOfLastCandidate);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCandidates.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const totalPageCount = pageNumbers.length;
    const currentPageNumber = currentPage;
    const maxPageNumbers = 3;
    
    // Determine if we need ellipses
    if (totalPageCount <= maxPageNumbers + 2) {
      return pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={currentPageNumber === number ? 'active pagination-btns' : 'pagination-btns'}
        >
          {number}
        </button>
      ));
    } else {
      // Pagination with ellipses
      let pageComponents = [];
      
      // First page and dots before the current range
      if (currentPageNumber > 3) {
        pageComponents.push(
          <button key={1} onClick={() => paginate(1)} className="pagination-btns">1</button>
        );
        pageComponents.push(<span key="left-dots" className="material-icons pagination-dots">more_horiz</span>);
      }

      // Add current page and neighbors
      const startPage = Math.max(2, currentPageNumber - 1);
      const endPage = Math.min(totalPageCount - 1, currentPageNumber + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageComponents.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={currentPageNumber === i ? 'active pagination-btns' : 'pagination-btns'}
          >
            {i}
          </button>
        );
      }

      // Last page and dots after the current range
      if (currentPageNumber < totalPageCount - 2) {
        pageComponents.push(<span key="right-dots" className=" material-icons pagination-dots">more_horiz</span>);
        pageComponents.push(
          <button key={totalPageCount} onClick={() => paginate(totalPageCount)} className="pagination-btns">
            {totalPageCount}
          </button>
        );
      }

      return pageComponents;
    }
  };

  return (
    <div className="eventtable-section">
      {/* <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      /> */}
      <table className="event-table">
        <thead>
          <tr >
            <th>Candidate ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Mark</th>
            <th>Rank</th>
            <th>Uploaded Files</th>
            <th>Uploaded Files</th>
            <th>
              <button type="" className="fav-btn">
                Add Favourites
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
        {/* <tr>
            <td>
              <input type="checkbox" className="checkbox" /> CAN001
            </td>
            <td className="table-names">
              <span
                className="material-icons"
                style={{ fontSize: "24px", color: "gold", marginRight: "10px" }}
              >
                star
              </span>
              Kalai
            </td>
            <td className="event-status">Participated</td>
            <td className="event-date">26/10/2024</td>
            <td className="mark">80</td>
            <td className="rank">01</td>
            <td className="pdf-btn-cont">
              <button type="" className="pdf-btn d-center">
                <span class="material-icons">description</span>View Uploaded
                File (.docx)
              </button>
              <button type="" className="mark-btn">
                Enter Mark
              </button>
            </td>

            <td className="">
              <div className="d-inline">
                <button type="" className="pdf-btn d-center">
                  <span class="material-icons">description</span>View Uploaded
                  File (.docx)
                </button>
                <p>60</p>
                <div className="d-squre-icon d-center">
                  <span class="material-icons">edit_document</span>
                </div>
              </div>
            </td>
            <td style={{ textAlign: "center" }}>
              <span class="material-icons">visibility</span>
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" className="checkbox" /> CAN001
            </td>
            <td className="table-names">
              <span
                className="material-icons"
                style={{ fontSize: "24px", color: "gold", marginRight: "10px" }}
              >
                star
              </span>
              Kalai
            </td>
            <td className="event-status">Participated</td>
            <td className="event-date">26/10/2024</td>
            <td className="mark">80</td>
            <td className="rank">01</td>
            <td className="pdf-btn-cont">
              <button type="" className="pdf-btn d-center">
                <span class="material-icons">description</span>View Uploaded
                File (.docx)
              </button>
              <button type="" className="mark-btn">
                Enter Mark
              </button>
            </td>

            <td className="">
              <div className="d-inline">
                <button type="" className="pdf-btn d-center">
                  <span class="material-icons">description</span>View Uploaded
                  File (.docx)
                </button>
                <button type="" className="mark-btn">
                  Enter Mark
                </button>
              </div>
            </td>
            <td style={{ textAlign: "center" }}>
              <span class="material-icons">visibility</span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" className="checkbox" /> CAN001
            </td>
            <td className="table-names">
              <span
                className="material-icons"
                style={{ fontSize: "24px", color: "gold", marginRight: "10px" }}
              >
                star
              </span>
              Kalai
            </td>
            <td className="event-status">Participated</td>
            <td className="event-date">26/10/2024</td>
            <td className="mark">80</td>
            <td className="rank">01</td>
            <td className="pdf-btn-cont">
              <button type="" className="pdf-btn d-center">
                <span class="material-icons">description</span>View Uploaded
                File (.docx)
              </button>
              <button type="" className="mark-btn">
                Enter Mark
              </button>
            </td>

            <td className="">
              <div className="d-inline">
                <button type="" className="pdf-btn d-center">
                  <span class="material-icons">description</span>View Uploaded
                  File (.docx)
                </button>
                <button type="" className="mark-btn">
                  Enter Mark
                </button>
              </div>
            </td>
            <td style={{ textAlign: "center" }}>
              <span class="material-icons">visibility</span>
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" className="checkbox" /> CAN001
            </td>
            <td className="table-names">
              <span
                className="material-icons"
                style={{ fontSize: "24px", color: "gold", marginRight: "10px" }}
              >
                star
              </span>
              Kalai
            </td>
            <td className="event-status">Participated</td>
            <td className="event-date">26/10/2024</td>
            <td className="mark">80</td>
            <td className="rank">01</td>
            <td className="">
              <div className="d-inline">
                <button type="" className="pdf-btn d-center">
                  <span class="material-icons">description</span>View Uploaded
                  File (.docx)
                </button>
                <p>60</p>
                <div className="d-squre-icon d-center">
                  <span class="material-icons">edit_document</span>
                </div>
              </div>
            </td>
            <td className="pdf-btn-cont">
              <button type="" className="pdf-btn d-center">
                <span class="material-icons">description</span>View Uploaded
                File (.docx)
              </button>
              <button type="" className="mark-btn">
                Enter Mark
              </button>
            </td>

            <td style={{ textAlign: "center" }}>
              <span class="material-icons">visibility</span>
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" className="checkbox" /> CAN001
            </td>
            <td className="table-names">
              <span
                className="material-icons"
                style={{ fontSize: "24px", color: "gold", marginRight: "10px" }}
              >
                star
              </span>
              Kalai
            </td>
            <td className="event-status">Participated</td>
            <td className="event-date">26/10/2024</td>
            <td className="mark">80</td>
            <td className="rank">01</td>
            <td className="">
              <div className="d-inline">
                <button type="" className="pdf-btn d-center">
                  <span class="material-icons">description</span>View Uploaded
                  File (.docx)
                </button>
                <p>60</p>
                <div className="d-squre-icon d-center">
                  <span class="material-icons">edit_document</span>
                </div>
              </div>
            </td>

            <td className="">
              <div className="d-inline">
                <button type="" className="pdf-btn d-center">
                  <span class="material-icons">description</span>View Uploaded
                  File (.docx)
                </button>
                <p>60</p>
                <div className="d-squre-icon d-center">
                  <span class="material-icons">edit_document</span>
                </div>
              </div>
            </td>

            <td style={{ textAlign: "center" }}>
              <span class="material-icons">visibility</span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" className="checkbox" /> CAN001
            </td>
            <td className="table-names">
              <span
                className="material-icons"
                style={{ fontSize: "24px", color: "gold", marginRight: "10px" }}
              >
                star
              </span>
              Kalai
            </td>
            <td className="event-status">Participated</td>
            <td className="event-date">26/10/2024</td>
            <td className="mark">80</td>
            <td className="rank">01</td>
            <td className="pdf-btn-cont">
              <button type="" className="pdf-btn d-center">
                <span class="material-icons">description</span>View Uploaded
                File (.docx)
              </button>
              <button type="" className="mark-btn">
                Enter Mark
              </button>
            </td>

            <td className="">
              <div className="d-inline">
                <button type="" className="pdf-btn d-center">
                  <span class="material-icons">description</span>View Uploaded
                  File (.docx)
                </button>
                <p>60</p>
                <div className="d-squre-icon d-center">
                  <span class="material-icons">edit_document</span>
                </div>
              </div>
            </td>
            <td style={{ textAlign: "center" }}>
              <span class="material-icons">visibility</span>
            </td>
          </tr> */}

          {currentCandidates.map((candidate, index) => (
            <tr key={index}>
              <td style={{ textWrap:"nowrap" }}>
                <input type="checkbox" className="checkbox" /> {candidate.candidateId}
              </td>
              <td className="table-names">
                <span className="material-icons" style={{ fontSize: "24px", color: "gold", marginRight: "10px" }}>
                  star
                </span>
                {candidate.name}
              </td>
              <td className="event-status">{candidate.status}</td>
              <td className="event-date">{candidate.date}</td>
              <td className="mark">{candidate.mark !== null ? candidate.mark : "N/A"}</td>
              <td className="rank">{candidate.rank !== null ? candidate.rank : "N/A"}</td>
              <td className="pdf-btn-cont">
              <button type="" className="pdf-btn d-center">
                <span class="material-icons">description</span>View Uploaded
                File (.docx)
              </button>
              <button type="" className="mark-btn">
                Enter Mark
              </button>
            </td>
            <td className="">
              <div className="d-inline">
                <button type="" className="pdf-btn d-center">
                  <span class="material-icons">description</span>View Uploaded
                  File (.docx)
                </button>
                <p>60</p>
                <div className="d-squre-icon d-center">
                  <span class="material-icons">edit_document</span>
                </div>
              </div>
            </td>
            <td style={{ textAlign: "center" }}>
              <span class="material-icons">visibility</span>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination event-pagination">
      {renderPageNumbers()}
      </div>
    </div>
  );
}

export default EventTable;
