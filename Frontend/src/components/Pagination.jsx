
import React from 'react';

function Pagination({ currentPage, totalPages, onNextPage, onPrevPage }) {
  return (
    <div className="flex justify-center mt-5">
      <button onClick={onPrevPage} disabled={currentPage === 1} className="mr-3 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none">Previous</button>
      <span className="text-gray-700">{currentPage} / {totalPages}</span>
      <button onClick={onNextPage} disabled={currentPage === totalPages} className="ml-3 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none">Next</button>
    </div>
  );
}

export default Pagination;


