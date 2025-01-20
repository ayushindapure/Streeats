import { defineQuery } from "next-sanity";

export const RECOMMENDATION_QUERY = 
defineQuery(`*[_type == "recommendations" && 
  (!defined($search) || $search == "" || category match $search || shop_name match $search || author->name match $search)
] | order(_createdAt desc) {
    description,
    category,
    _id,
    price,
    image,
    address,
    author -> {
      _id,
      name,
      image,
      bio,
      username
    },
    views,
    shop_name,
    pitch
}`)


export const RECOMMENDATION_BY_ID_QUERY = defineQuery(`
  *[_type == "recommendations" && _id == $id][0]{
    description,
    _id,
    price,
    category,
    image,
    address,
    author -> {
      _id, name, username, image, bio
    },
    views,
    shop_name,
    pitch
  }
`);

export const FOODCARD_VIEWS_QUERY = defineQuery(
  `*[_type == "recommendations" && _id == $id][0]{
      _id,
      views
  }
`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(
  `*[_type == "author" && id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio,
  }`
);

export const AUTHOR_BY_ID_QUERY = defineQuery(
  `*[_type == "author" && _id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio,
  }`
);

export const RECOMMENDATION_BY_AUTHOR_QUERY = `
*[_type == "recommendations" && author._ref == $id] | order(_createdAt desc) {
  _id,
  description,
  category,
  image,
  price,
  address,
  author->{
    _id,
    name,
    image,
    bio,
    username
  },
  views,
  shop_name,
  pitch
}
`
