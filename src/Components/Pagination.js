import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";

export default function PaginationList({ totalPages, activePage, handlePageChange  }) {
  const pages = Array.from(
    { 
      length: totalPages
    }, 
    (_, index) => index + 1);

  return (
    <div className="App">
      <Pagination className="px-4">
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            onClick={() => handlePageChange(page)}
            active={page === activePage}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};