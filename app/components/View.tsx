import React from 'react'
import Ping from './Ping';
import { client } from '@/sanity/lib/client';
import { FOODCARD_VIEWS_QUERY } from '@/sanity/lib/queries';
import { writeClient } from '@/sanity/lib/write-client';
import { after } from 'next/server';
// import { writeClient } from "@/sanity/lib/write-client";
// import { unstable_after as after } from "next/server";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(FOODCARD_VIEWS_QUERY, { id });

    after( async() => await writeClient
        .patch(id)
        .set({ views: totalViews+1 })
        .commit()
        // console.log(session.id());
        // Fetched user cuurent Location
        // Geolocation.getCurrentPosition(): 
        
        // Updates the location of user in realtime
        // Geolocation.watchPosition():
    );


  return (
    <>
      <div className="sticky bottom-2 text-center md:fixed md:bottom-6 md:right-6 md:text-center">
        <div className="inline-block border-green-500 bg-green-00 shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
          <div className='absolute -top-1 -right-1'>
            <Ping />
          </div>
          <div className="flex items-center gap-x-1.5">
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-blog-article-share-dropdown"
                type="button"
                className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
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
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" x2="12" y1="2" y2="15" />
                </svg>
                Share
              </button>
              <div
                className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-neutral-950"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-blog-article-share-dropdown"
              >
                {/* Share links */}
              </div>
            </div>

            <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

            <div className="hs-tooltip inline-block">
              <button
                type="button"
                className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                <svg
                  className="w-4 h-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                {totalViews} {/* Uncommented to show the total views */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
