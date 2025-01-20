import UserRecommendations from '@/app/components/UserRecommendations';
import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import { Code, FileUser, Mail, User, UserPen } from 'lucide-react';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'
// import { experimental_ppr } from '../../recommendations/[id]/page';

export const experimental_ppr = true;

const page = async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, {id});
  if(!user){
    return notFound();
  }
  return (
    <>
    {/* <section>
<div className="flex items-center gap-x-3">
  <div className="shrink-0">
    <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" /> 
  </div>

  <div className="grow">
    <h1 className="text-lg font-medium text-gray-800">
      {user.name}
    </h1>
    <p className="text-sm text-gray-600">
      Graphic Designer, Web designer/developer
    </p>
  </div>
</div>

<div className="mt-8">
  <p className="text-sm text-gray-600">
    I am a seasoned graphic designer with over 14 years of experience in creating visually appealing and user-centric designs. My expertise spans across UI design, design systems, and custom illustrations, helping clients bring their digital visions to life.
  </p>

  <p className="mt-3 text-sm text-gray-600">
    Currently, I work remotely for Notion, where I design template UIs, convert them into HTML and CSS, and provide comprehensive support to our users. I am passionate about crafting elegant and functional designs that enhance user experiences.
  </p>

  <ul className="mt-5 flex flex-col gap-y-3">
    <li className="flex items-center gap-x-2.5">
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2" href="#">
        elianagarcia997@about.me
      </a>
    </li>

    <li className="flex items-center gap-x-2.5">
      <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z" fill="currentColor"/></svg>
      <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2" href="#">
        @elianagarcia997
      </a>
    </li>

    <li className="flex items-center gap-x-2.5">
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>
      <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2" href="#">
        @elianagarcia997
      </a>
    </li>
  </ul>
</div>
    </section> */}

    <section className='p-8 sm:p-10'>
    <div className="relative rounded-xl overflow-hidden flex flex-col items-center shadow-lg bg-white font-Roboto-light">
      <div className="h-24 w-full bg-neutral-900" />
      <div className="top-16 z-10 flex items-center flex-col gap-4 px-5 py-5">
        <div className="-mt-20">
          <img src={user.image} height={200} width={200} className='rounded-full' alt="profile image" />
        </div>
        <div className="flex items-center flex-col">
          <p title="name/نام" className="text-black text-3xl pb-5 font-bold">{user.name}</p>
          <div className='flex items-center gap-x-2'>
            <User className='size-4'></User> <p title="name/نام" className="text-black ">{user.username}</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Mail className='size-4'></Mail> <p title="name/نام" className="text-black ">{user.email}</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Code className='size-4'></Code> <p title="name/نام" className="text-black ">GitHub</p>
          </div>
          <p title="bio/بیوگرافی" className="text-xs text-gray-500 font-medium pt-5 px-5 sm:px-52 text-center">
            {user.bio}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-neutral-900 transition-all gradient text-[15px] text-white px-3 py-[6px] rounded-full flex items-center gap-1">
            Followed
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </button>
          <button  className="bg-gray-200/65 hover:bg-gray-200 transition-colors p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    </section>

    <section>
    <div className='sm:p-8 p-4'>
      <h2 className='font-bold px-3 sm:text-3xl text-2xl '> {session?.id === id ? "Your Recommendations" : `Recommendations by ${user.name}`} </h2>
      <ul>
        <Suspense fallback={<p>Loading</p>}>
          <UserRecommendations id={id} />
        </Suspense>
      </ul>
    </div>
    </section>

    </>
  )
}

export default page