import { client } from '@/sanity/lib/client'
import { RECOMMENDATION_BY_AUTHOR_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import FoodCard, { FoodCardType } from './FoodCard'

const UserRecommendations = async ({id}: {id:string}) => {
    const recommendations = await client.fetch(RECOMMENDATION_BY_AUTHOR_QUERY,{ id })
  return (
    <div>
            {recommendations.length > 0 ? (
  recommendations.map((recommendation: FoodCardType) => (
        <FoodCard key={recommendation._id} post={recommendation} />
  ))
) : (
  <p>No Posts Yet</p>
)}
    </div>
  )
}

export default UserRecommendations