import Image from "next/image";
import SearchForm from "../components/SearchForm";
import FoodCard, { FoodCardType } from "../components/FoodCard";
// import { FoodCardType } from "../components/FoodCard";

import { RECOMMENDATION_QUERY } from "@/sanity/lib/queries";
import sanityCli from "@/sanity.cli";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { auth } from "@/auth";
import AnimatedTextUnderlign from "../components/AnimatedTextUnderlign";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {


  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();
  if(session){
    // console.log(session);
    // console.log("Session id:",session.id); // Correct
  }
  
  // const posts = await client.fetch(RECOMMENDATION_QUERY);
  const { data : posts } = await sanityFetch({query: RECOMMENDATION_QUERY, params}) 
  
  return (
    <div>
      <section>
<div className="relative overflow-hidden">
  <div className="max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-10">
    <div className="text-center">
        <p className="text-xs font-semibold text-neutral-950  uppercase mb-3">
          Vocal For Local
        </p>
      <AnimatedTextUnderlign/>
        {/* <h1 className="text-3xl md:px-20 sm:px-2 text-gray-800 font-bold  sm:text-5xl lg:text-6xl lg:leading-tight">
          Craving the Tastiest Street Food near you? <span className="text-orange-500">We’ve Got It!</span>
        </h1> */}
      

      <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
        <SearchForm query={query} />

        <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
          <svg className="w-16 h-auto text-violet-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
            <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
            <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
          <svg className="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <div className="mt-10 sm:mt-20">
        
        <a className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            Stalls
        </a>
        
        <a className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>
            Foodtrucks
        </a>
        <a className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
</svg>

            Cafes
        </a>
        <a className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun-snow size-4"><path d="M10 21v-1"/><path d="M10 4V3"/><path d="M10 9a3 3 0 0 0 0 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6 1.5-3H22"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h1"/><path d="m20 10-1.5 2 1.5 2"/><path d="m3.64 18.36.7-.7"/><path d="m4.34 6.34-.7-.7"/></svg>
            Open-Air
        </a>
        <a className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
          {/* <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
</svg>

            Cloud-Kitchen
        </a>
      </div>
    </div>
  </div>
</div>
      </section>

      {/* Page - 2 */}
      <section className="mx-auto px-3 sm:p-8">
          <h2 className="text-2xl py-8 font-bold text-neutral-700">
            {query ? `Search results for "${query}"` : '🔥 Trending Street Food'}
          </h2>

          <ul className="flex flex-wrap gap-y-4">
  {Array.isArray(posts) && posts.length > 0 ? (
    posts.map((post) => (
      <FoodCard key={post._id} post={post as unknown as FoodCardType} />
    ))
  ) : (
    <li className="no-results">
      <p>Oops! No results found</p>
    </li>
  )}
</ul>



      </section>

    <SanityLive/>
    </div>
  );
}
