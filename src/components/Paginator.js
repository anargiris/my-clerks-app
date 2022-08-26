import React from "react";

const Paginator = ({ page, setPage }) => {
  return (
    <div className="flex gap-10 justify-center items-center mx-4">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={`${
          page === 1 ? "bg-gray-800 text-gray-800" : "bg-cyan-700"
        } text-cyan-100 px-4 py-2 text-sm rounded-md whitespace-nowrap w-32`}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => setPage(page + 1)}
        className="bg-cyan-700 text-cyan-100 px-4 py-2 text-sm rounded-md whitespace-nowrap w-32"
      >
        Next Page
      </button>
    </div>
  );
};

export default Paginator;
