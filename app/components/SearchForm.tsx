import React from 'react'
import SearchFormReset from './SearchFormReset';

const SearchForm = ({query}: {query?: string}) => {
  return (
    <div>
        <form action="/" className='search-form'>
          <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-neutral-300">
            <div className="w-full">
              <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium"><span className="sr-only">Search article</span></label>
              <input type="text" defaultValue={query} name="query" id="hs-search-article-1" className="search-input py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-orange-500 focus:ring-orange-500" placeholder="Search Food Stalls Near You" />
            </div>
            <div>
            <div className="flex items-center gap-x-2">
            {/* Submit Button */}
            <button
              type="submit"
              className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                className="shrink-0 size-5"
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
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            {/* Reset Button */}
            {query && <SearchFormReset />}
          </div>
            </div>
          </div>
        </form>
    </div>
  )
}

export default SearchForm