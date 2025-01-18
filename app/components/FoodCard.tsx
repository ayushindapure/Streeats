import { Author, Recommendations } from '@/sanity.types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { auth } from '@/auth';

export type FoodCardType = Omit<Recommendations, "author"> & { author?: Author }; 

const FoodCard = async ({ post } : { post: FoodCardType }) => {
    const { views, author, shop_name, category, _id, image, description, pitch  } = post;

  // const session = await auth();
  // console.log("My session ID in Food Card: ",session._id);


      return (
          <li className="p-2 md:w-1/3">
            <div className="h-full border-2 p-5 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.15)] border-gray-200 border-opacity-40 rounded-xl overflow-hidden">
              {/* Avatar and Header */}
              <div className="flex items-center py-2">
              <Link href={`/user/${post.author?._id}`}>
                <img
                  className="inline-block size-[40px] rounded-full"
                  src={post.author?.image || 'https://via.placeholder.com/40'}
                  alt="Avatar"
                />
              </Link>

                <h2 className="ml-2">{post.author?.name}</h2>
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  {/* {post.updatedAt || 'Yesterday'} */}
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  {post.views || '1.2K'}
                </span>
              </div>
    
              {/* Main Image */}
              <Link href={`/recommendations/${post?._id}`}>
                <img
                  className="rounded-lg lg:h-48 md:h-36 py-2 w-full object-cover object-center"
                  src={post.image || 'https://via.placeholder.com/721x401'}
                  alt="blog"
                />
              </Link>
    
              {/* Card Body */}
              <div className="py-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {post.category?.toLocaleLowerCase() || 'CATEGORY'}
                </h2>
                <div className="flex justify-between items-center">
                

                <Link href={`/recommendations/${post?._id}`}>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {post.shop_name || 'The 400 Blows'}
                  </h1>
                </Link>





                  <h1 className="title-font text-lg font-medium text-green-500 mb-3">
                    ₹{'20'}
                  </h1>
                </div>
                <p className="leading-relaxed mb-3">
                  {post.description || 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'}
                </p>
    
                {/* Footer */}
                <div className="flex items-center flex-wrap">
                  <Link className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0" href={`/location/${post.address || 'default-location'}`}>
                    <p >
                      {post.address || 'Camp, Pune'}
                      
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </li>
      );
    };
    
    export default FoodCard;
    