import React, { useState, useEffect } from 'react';

function EventTable() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('/candidates.json'); // Adjust the path if necessary
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error('Error fetching candidate data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="eventtable-section">
      <table className="event-table">
        <thead>
          <tr>
            <th>Candidate ID </th>
            <th>Name </th>
            <th>Status</th>
            <th>Date</th>
            <th>Mark </th>
            <th>Rank </th>
            <th>What is MS Word? </th>
            <th>What is MS Word? </th>
            <th>
              <button type="" className="fav-btn">
                Add Favourites
              </button>{" "}
            </th>
          </tr>
        </thead>
        <tbody>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EventTable
