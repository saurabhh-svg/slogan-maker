import ReactTooltip from "react-tooltip";
import { Divider } from "../../common/divider/Divider";
import { useState } from "react";
import "./sloganList.css";

const SloganList = ({ slogans, search = "" }) => {
  const [limit, setLimit] = useState(18);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPageClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPageClick = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(slogans.length / limit))
    );
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * limit;
  const displayedSlogans = slogans.slice(startIndex, startIndex + limit);

  return (
    <div>
      <div className="slogans-header">
        <p className="form-para">
          We've generated {slogans.length} slogans{" "}
          {search.length ? `for ${search}` : ""}
        </p>
        <button className="btn-secondary">Download all</button>
      </div>
      <div
        className="slogan-items"
        onClick={(e) => {
          navigator.clipboard.writeText(e.target.innerText);
        }}
      >
        <ReactTooltip place="left" type="dark" effect="solid" />
        {displayedSlogans.map((slogan) => {
          return (
            <p key={slogan.id} className="slogan-item" data-tip="Click to copy">
              {slogan.slogan}
            </p>
          );
        })}
      </div>

      <Divider />

      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={handlePrevPageClick}
          disabled={currentPage === 1}
        >
          {currentPage !== 1 ? "< Prev" : ""}
        </button>

        <div className="pagination-numbers">
          {Array.from({ length: Math.ceil(slogans.length / limit) }, (_, i) => {
            const pageNumber = i + 1;
            return (
              <button
                key={pageNumber}
                className={`pagination-btn ${
                  pageNumber === currentPage ? "active" : ""
                }`}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        <button
          className="pagination-btn"
          onClick={handleNextPageClick}
          disabled={currentPage === Math.ceil(slogans.length / limit)}
        >
          {currentPage !== Math.ceil(slogans.length / limit) ? "Next >" : ""}
        </button>
      </div>
    </div>
  );
};

export default SloganList;
