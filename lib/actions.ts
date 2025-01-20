// "use server"

// import { auth } from "@/auth";
// import { parseServerActionResponse } from "@/lib/utils";
// import slugify from "slugify";
// import { writeClient } from "@/sanity/lib/write-client";

// export const createPitch = async (
//   state: any,
//   form: FormData,
  
// ) => {
//   // Log session details for debugging
//   const session = await auth();
//   if (!session) {
//     return parseServerActionResponse({
//       error: "Not signed in",
//       status: "ERROR",
//     });
//   }

//   try {
//     console.log("Session details:", session);
//   } catch (error) {
//     console.error("Error logging session:", session);
//   }
  

//   const formEntries = Object.fromEntries(form);
//   const { shop_name, description, category, address, link, pitch, name, username } = formEntries;

//   const slug = slugify(shop_name as string, { lower: true, strict: true });

//   try {
//     const recommendations = {
//       shop_name,
//       description,
//       category,
//       address,
//       image: link,
//       slug: {
//         _type: "slug",
//         current: slug,
//       },
//       author: {
//         _type: "reference",
//         _ref: session?.id,  // Ensure this ID points to an existing author document
//       },
//       pitch,
//       name,
//       username
//     };

//     const result = await writeClient.create({ _type: "recommendations", ...recommendations });

//     return parseServerActionResponse({
//       ...result,
//       status: "SUCCESS",
//     });
//   } catch (error) {
//     console.error("Error creating pitch:", error);

//     return parseServerActionResponse({
//       error: "Error creating pitch",
//       status: "ERROR",
//     });
//   }
// };
"use server"

import { auth } from "@/auth"; // Assuming your authentication function is in "@/auth"
import { parseServerActionResponse } from "@/lib/utils"; 
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createPitch = async (
  state: any,
  form: FormData,
) => {
  const session = await auth();
  if (!session) {
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });
  }

  // Inspect the session object to find the correct user ID property
  // console.log("Session details:", session); 

  const formEntries = Object.fromEntries(form);
  const { shop_name, description, category, address, link, pitch, name, username, price } = formEntries;

  const slug = slugify(shop_name as string, { lower: true, strict: true });

  try {
    const author = {
      _type: "reference",
      _ref: session?.id || session?._id, // Check if _id works too
    };    

    const recommendations = {
      shop_name,
      description,
      category,
      address,
      price,
      image: link,
      slug: {
        _type: "slug",
        current: slug,
      },
      author: author,
      pitch,
      name,
      username
    };

    const result = await writeClient.create({ _type: "recommendations", ...recommendations });

    return parseServerActionResponse({
      ...result,
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("Error creating pitch:", error);

    return parseServerActionResponse({
      error: "Error creating pitch",
      status: "ERROR",
    });
  }
};