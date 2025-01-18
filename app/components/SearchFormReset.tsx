"use client"

import Link from "next/link"

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if(form){
            form.reset();
        }
    }
    return (
    <div>
        <button type='reset' onClick={reset}>
            <Link href="/" className="search-btn size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-neutral-950 text-white hover:bg-neutral-950 focus:outline-none focus:bg-neutral-950 disabled:opacity-50 disabled:pointer-events-none">
                X
            </Link>
        </button>
    </div>
  )
}

export default SearchFormReset