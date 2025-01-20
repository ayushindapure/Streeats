import { Author, Recommendations } from '@/sanity.types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { auth } from '@/auth';
import { HandPlatter, HandPlatterIcon, Locate, Map, MapIcon, MapPin, MapPinHouseIcon, MapPinMinusIcon, Sandwich } from 'lucide-react';

export type FoodCardType = Omit<Recommendations, "author"> & { author?: Author }; 

const FoodCard = async ({ post } : { post: FoodCardType }) => {
    const { views, author, shop_name, category, _id, image, description, pitch, price, _createdAt  } = post;

  // const session = await auth();
  // console.log("My session ID in Food Card: ",session._id);


      return (
          <li className="p-2 md:w-1/3">
            <div className="h-full border-2 p-5 border-neutral-300 bg-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.15)] border-opacity-40 rounded-xl overflow-hidden">
              {/* Avatar and Header */}
              <div className="flex items-center pb-4">
              <Link href={`/user/${post.author?._id}`}>
                <img
                  className="inline-block size-[40px] rounded-full"
                  src={post.author?.image || 'https://via.placeholder.com/40'}
                  alt="Avatar"
                />
              </Link>

              <Link href={`/user/${post.author?._id}`}>
                <h2 className="ml-2">{post.author?.name}</h2>
              </Link>
                <span className="text-white-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  {post?._createdAt}
                </span>
                <span className="text-orange-800 bg-orange-200 rounded-lg p-2 inline-flex items-center leading-none text-sm">
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
    className="rounded-lg lg:h-48 md:h-36 w-full object-cover object-center shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
    src={post.image || 'https://via.placeholder.com/721x401'}
    alt="blog"
  />
</Link>
    
              {/* Card Body */}
              <div className="py-2">
                <h2 className="tracking-widest text-xs  pt-2 title-font font-medium text-gray-400 mb-1">
                  {post.category?.toLocaleLowerCase() || 'CATEGORY'}
                </h2>
                <div className="flex justify-between items-center">
                

                <Link href={`/recommendations/${post?._id}`}>
                  <div className="flex items-center gap-x-3">
                    <MapPinHouseIcon className="text-2xl text-gray-700" />
                    <h1 className="title-font text-lg font-semibold text-gray-900">
                      {post.shop_name || 'The 400 Blows'}
                    </h1>
                  </div>
                </Link>






                  <h1 className="title-font px-3 bg-green-200 text-lg font-md rounded-lg text-green-700 mb-3">
                    ₹{post.price}/-
                  </h1>

                </div>

                <Link href={`/recommendations/${post?._id}`}>
                <div className="flex items-start py-5">
                  <p className="flex gap-x-3 hover:cursor-pointer " title='Must Try'>
                    {post.description || 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'}
                  </p>
                </div>
                </Link>

                

    
                {/* Footer */}
                <div className="flex items-center flex-wrap ">
                  <Link className="text-white p-2 px-5 bg-neutral-900 rounded-3xl gap-x-3 inline-flex items-center md:mb-2 lg:mb-0" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    post.shop_name + " " + post.address)}`} >
                      <Map className='text-md '></Map>
                    <p className='flex items-center text-sm font-light'>
                      View in Google Maps
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </li>
      );
    };
    
    export default FoodCard;
    