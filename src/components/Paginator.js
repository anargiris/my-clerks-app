import React from "react";

const Paginator = ({ page, setPage, loading }) => {
  return (
    <div className="flex gap-10 justify-center items-center mx-4">
      <button
        type="button"
        disabled={loading || page === 1}
        onClick={() => setPage(page - 1)}
        className={`${
          page === 1
            ? "bg-gray-900 text-gray-800 hover:bg-gray-900"
            : "bg-cyan-600 hover:bg-cyan-500"
        } text-cyan-100 px-4 py-2 text-sm rounded-md whitespace-nowrap w-32`}
      >
        Previous Page
      </button>
      <button
        type="button"
        disabled={loading || page === 10}
        onClick={() => setPage(page + 1)}
        className={`${
          page === 10
            ? "bg-gray-900 text-gray-800 hover:bg-gray-900"
            : "bg-cyan-600 hover:bg-cyan-500"
        } text-cyan-100 px-4 py-2 text-sm rounded-md whitespace-nowrap w-32`}
      >
        Next Page
      </button>
    </div>
  );
};

export default Paginator;
