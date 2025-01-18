"use client"
import React, { useState } from 'react';

const Alert = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      id="dismiss-alert"
      className="transition fixed top-16 right-5 duration-300 bg-red-50 border border-red-200 text-sm text-red-800 rounded-lg p-4"
      role="alert"
      tabIndex={-1}
    >
      <div className="flex">
        <div className="shrink-0">
          <svg
            className="shrink-0 size-4 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <div className="ms-2">
          <h3 className="text-sm font-medium">This content does'nt exist</h3>
        </div>
        <div className="ps-3 ms-auto">
          <button
            type="button"
            className="inline-flex bg-red-50 rounded-lg p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:bg-red-100"
            onClick={() => setVisible(false)}
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
