import RecommendationForm from '@/app/components/RecommendationForm';
import RecommendationFormTesting from '@/app/components/RecommendationFormTesting';
import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
    
    // const session = await auth();
    // console.log(session.id);

    // if(!session){
    //     redirect("/")
    // }

  return (
    <>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">

    <div className="flex justify-center">
      <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600" href="#">
        PRO release - Join to waitlist
        <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-orange-500 font-semibold text-sm text-black dark:bg-neutral-700 dark:text-neutral-400">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </a>
    </div>



    <div className="mt-5 max-w-2xl text-center mx-auto">
      <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
        Underrated food? Let’s make it 
        <span className="bg-clip-text bg-gradient-to-tl from-red-400 to-orange-600 text-transparent"> famous! </span>
      </h1>
    </div>


    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-lg text-gray-600 dark:text-neutral-400">Think your favourite street food is underrated? <span className='text-black'> Prove it! </span> why keep it to yourself when you can spread it around and make it even more exciting?</p>
    </div>
    
  </div>

    <RecommendationForm/>
    

    </>
  ) 
}

export default page