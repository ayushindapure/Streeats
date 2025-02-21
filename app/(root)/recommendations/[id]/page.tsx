// /recommendations/[id]/page.tsx
// import { auth } from '@/auth';
import Skeleton from '@/app/components/Skeleton';
import View from '@/app/components/View';
import { client } from '@/sanity/lib/client';
import { RECOMMENDATION_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { Suspense } from 'react';

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const [post] = await Promise.all([
    client.fetch(RECOMMENDATION_BY_ID_QUERY, { id }),
  ]);

  if (!post) return notFound();

    return (
        <div>
            {/* <h1 className="text-3xl">This is a food card name: {post.shop_name}</h1> */}

<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
  <div className="max-w-3xl">

    <div className="flex justify-between items-center mb-6">
      <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
        <div className="shrink-0">

        <Link href={`/user/${post.author?._id}`}>
        <img 
  className="size-12 rounded-full" 
  src={post.author?.image || ''}  // fallback to empty string if null or undefined
  alt="Avatar" 
/>
</Link>

        </div>

        <div className="grow">
          <div className="flex justify-between items-center gap-x-2">
            <div>

              <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                <Link href={`/user/${post.author?._id}`}>
                  <span className="font-semibold text-gray-800">
                    {post.author?.name}
                  </span>
                </Link>


                  <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl" role="tooltip">

                    <div className="p-4 sm:p-5">
                      <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                        <div className="shrink-0">
                          <img className="size-8 rounded-full" src="{https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80}" alt="Avatar" />
                        </div>

                        <div className="grow">
                          <p className="text-lg font-semibold text-gray-200">
                            Leyla Ludic
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.
                      </p>
                    </div>



                    <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                      <ul className="text-xs space-x-3">
                        <li className="inline-block">
                          <span className="font-semibold text-gray-200">56</span>
                          <span className="text-gray-400">articles</span>
                        </li>
                        <li className="inline-block">
                          <span className="font-semibold text-gray-200">1k+</span>
                          <span className="text-gray-400">followers</span>
                        </li>
                      </ul>

                      <div>
                        <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                          Follow
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>


              <ul className="text-xs text-gray-500">
                <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                  {post.author?.username}
                </li>
                <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                  5 min read
                </li>
              </ul>
            </div>


            <div>
              <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                Tweet
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>



    <div className="space-y-5 md:space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold md:text-3xl">{post.shop_name}</h2>

        <p className="text-lg text-gray-800">
            {post.description}
        </p>
      
      </div>
      <figure>
        <img width={80} height={80} className="w-full object-cover rounded-xl" src={post.image || ""} alt="Blog Image" />
      </figure>

      

      
     

      

      

      <p className="text-lg text-gray-800"> {post.pitch}</p>

      <div>
        <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">
          #StreetFood
        </a>
        <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">
          #Cafe
        </a>
        <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">
          #Wadapav
        </a>
        <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">
          #Tasty
        </a>
      </div>

    </div>

  </div>
</div>


        <Suspense fallback={<Skeleton />}>
            <View id={id} />
        </Suspense>
        

        </div>
    );
};


export default page;
